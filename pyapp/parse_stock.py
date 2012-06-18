
import re

  
def parse_stock(message):
    """
    Testing Function
    """
    delimiter = ','
    ordered_keys = ['category','crop','price','location','quantity']
    ordered_regexp = [ '(?P<category>(?:buy)|(?:sell))',\
                       '(?P<crop>[^,]*)',\
                       '(?P<price>[0-9]+\.?[0-9]{0,2}\$)?',\
                       '(?P<location>[^,]*)',\
                       '(?P<quantity>[0-9]+\.?[0-9]+[kK][gG])']
    #Implicitly, if there are fewer delimiters assume price is the missing component
    c = message.count(delimiter)
    if c==3:
        i = ordered_keys.index('price')
        del ordered_keys[i]
        del ordered_regexp[i]
    
    exp = re.compile(delimiter.join(ordered_regexp))
    m = exp.match(message)
    if m is not None:
        for k in ordered_keys:
            D = {'id':-1}
            for k in ordered_keys:
                D[k] = m.group(k)
        return D
    
    return {}
    
def some_test_strings():
    return [ 'sell,tea,12$,mombasa,100kg',\
           'sell,beef,82$,south pole,82KG',\
            'sell,grain,13.00$,city,500.045Kg',\
            'buy,green beans,11.13$,village,34.56Kg',\
            'sell,grain,San Francisco,13Kg',\
            'buy,sweet meats,Montreal,13Kg',\
            'buy,corn,market,500.78Kg',\
            '',\
            'buy',\
            'sell',\
            'margarine']
    
if __name__ == '__main__':
    print("Testing on some inputs")
    L = some_test_strings()
    for l in L:
        print("Test: "+l)
        print("Result: "+\
              ','.join(map(lambda x: '('+str(x[0])+','+str(x[1])+')',parse_stock(l).items())))
        