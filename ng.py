import csv

with open('ng.csv', 'rb') as f:
	reader = csv.reader(f)
	
	vueltas = 0

	for row in reader:
	
		if vueltas != 0 : 
			cadena = '<tr>\n'
			for item in row:

				cadena = cadena + '<td>' + item + '</td>\n'
			
			cadena = cadena + '</tr>'

			print(cadena)
		vueltas = vueltas  + 1
