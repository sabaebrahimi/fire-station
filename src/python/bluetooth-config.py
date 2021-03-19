import serial
import json
import sys


port = sys.stdin.readline()
ser = serial.Serial(port, 38400, timeout=1.5)
line = str(ser.readline())
data = {}
counter = 0
while True:
    porti = sys.stdin.readlines()
    if porti != port:
        port = porti
        ser = serial.Serial(port, 38400, timeout=1.5)
    if (ser.isOpen()):
        x = ser.readline()
        if len(x) != 0:
            line = str(x)
            line = line[2:len(line) - 1]
            ls = line.split(",")
            for i in ls:
                if i.startswith('IT'):
                    data.update({'innerTemp': i[2:]})
                elif i.startswith('IH'):
                    data.update({'innerHum': i[2:]})
                elif i.startswith('OT'):
                    data.update({'outerTemp': i[2:]})
                elif i.startswith('OH'):
                    data.update({'outerHum': i[2:]})
                elif i.startswith('PG'):
                    data.update({'PPG': i[2:]})
                elif i.startswith('HS'):
                    data.update({'H2S': i[2:]})
                elif i.startswith('CO'):
                    data.update({'CO': i[2:]})
                elif i.startswith('CG'):
                    data.update({'combust': i[2:]})
                elif i.startswith('BA'):
                    data.update({'battery': i[2:]})
                elif i.startswith('WA'):
                    data.update({'walking': i[2:]})
                elif i.startswith('FF'):
                    data.update({'freefall': i[2:]})
            js = json.dumps(data)
            print (js)
            sys.stdout.flush()
        else:
            counter += 1
            if counter == 5:
                print ('disconnected')
                sys.stdout.flush()
    else:
        print("disconnected")
ser.close()
