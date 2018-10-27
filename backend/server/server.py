import os
import json
import numpy as np
import pandas as pd
from flask import Flask
from flask import request
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

df = pd.read_csv(os.path.abspath(os.path.join(os.path.dirname( __file__ ), '../..', 'ml/in/train-pruned.csv')))
#full_df = test_df.merge(train_df)

parser = reqparse.RequestParser()
parser.add_argument('task')

def row_to_obj(row):
    obj = {}
    for key in row.index:
        if isinstance(row[key], (int, np.int64)):
            obj[key]= int(row[key])
        elif isinstance(row[key], (bool, np.bool_)):
            obj[key]= bool(row[key])
        else:
            obj[key] = row[key]
    return obj

def dataframe_rows_to_json_list(dfr):
    list = []
    for i in dfr.index:
        list.append(row_to_obj(df.loc[i]))
    return list

def stringify_dict_keys(dictt):
    result = {}
    for key in dictt.keys():
        val = dictt[key]
        result[str(key)] = str(val)
    return result


class Visit(Resource):
    def get(self):
        startdate = request.args.get('startdate')
        enddate = request.args.get('enddate')
        result = df.loc[(df['date'] >= np.int64(startdate)) & (df['date'] <= np.int64(enddate))]

        list = dataframe_rows_to_json_list(result)
        return list
        

class Visitor(Resource):
    def get(self, visitor_id):
        
        pass             


api.add_resource(Visit, '/current')
api.add_resource(Visitor, '/current/<visitorId>')
#api.add_resource(Visit, '/predicted')


if __name__ == '__main__':
    app.run(debug=True)

