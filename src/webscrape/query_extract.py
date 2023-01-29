
import csv

def search_keywords(file_path, user_input):
    textList = []
    with open(file_path, 'r') as file:
        csvreader = csv.reader(file, delimiter=',')
        for row in csvreader:
            textList.extend(row)

    with open(user_input, 'r') as file:
        userList = file.readlines()

    matches = []
    with open ('matched.txt', 'w', newline='') as f:
       
        for keyword in userList:
            for i in range(0, len(textList), 5):
                line = textList[i]
                match = re.search(keyword.lower(), line.lower())
                if match != None:
                    outputLine = line+"#"+textList[i+1]+"#"+textList[i+2]+"#"+textList[i+3]+"#"+textList[i+4]+"\n"
                    f.write(outputLine)


file_path = 'tsa_requirement.csv'
user_input = 'userInput.txt'
search_keywords(file_path, user_input)