import json
import pymssql
import os

cnxn = pymssql.connect("localhost:50325", "sa", "duan002349", "SQL Test") #connect to Microsoft SQL, IP, Username, password, Database Name
conn = cnxn.cursor() #SQL execute script
conn.execute("DELETE FROM BPM")
dircount = 1 #Folder Number
path = r"C:\Users\liuka\Downloads\pmdata" # Folder Location
files = os.listdir(path) # List All Files or Folder
for file in files: # Process each File or Folder
    if os.path.isdir(r"C:\Users\liuka\Downloads\pmdata" +"\\" +file): # IF is Floder, process
        row = open(path + "\\" + str(file) + r"\fitbit\heart_rate.json", "r") #Open JSON file
        row1 = row.read() # Read Json file
        row2 = json.loads(row1)#Convert Json to Python Dict
        length = len(row2) # Total rows
        i = 0 #
        while i < length:
            id = dircount
            date = row2[i]['dateTime']
            bpm = row2[i]['value']['bpm']
            confidence = row2[i]['value']['confidence']
            if confidence == 3:
                conn.execute("INSERT INTO BPM VALUES (%d, %s, %d, %d)", (id, date, bpm, confidence))
                print(i, dircount)
            i += 1
        dircount += 1;
cnxn.commit()
conn = cnxn.cursor() #SQL execute script
conn.execute("DELETE FROM BPMBYHOUR")
conn.execute("select ID, TRY_CAST(CONCAT(year(Date), '/',MONTH(Date),'/', DAY(Date),' ', DATEPART(hour, Date), ':00:00') as datetime) as Date, AVG(BPM) as BPM, confidence from BPM group by year(Date), MONTH(Date), DAY(Date), DATEPART(hour, Date), ID, confidence ORDER BY ID, Date ASC")
row = conn.fetchone()
temp = []
while row:
    temp.append([row[0], str(row[1]), row[2], row[3]])
    row = conn.fetchone()
for i in temp:
    conn.execute("INSERT INTO BPMBYHOUR VALUES (%d, %s, %d, %d)", (i[0], str(i[1]), i[2], i[3]))
cnxn.commit()
cnxn.close()
print("Done")

