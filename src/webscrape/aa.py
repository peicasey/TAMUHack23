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

driver.get('https://www.aa.com/i18n/travel-info/baggage/restricted-items.jsp') # Getting page HTML through request
soup = BeautifulSoup(driver.page_source, 'html.parser') # Parsing content using beautifulsoup. Notice driver.page_source instead of page.content
 
#with open ('aa_restricted_items', 'w', newline='') as f:
    #writer = csv.writer(f)

headerList = ["Category, Examples, Carry-On Allowed, Checked Bags Allowed, Notes"]
    #writer.writerow(headerList)
headerList.clear()

count = 1
links = soup.select("div.aa-container.container section section a.collapsible-toggle")
for anchor in links:
    tmpList = anchor.text.strip().split("\n")
    headerList.append(tmpList[1])
    print(tmpList)
    print()
    #count += 1
print(headerList)
#category
#example
#carry-on
#checked
#notes