import serial
data = serial.Serial('/dev/ttyACM0',9600)
while (1==1):
       data2 = (data.readline().strip())
       data3 = (data2.decode('utf-8'))
       print data3

       f = open('node.c', 'w')
       f.write(data3) 
       f.close()
#print data3
