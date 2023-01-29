import requests
import csv
from bs4 import BeautifulSoup
from selenium import webdriver

def remove_newlines(a_string):
    tmpList = a_string.splitlines()
    returnList = []
    for x in tmpList:
        if x.strip() != "":
            returnList.append(x)
    return returnList

#document.querySelectorAll("table tbody tr td.titleColumn a")[0].innerText
option = webdriver.ChromeOptions()
# I use the following options as my machine is a window subsystem linux. 
# I recommend to use the headless option at least, out of the 3
option.add_argument('--headless')
option.add_argument('--no-sandbox')
option.add_argument('--disable-dev-sh-usage')

# Replace YOUR-PATH-TO-CHROMEDRIVER with your chromedriver location
driver = webdriver.Chrome('/Users/yuqiancao/Documents/TAMU/Hackathon/chromedriver_mac_arm64/chromedriver', options=option)

driver.get('https://www.tsa.gov/travel/security-screening/whatcanibring/all-list') # Getting page HTML through request
soup = BeautifulSoup(driver.page_source, 'html.parser') # Parsing content using beautifulsoup. Notice driver.page_source instead of page.content
 
with open ('tsa_requirement.csv', 'w', newline='') as f:
    writer = csv.writer(f)

    #header = soup.select("table.views-table thead tr th")
    headerList = ["Item", "Description", "Carry on Bags", "Checked Bags", "Notes"]
    #for anchor in header:
        #headerList.append(anchor.text)
    writer.writerow(headerList)

    count = 1
    links = soup.select("table.views-table tbody tr td")
    bodyList = []
    note = ""
    for anchor in links:
        strText = anchor.text.replace(u'\xa0', u' ')
        strText = strText.strip()
        if count % 3 == 1:
            tmpList = remove_newlines(strText)
            if len(tmpList) > 2:
                note = tmpList[1]
                bodyList.append(tmpList[0])
                bodyList.append(tmpList[2])
            elif len(tmpList) == 1:
                tmpList.append("")
                bodyList.extend(tmpList)
            else:
                bodyList.extend(tmpList)
        elif count % 3 == 2: 
            if strText == "": 
                count -= 1
            else:
                bodyList.append(strText)
        else:
            if strText == "":
                count -= 1
            else:
                bodyList.append(strText)
                if note != "":
                    bodyList.append(note)
                writer.writerow(bodyList)
                bodyList.clear()
                note = ""
        count += 1
