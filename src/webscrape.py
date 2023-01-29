import requests
import csv
from bs4 import BeautifulSoup
from selenium import webdriver


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
 
with open ('csv_file', 'w', newline='') as f:
    writer = csv.writer(f)

    header = soup.select("table.views-table thead tr th")
    headerList = []
    for anchor in header:
        headerList.append(anchor.text)
    writer.writerow(headerList)

    count = 1
    links = soup.select("table.views-table tbody tr td")
    bodyList = []
    for anchor in links:
        if count % 3 == 1:
            tmpList = anchor.text.strip().split("\n")
            bodyList.extend(tmpList)
        elif count % 3 == 2: 
            bodyList.append(anchor.text.strip())
        else:
            bodyList.append(anchor.text.strip())
            writer.writerow(bodyList)
            bodyList.clear()
        count += 1
