from zipline.api import order, symbol

import logbook
log = logbook.Logger('algo')

def initialize(context):
    pass


def handle_data(context, data):
    sym = symbol("AAPL")
    log.info("handle_data: last_traded={} price={} OHLC={}/{}/{}/{} Volume={}".format(
        data.current(sym, 'last_traded'),
        data.current(sym, 'price'),
        data.current(sym, 'open'),
        data.current(sym, 'high'),
        data.current(sym, 'low'),
        data.current(sym, 'close'),
        data.current(sym, 'volume')))