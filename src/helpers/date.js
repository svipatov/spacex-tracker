import fecha from 'fecha'

export const americanDate = date => fecha.format(date, 'Do MMM, YYYY')
