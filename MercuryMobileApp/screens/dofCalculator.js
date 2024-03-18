import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, Button, ScrollView } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'; 
import SegmentedControlTab from "react-native-segmented-control-tab";

//All lens data
const lensData = [
    {id:'1', name:'Apo-Digitar 35mm f/5.6 XL', base:['RS0, B6.4', 'RS0, B7', 'RS0, B7.25', 'RS0, B7.5'], spacer:['none', 'none', 'none', 'none'], bolts:['W', 'W', 'none', 'none'], subj_dist:[300, 16, 9, 4.5], f_22:['4 - INF', '3.25 - INF', '3 - INF', '2.25 - INF'], f_16:['5.5 - INF', '4.25 - INF', '3.5 - INF', '2.5 - 21'], f_8:['11 -  INF', '7 - INF', '5 - 45', '3.2 - 7.5']},
    {id:'2', name:'SA 47mm f/5.6', base:['none', 'none', 'none', 'none'], spacer:['none', 'S1', 'S2', 'S3'], bolts:['10', '10', '10', '10'], subj_dist:['INF', 25, 12, 6.5], f_22:['7 - INF', '5.75 - INF', '4.5 - INF', '3.5 - 46'], f_16:['10 - INF', '6.5 - INF', '5.5 - INF', '4 - 12'], f_8:['20 -  INF', '12 - INF', '7.5 - 30', '5 - 9']},
    {id:'3', name:'SA 47mm f/5.6 XL', base:['none', 'none', 'none'], spacer:['S1', 'S2', 'S3'], bolts:['10', '10', '10'], subj_dist:[40, 17, 10], f_22:['6 - INF', '5 - INF', '4.25 - INF'], f_16:['8 - INF', '6.5 - INF', '5 - 500'], f_8:['13 -  INF', '9.5 - 105', '7 - 20']},
    {id:'4', name:'Bronica 50mm 2.8 MC', base:['BASE 14', 'BASE 14', 'BASE 14', 'BASE 14'], spacer:['1', '2', '3', '4'], bolts:['35', '35', '35', '35'], subj_dist:[150, 45, 10, 6], f_22:['7.75 - INF', '7 - INF', '4.5 - INF', '3.5 - 22'], f_16:['10.5 - INF', '9 - INF', '5.5 - 75', '4 - 12'], f_8:['20 -  INF', '15 - INF', '7 - 18', '5 - 8']},
    {id:'5', name:'Grandagon 58mm f/5.6', base:['BASE 14', 'BASE 15', 'BASE 16'], spacer:['none', 'none', 'none'], bolts:['25', '25', '25'],subj_dist:[35, 15, 7], f_22:['8.5 - INF', '6.5 - INF', '4.5 - 19'], f_16:['10.75 - INF', '7.5 - 400', '5 - 12.5'], f_8:['16.5 - INF', '10 - 29', '5.75 - 9']},
    {id:'6', name:'Ilex 60mm f/16', base:['BASE 5.5', 'BASE 6', 'BASE 6.4'], spacer:['none', 'none', 'none'], bolts:['W', 'W', 'W'], subj_dist:[26, 14, 8], f_22:['8.25 - INF', '6.5 - INF', '4.75 - 24.5'], f_16:['10 - INF', '7.5 - 60', '5.5 - 16'], f_8:['15 - 122', '10 - 22', '6.5 - 11']},
    {id:'7', name:'Apo-Digitar 60mm f/4', base:['BASE 4.6', 'BASE 5', 'BASE 5.5'], spacer:['none', 'none', 'none'], bolts:['W', 'W', 'W'], subj_dist:[9, 7.5, 5], f_22:['5 - 37', '4.5 - 20', '3.5 - 8.5'], f_16:['5.5 - 19', '5.25 - 13.5', '3.75 - 7'], f_8:['7 - 12', '6.25 - 9.5', '4.25 - 5.5']},
    {id:'8', name:'Grandagon 65mm f/4.5', base:['BASE 8', 'BASE 8', 'BASE 8', 'BASE 8', 'BASE 8', 'BASE 8', 'BASE 8', 'BASE 8', 'BASE 8'], spacer:['2', '3', '4', '5', '6', '7', '8', '9', '10'], bolts:['30', '30/35W', '30/35W', '30/35W', '30/35W', '30/35W', '35W', '35W', '35W'], subj_dist:['INF', 75, 25, 12, 9, 6, 4.75, 4.5, 3.75], f_22:['13.25 - INF', '11.5 - INF', '8.75 - INF', '6.5 - 89.5', '5.5 - 25.5', '4.25 - 10.5', '3.5 - 7.25', '3.5 - 6.5', '3 - 5'], f_16:['18.5 - INF', '15.5 - INF', '11 - INF', '7.5 - 31', '6.25 - 16.5', '4.5 - 8.5', '3.75 - 6.25', '3.75 - 5.75', '3.25 - 4.5'], f_8:['35.75 - INF', '25.5 - INF', '15.25 - 70.5', '9.25 - 17.25', '7.25 - 11.75', '5.25 - 7', '4.25 - 5.5', '4 - 5', '3.5 - 4.25']},
    {id:'9', name:'Angulon 65mm f/6.8', base:['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'], spacer:['5', '6', '7', '8', '9', '10', '11', '12', '13'], bolts:['25W', '25W', '25W', '25W', '25W', '25', '25', '25', '25'], subj_dist:['INF', 100, 25, 12, 9, 7, 5, 4.25, 3.5], f_22:['13.25 - INF', '12 - INF', '9 - INF', '6.5 - 89.5', '5.5 - 25.5', '4.5 - 14', '3.75 - 7.75', '3.25 - 6', '2.75 - 4.5'], f_16:['18.5 - INF', '16.25 - INF', '11 - INF', '7.5 - 31', '6.25 - 16.5', '5.25 - 10.75', '4 - 6.75', '3.5 - 5.5', '3 - 4.25'], f_8:['35.75 - INF', '27.75 - INF', '15.25 - 70.25', '9.25 - 17.25', '7.5 - 11.75', '6 - 8.5', '4.5 - 5.75', '3.75 - 4.75', '3.25 - 3.75']},
    {id:'10', name:'SA 65mm f/8', base:['BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9'], spacer:['1', '2', '3', '4', '5', '6', '7', '8'], bolts:['30', '30', '30', '30', '30', '30/35W', '35W', '35W'], subj_dist:['INF', 40, 15, 10, 8, 6.5, 5, 4], f_22:['13.25 - INF', '10.25 - INF', '7.25 - INF', '5.75 - 35.5', '5 - 18.75', '4.5 - 12', '3.75 - 7.75', '3.25 - 5.5'], f_16:['18.5 - INF', '13 - INF', '8.5 - 64.75', '6.75 - 20.25', '5.75 - 13.5', '5 - 9.75', '4 - 6.75', '3.25 - 5'], f_8:['36 - INF', '19.75 - INF', '10.75 - 24.5', '8 - 13.5', '6.75 - 10', '5.5 - 7.75', '4.5 - 5.75', '3.75 - 4.5']},
    {id:'11', name:'Fujinon 65mm f/8', base:['BASE 10', 'BASE 10', 'BASE 10', 'BASE 10', 'BASE 10', 'BASE 10', 'BASE 10', 'BASE 10'], spacer:['1', '2', '3', '4', '5', '6', '7', '8'], bolts:['30', '30', '30', '30', '30', '30/35W', '35W', '35W'], subj_dist:['INF', 20, 9, 7.5, 6, 5, 4.5, 3.75], f_22:['13.25 - INF', '8.25 - INF', '5.5 - 25.5', '5 - 16', '4.25 - 10.5', '3.75 - 7.75', '3.5 - 6.5', '3 - 5'], f_16:['18.5 - INF', '9.75 - INF', '6.25 - 16.5', '5.5 - 12', '4.75 - 8.5', '4 - 6.75', '3.75 - 5.75', '3.25 - 4.5'], f_8:['35.75 - INF', '13.25 - 41', '7.25 - 11.75', '6.25 - 9.25', '5.25 - 7', '4.5 - 5.75', '4 - 5', '3.5 - 4.25']},
    {id:'12', name:'Super Topcor 65mm f/7', base:['BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9', 'BASE 9'], spacer:['1', '2', '3', '4', '5', '6'], bolts:['30', '30', '30', '30', '30', '30'], subj_dist:[175, 30, 15, 9, 7.5, 5.5], f_22:['12.5 - INF', '9.5 - INF', '7.25 - INF', '5.5 - 25.5', '5 - 16', '4 - 9'], f_16:['17.5 - INF', '11.75 - INF', '8.5 - 64.5', '6.25 - 16.5', '5.5 - 12', '4.25 - 7.5'], f_8:['31.5 - INF', '17 - 132', '10.75 - 24.5', '7.25 - 11.5', '6.25 - 9.25', '5 - 6.25']},
    {id:'13', name:'Graflex Optar 65mm f/6.8', base:['BASE 8', 'BASE 9', 'BASE 10', 'BASE 11', 'BASE 12'], spacer:['none', 'none', 'none', 'none', 'none'], bolts:['W', 'none', 'none', '25W', '25W'], subj_dist:['INF', 35, 15, 6, 4.5], f_22:['13.5 - INF', '9.75 - INF', '7.25 - INF', '4.25 - 10.5', '3.5 - 6.5'], f_16:['19.25 - INF', '12.5 - INF', '8.5 - 64.75', '4.75 - 8.5', '3.75 - 5.75'], f_8:['38.5 - INF', '18.5 - 362.5', '10.75 - 24.5', '5.25 - 7', '4 - 5',]},
    {id:'14', name:'Horseman 75mm f/5.6', base:['BASE 12', 'BASE 12', 'BASE 12', 'BASE 12', 'BASE 12', 'BASE 12', 'BASE 12', 'BASE 12'], spacer:['1', '2', '3', '4', '5', '6', '7', '8'], bolts:['35W', '35W', '35W', '35W', '35W', '35', '35', '35'], subj_dist:[100, 40, 20, 12, 10, 8, 7.3, 5], f_22:['15.5 - INF', '12.5 - INF', '9.5 - INF', '7.25 - 34', '6.5 - 21.75', '5.75 - 14', '5.25 - 12', '4 - 6.75'], f_16:['20.5 - INF', '15.75 - INF', '11.25 - 87', '8.25 - 22.25', '7.25 - 16', '6.25 - 11.5', '5.75 - 10', '4.25 - 6'], f_8:['34 - INF', '22.5 - 178', '14.5 - 32.5', '9.75 - 15.5', '8.5 - 12.25', '7 - 9.5', '6.5 - 8.5', '4.5 - 5.5']},
    {id:'15', name:'Grandagon 75mm f/6.8', base:['BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16', 'BASE 16'], spacer:['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], bolts:['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'], subj_dist:[150, 30, 16, 12, 9, 7.25, 6, 5, 4.5, 4], f_22:['16.25 - INF', '11.5 - INF', '8.5 - 122', '7.25 - 34', '6 - 17.5', '5.25 - 11.75', '4.5 - 8.75', '4 - 6.75', '3.75 - 5.75', '3.25 - 5'], f_16:['22 - INF', '14 - INF', '10 - 41.5', '8.25 - 22.25', '6.75 - 13.75', '5.75 - 10', '5 - 7.75', '4.25 - 6.25', '4 - 5.5', '3.5 - 4.75'], f_8:['38.5 - INF', '19 - 71.5', '12.25 - 23', '9.75 - 15.5', '7.75 - 11', '6.5 - 8.5', '5.5 - 6.75', '4.5 - 5.5', '4.25 - 5', '3.75 - 4.25']},
    {id:'16', name:'Super Angulon 75mm f/8', base:['BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21'], spacer:['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], bolts:['40/45W', '40/45W', '45W', '45W', '45W', '45W', '45W/45', '45', '45', '45'], subj_dist:[150, 40, 20, 14, 11, 8, 6.5, 5.5, 4.75, 4], f_22:['16.25 - INF', '12.5 - INF', '9.5 - INF', '8 - 58', '7 - 27', '5.5 - 14', '4.75 - 10', '4.25 - 7.75', '3.75 - 6.25', '3.25 - 5'], f_16:['22 - INF', '15.75 - INF', '11.25 - 87', '9.25 - 30.25', '7.75 - 19', '6.25 - 11.5', '5.25 - 8.5', '4.5 - 7', '4 - 5.75', '3.5 - 4.75'], f_8:['38.5 - INF', '22.5 - 178', '14.5 - 32.5', '11 - 19', '9 - 14', '7 - 9.5', '5.75 - 7.5', '5 - 6.25', '4.5 - 5.25', '3.75 - 4.25']},
    {id:'17', name:'Fujinon SW 75mm F/8', base:['BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21', 'BASE 21'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], bolts:['none', 'none', '40/45W', '40/45W', '45W', '45W', '45W', '45W/45', '45', '45'], subj_dist:['INF', 200, 50, 19, 11, 9, 7, 5.2, 4.75, 4.2], f_22:['16.25 - INF', '16.5 - INF', '13.5 - INF', '9.25 - INF', '7 - 27', '6 - 17.5', '5 - 11.25', '4 - 7.25', '3.75 - 6.25', '3.25 - 5'], f_16:['24.5 - INF', '22.75 - INF', '17 - INF', '11 - 71', '7.75 - 19', '6.75 - 13.75', '5.5 - 9.5', '4.5 - 6.5', '4 - 5.75', '3.5 - 4.75'], f_8:['46.5 - INF', '41 - INF', '25.5 - 1699', '14 - 30', '9 - 14', '7.75 - 11', '6.25 - 8', '4.75 - 5.75', '4.5 - 5.25', '3.75 - 4.25']},
    {id:'18', name:'Heligon 80mm f/2.8', base:['BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19', 'BASE 19'], spacer:['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], bolts:['none', 'none', 'none', 'none', 'none', '45W', '45W', '45W', '45W', '45W/45', '45', '45'], subj_dist:[200, 30, 20, 12, 10, 8, 7, 6, 5.5, 5, 4.5, 4], f_22:['18.75 - INF', '12.25 - INF', '10.25 - 467', '7.75 - 28', '6.75 - 19', '5.75 - 12.75', '5.25 - 10.5', '4.75 - 8.25', '4.5 - 7.25', '4 - 6.5', '3.75 - 5.75' ,'3.5 - 5'], f_16:['25.5 - INF', '15 - INF', '12 - 62', '8.5 - 20', '7.5 - 15', '6.25 - 11', '5.75 - 9', '5 - 7.5', '4.75 - 6.75',  '4.25 - 6', '4 - 5.25', '3.5 - 4.5'], f_8:['45.25 - INF', '20 - 61.25', '15 - 30.25', '10 - 15', '8.5 - 12', '7 - 9.25', '6.25 - 8', '5.5 - 6.75', '5 - 6',  '4.75 - 5.5', '4.25 - 4.75', '3.75 - 4.25']},
    {id:'19', name:'Apo-Digitar 80mm f/4', base:['BASE 17', 'BASE 17', 'BASE 17', 'BASE 17', 'BASE 17', 'BASE 17', 'BASE 17', 'BASE 17'], spacer:['2', '3', '4', '5', '6', '7', '8', '9'], bolts:['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'], subj_dist:[60, 25, 15, 12, 9, 8, 6, 5.5], f_22:['15.5 - INF', '11.5 - INF', '8.75 - 52.5', '7.75 - 28', '6.5 - 15.5', '5.75 - 12.75', '4.75 - 8.25', '4.5 - 7.25'], f_16:['19.75 - INF', '13.5 - 165', '10 - 30.25', '8.5 - 20', '7 - 12.75', '6.5 - 11', '5 - 7.5', '4.75 - 6.75'], f_8:['30 - INF', '17.5 - 43.5', '12 - 20', '10 - 15', '7.75 - 10.5', '7 - 9.25', '5.5 - 6.75', '5 - 6']},
    {id:'20', name:'Apo-Digitar 90mm f/4.5', base:['BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25', 'BASE 25'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['45', '45', '45', '45/50W', '45/50W', '45/50W', '50W', '50W', '50W', '50', '50', '50', '50', '55W'], subj_dist:['INF', 150, 60, 22, 16, 12, 10, 8, 7, 6, 5.5, 5, 4.5, 3.75], f_22:['24.75 - INF', '22.25 - INF', '18.25 - INF',  '12 - 131', '10 - 40.25', '8.25 - 21.75', '7.25 - 16', '6.25 - 11.5', '5.5 - 9.5', '5 - 7.75', '4.5 - 6.75', '4.25 - 6' , '4 - 5.25', '3.25 - 4.25'], f_16:['34.5 - INF', '29.75 - INF', '23 - INF', '14 - 53.5', '11.25 - 27.75', '9.25 - 17.5', '8 - 13.5', '6.75 - 10', '6 - 8.5', '5.25 - 7', '4.75 - 6.5',  '4.5 - 5.75', '4 - 5', '3.5 - 4.25'], f_8:['64.5 - INF', '49.5 - INF', '33.25 - 314', '17 - 31.25', '13.25 - 20.25', '10.5 - 14.25', '8.75 - 11.5', '7.25 - 9', '6.5 - 7.75', '5.5 - 6.5', '5.25 - 6',  '4.75 - 5.25', '4.25 - 4.75', '3.5 - 4']},
    {id:'21', name:'Angulon 90mm f/6.8', base:['BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28', 'BASE 28'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], bolts:['50W', '50W', '50W', '50', '50', '50', '50', '50', '50/55W', '55W', '55W', '55W/55', '55'], subj_dist:[35, 15, 12, 10, 9, 8, 7, 6, 5.5, 5, 4.5, 4.25, 4], f_22:['15 - INF', '9.5 - 34.5', '8.25 - 21.75', '7.25 - 16', '6.75 - 13.5', '6.25 - 11.5', '5.5 - 9.5', '5 - 7.75', '4.5 - 6.75', '4.25 - 6', '4 - 5.25', '3.75 - 5', '3.5 - 4.75'], f_16:['18 - 586', '10.75 - 25', '9.25 - 17.5', '8 - 13.5', '7.25 - 11.75', '6.75 - 10', '6 - 8.5', '5.25 - 7', '5 - 6.5',  '4.5 - 5.75', '4 - 5', '3.75 - 4.75', '3.75 - 4.5'], f_8:['23.75 - 66', '12.5 - 18.75', '10.5 - 14.25', '8.75 - 11.5', '8 - 10.25', '7.25 - 9', '6.5 - 7.75', '5.5 - 6.5', '5.25 - 6',  '4.75 - 5.25', '4.25 - 4.75', '4 - 4.5', '3.75 - 4.25']},
    {id:'22', name:'Tessar 100mm f/3.5', base:['BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['55W', '55W', '55W', '55W', '55W', '55W', '55W', '55W/55', '55W/55', '55W/55', '55', '55', '55', '60W'], subj_dist:['INF', 40, 25, 19, 16, 13, 11, 8.5, 8, 7, 6.5, 6, 5, 4.5], f_22:['30.5 - INF', '18 - INF', '14.25 - 107',  '12 - 45.25', '10.75 - 31.25', '9.25 - 21.5', '8.25 - 16.5', '6.75 - 11.5', '6.5 - 10.5', '5.75 - 8.75', '5.5 - 8', '5 - 7.25', '4.5 - 5.75', '4 - 5.25'], f_16:['42 - INF', '21.5 - 309', '16.25 - 54.5', '13.5 - 32.25', '12 - 24.5', '10.25 - 18', '9 - 14.5', '7.25 - 10.5', '6.75 - 9.5', '6.25 - 8.25', '5.75 - 7.5',  '5.25 - 6.75', '4.5 - 5.5', '4 - 5'], f_8:['77 - INF', '28 - 71', '19.75 - 34.25', '15.75 - 24', '13.75 - 19.25', '11.5 - 15', '10 - 12.5', '7.75 - 9.25', '7.5 - 8.75', '6.5 - 7.5', '6 - 7',  '5.75 - 6.5', '4.75 - 5.25', '4.25 - 4.75']},
    {id:'23', name:'Nikkor-W 100mm f/5.6', base:['BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39'], spacer:['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['60', '60', '60', '60', '60/65W', '60/65W', '65W', '65W', '65W', '65W', '65W/65', '65', '65'], subj_dist:['INF', 40, 25, 20, 16, 13, 10, 8.75, 7.75, 7, 6.25, 5.75, 4.5], f_22:['30.5 - INF', '18 - INF', '14.25 - 107',  '12.5 - 51.5', '10.75 - 31.25', '9.25 - 21.5', '7.75 - 14.25', '7 - 11.75', '6.25 - 20', '5.75 - 8.75', '5.5 - 8', '5 - 7' , '4 - 5.25'], f_16:['42 - INF', '21.5 - 309', '16.25 - 54.5', '14 - 35.25', '12 - 24.5', '10.25 - 18', '8.25 - 12.75', '6.75 - 9.25', '6.25 - 8.25', '5.5 - 7.25', '5.25 - 6.5',  '4.25 - 5'], f_8:['77 - INF', '28 - 71', '19.75 - 34.25', '16.5 - 25.5', '13.75 - 19.25', '11.5 - 15', '9.5 - 11.25', '8 - 9.5', '7.25 - 8.5', '6.5 - 7.5', '6 - 6.75',  '5.5 - 6', '4.5 - 4.75']},
    {id:'24', name:'Apo-Digitar 100mm f/5.6', base:['BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35', 'BASE 35'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['55', '55', '55', '55', '55/60W', '55/60W', '60W', '60W', '60W', '60W/60', '60', '60', '60/65W', '65W'], subj_dist:['INF', 50, 27, 22, 16, 13, 11, 9, 8, 7, 6.3, 6, 5, 4.5], f_22:['30.5 - INF', '19.75 - INF', '14.75 - 157',  '13.25 - 67.25', '10.75 - 31.25', '9.25 - 21.5', '8.25 - 16.5', '7 - 12.25', '6.5 - 10.5', '5.75 - 8.75', '5.25 - 7.75', '5 - 7.25', '4.5 - 5.75', '4 - 5.25'], f_16:['42 - INF', '24 - INF', '17 - 65', '15 - 42', '12 - 24.5', '10.25 - 18', '9 - 14.5', '7.5 - 11', '6.75 - 9.5', '6.25 - 8.25', '5.5 - 7.25', '5.25 - 6.75',  '4.5 - 5.5', '4.25 - 5'], f_8:['77 - INF', '32.5 - 110', '21 - 38.25', '17.75 - 29', '13.75 - 19.25', '11.5 - 15', '9.75 - 12.5', '8.25 - 10', '7.5 - 8.75', '6.5 - 7.5', '6 - 6.75',  '5.75 - 6.5', '4.75 - 5.25', '4.5 - 4.75']},
    {id:'25', name:'Sironar-N 100mm f/5.6', base:['BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39', 'BASE 39'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['60', '60', '60', '60', '60', '60', '60', '60', '60/65W', '65W', '65W', '65W/65', '65', '65'], subj_dist:[100, 35, 21, 17, 15, 12, 10, 8.5, 8, 7, 6.5, 6, 5, 4.5], f_22:['24.5 - INF', '17 - INF', '12.75 - 58.5',  '11.25 - 35.25', '10.25 - 27.5', '8.75 - 18.75', '7.75 - 14.25', '6.75 - 11.5', '6.5 - 10.5', '5.75 - 8.75', '5.5 - 8', '5 - 7.25', '4.5 - 5.75', '4 - 5.25'], f_16:['31.5 - INF', '20 - 146.5', '14.5 - 38.5', '12.5 - 26.75', '11.25 - 22', '9.5 - 16', '8.25 - 12.75', '7.25 - 10.5', '6.75 - 9.5', '6.25 - 8.25', '5.75 - 7.5',  '5.25 - 6.75', '4.5 - 5.5', '4.25 - 5'], f_8:['48 - INF', '25.5 - 56.5', '17 - 27.25', '14.5 - 20.75', '13 - 18', '10.5 - 13.75', '9 - 11.25', '7.75 - 9.25', '7.5 - 8.75', '6.5 - 7.5', '6 - 7',  '5.75 - 6.5', '4.75 - 5.25', '4.5 - 4.75']},
    {id:'26', name:'Symmar-S 100mm f/5.6', base:['BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34', 'BASE 34'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], bolts:['55', '55', '55', '55', '55', '55', '55', '60W', '60W', '60W', '60W', '60W'], subj_dist:['INF', 200, 60, 40, 28, 20, 15, 10, 9.5, 8, 7, 6.5], f_22:['32.25 - INF', '27.75 - INF', '21 - INF',  '18 - INF', '15 - 198.5', '12.5 - 51.5', '10.5 - 27.5', '7.75 - 14.25', '7.5 - 13.5', '6.5 - 10.5', '5.75 - 8.75', '5.5 - 8'], f_16:['45.5 - INF', '37.25 - INF', '26 - INF', '21.5 - 309', '17.5 - 71.5', '14 - 35.25', '11.5 - 22', '8.25 - 12.75', '8 - 12', '6.75 - 9.5', '6.25 - 8.25',  '5.75 - 7.5'], f_8:['91 - INF', '63 - INF', '36.5 - 174', '28 - 71', '21.5 - 40.5', '16.5 - 25.5', '13 - 18', '9 - 11.25', '8.75 - 10.5', '7.5 - 8.75', '6.5 - 7.5',  '6 - 7']},
    {id:'27', name:'Trioptar 103mm f/4.5', base:['BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30', 'BASE 30'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['50', '50/55W', '50/55W', '55W', '55W', '55W', '55W', '55W', '55W/55', '55W/55', '55W/55', '55', '55', '60W'], subj_dist:[60, 26, 20, 15, 13, 12, 10.5, 9.5, 8, 7.5, 6.75, 6, 5, 4.5], f_22:['22 - INF', '15 - 104.25', '12.75 - 47',  '10.5 - 26.25', '9.5 - 20.5', '9 - 18.25', '8 - 15', '7.5 - 13', '6.5 - 10.25', '6.25 - 9.5', '5.75 - 8.25', '5.25 - 7.25' , '4.5 - 5.75', '4 - 5'], f_16:['27 - INF', '17 - 55.5', '14.25 - 33.75', '11.5 - 21.5', '10.25 - 17.5', '9.75 - 15.75', '8.75 - 13.25', '8 - 11.75', '7 - 9.5', '6.5 - 8.75', '6 - 7.75',  '5.5 - 6.75', '4.5 - 5.5', '4.25 - 5'], f_8:['37 - 157', '20.5 - 35.5', '16.5 - 25.25', '13 - 17.75', '11.5 - 15', '10.75 - 13.5', '9.5 - 11.75', '8.75 - 10.5', '7.5 - 8.75', '7 - 8', '6.25 - 7.25',  '5.75 - 6.25', '4.75 - 5.25', '4.25 - 4.75']},
    {id:'28', name:'Apo-Symmar 120mm f/5.6', base:['FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13', 'FE40 + B13'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['35', '35', '35', '35', '35', '35', '35', '35', 'none', 'none', 'none', 'none', 'none', 'none'], subj_dist:['INF', 75, 55, 35, 25, 22, 18, 15, 12, 11, 10, 9, 8, 7], f_22:['46.5 - INF', '28.75 - INF', '25.25 - INF',  '20 - 137.75', '16.25 - 53.25', '15 - 41.25', '13 - 29', '11.5 - 22', '9.5 - 16', '9 - 14.25', '8.25 - 12.5', '7.5 - 11' , '7 - 9.5', '6.25 - 8.25'], f_16:['65.5 - INF', '35 - INF', '30 - 328', '23 - 74', '18.25 - 40', '16.5 - 32.75', '14.25 - 24.5', '12.25 - 19.25', '10.25 - 14.5', '9.5 - 13', '8.75 - 11.75',  '8 - 10.5', '7.25 - 9', '6.5 - 7.75'], f_8:['131.5 - INF', '48 - 174', '38.75 - 94.25', '27.75 - 47.5', '21 - 31', '19 - 26.25', '16 - 20.75', '13.5 - 17', '11 - 13.25', '10.25 - 12', '9.5 - 10.75',  '8.5 - 9.75', '7.5 - 8.5', '6.75 - 7.25']},
    {id:'29', name:'Wista Twin 130mm f/5.6 (BASE 43)', base:['BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43', 'BASE 43'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm', '70mm'], subj_dist:[200, 100, 75, 40, 35, 25, 20, 18, 14, 12, 11, 10, 9, 7], f_22:['43 - INF', '35.5 - INF', '31.75 - INF',  '23.25 - 146.5', '12.5 - 96', '17.25 - 45.5', '14.75 - 31.25', '13.5 - 26.5', '11.25 - 18.5', '10 - 15.25', '9.25 - 13.75', '8.5 - 12' , '7.75 - 10.75', '6.25 - 8'], f_16:['55.75 - INF', '43.5 - INF', '38 - 2372', '26.5 - 82.25', '24.25 - 63.5', '19 - 36.75', '16 - 26.75', '14.75 - 23.25', '12 - 17', '10.5 - 14', '9.75 - 12.75',  '9 - 11.5', '8 - 10', '6.5 - 7.75'], f_8:['87 - INF', '60.75 - 283', '50.5 - 145.5', '31.75 - 53.75', '28.5 - 45', '21.5 - 29.75', '17.75 - 23', '16.25 - 20.25', '13 - 15.5', '11.25 - 13', '10.25 - 11.75',  '9.5 - 10.75', '8.5 - 9.5', '6.75 - 7.25']},
    {id:'30', name:'Wista Twin 130mm f/5.6 (FE40 + B8)', base:['FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8', 'FE40 + B8'], spacer:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], bolts:['30', '30', '30/35W', '30/35W', '30/35W', '30/35W', '30/35W', '35W', '35W', '35W', '35W', '35W', '35W', '35W'], subj_dist:[7.5, 7, 6.5, 6.25, 6, 5.5, 5.5, 5, 5, 4.6, 4.5, 4.5, 4.25,4], f_22:['6.75 - 8.5', '6.25 - 8', '5.75 - 7.25',  '5.75 - 7', '5.5 - 6.75', '5 - 6', '5 - 6', '4.5 - 5.5', '4.5 - 5.5', '4.25 - 5', '4.25 - 4.75', '4.25 - 4.75' , '4 - 4.5', '3.75 - 4.25'], f_16:['6.75 - 8.25', '6.5 - 7.75', '6 - 7', '5.75 - 6.75', '5.5 - 6.5', '5.25 - 6', '5.25 - 6', '4.75 - 5.25', '4.75 - 5.25', '4.25 - 4.75', '4.25 - 4.75',  '4.25 - 4.75', '4 - 4.5', '3.75 - 4.25'], f_8:['7.25 - 8', '6.75 - 7.25', '6.25 - 6.75', '6 - 6.5', '5.75 - 6.25', '5.25 - 5.75', '5.25 - 5.75', '4.75 - 5.25', '4.75 - 5.25', '4.5 - 4.75', '4.4 - 4.6',  '4.4 - 4.6', '4.15 - 4.35', '3.9 - 4.1']},
];

//Dictionary for selecting a lens name from drop down menu
const lensName = [
    {key:'1', value:'Apo-Digitar 35mm f/5.6 XL'},
    {key:'2', value:'SA 47mm f/5.6'},
    {key:'3', value:'SA 47mm f/5.6 XL'},
    {key:'4', value:'Bronica 50mm 2.8 MC'},
    {key:'5', value:'Grandagon 58mm f/5.6'},
    {key:'6', value:'Ilex 60mm f/16'},
    {key:'7', value:'Apo-Digitar 60mm f/4'},
    {key:'8', value:'Grandagon 65mm f/4.5'},
    {key:'9', value:'Angulon 65mm f/6.8'},
    {key:'10', value:'SA 65mm f/8'},
    {key:'11', value:'Fujinon 65mm f/8'},
    {key:'12', value:'Super Topcor 65mm f/7'},
    {key:'13', value:'Graflex Optar 65mm f/6.8'},
    {key:'14', value:'Horseman 75mm f/5.6'},
    {key:'15', value:'Grandagon 75mm f/6.8'},
    {key:'16', value:'Super Angulon 75mm f/8'},
    {key:'17', value:'Fujinon SW 75mm F/8'},
    {key:'18', value:'Heligon 80mm f/2.8'},
    {key:'19', value:'Apo-Digitar 80mm f/4'},
    {key:'20', value:'Apo-Digitar 90mm f/4.5'},
    {key:'21', value:'Angulon 90mm f/6.8'},
    {key:'22', value:'Tessar 100mm f/3.5'},
    {key:'23', value:'Nikkor-W 100mm f/5.6'},
    {key:'24', value:'Apo-Digitar 100mm f/5.6'},
    {key:'25', value:'Sironar-N 100mm f/5.6'},
    {key:'26', value:'Symmar-S 100mm f/5.6'},
    {key:'27', value:'Trioptar 103mm f/4.5'},
    {key:'28', value:'Apo-Symmar 120mm f/5.6'},
    {key:'29', value:'Wista Twin 130mm f/5.6 (BASE 43'},
    {key:'30', value:'Wista Twin 130mm f/5.6 (FE40 + B8'},
];


//Dictionary for the F-stop drop down menu
const fStops = [
    {key:'1', value:'F-22'},
    {key:'2', value:'F-16'}, 
    {key:'3', value:'F-8'},
];


// array of data based on lens selection -- used in further calculations for results
var baseArray = [];
var spacerArray = [];

// array of data based on lens selection -- only used for displaying results
var boltArray = [];
var subjDistArray = [];
var f22Array = [];
var f16Array = [];
var f8Array = [];

// array of objects used for dropdown menus -- initialize within function so length is always reset to 0
var baseOptions;
var spacerOptions;

var overallIndex = 0;

var boltResponse= "";
var subjectDistResponse="";
var f22Response="";
var f16Response="";
var f8Response="";

var minVal = 0;
var hyperfocalSpacer = "";



// DOF screen of app
const DOFScreen = ({route, navigation}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(route.params.tab);
    const handleSingleIndexSelect = (index) => {
        setSelectedIndex(index);
        setShowDOFResult(false);
        setShowHyperfocalResult(false);
      };

    const [selectedLens, setSelectedLens] = React.useState('Apo-Digitar 35mm f/5.6 XL');
    const [selectedBase, setSelectedBase] = React.useState('RS0, B6.4'); 
    const [selectedSpacer, setSelectedSpacer] = React.useState('none');
    const [selectedFStop, setSelectedFStop] = React.useState('F-22');

    // Want to include these to get rid of the option to select a base/spacer when there's only one option, but as soon as I try to use these it infinitely re - renders :/
    //const [showBase, setShowBase] = React.useState(true);
    //const [showSpacer, setShowSpacer] = React.useState(true);

    const [recalculateOptions, setRecalculateOptions] = React.useState(0);
    const [showDOFResult, setShowDOFResult] = React.useState(false);
    const [showHyperfocalResult, setShowHyperfocalResult] = React.useState(false);

    const handleSelections = (lensVal, baseVal) => {

        for(let i = 0; i < lensData.length; i++){
          if(lensData[i].name.localeCompare(lensVal) == 0){
    
            baseArray = lensData[i].base;
            spacerArray = lensData[i].spacer;
    
            boltArray = lensData[i].bolts;
            subjDistArray = lensData[i].subj_dist;
            f22Array = lensData[i].f_22;
            f16Array = lensData[i].f_16;
            f8Array = lensData[i].f_8;
    
            baseOptions = [];
            spacerOptions = [];
    
            for(let j = 0; j < baseArray.length; j++){    //using base array becuase it's the one I made first, but all of the arrays should be the same length so the choice is arbitrary
    
              //next key for base key/value object pairs for drop down menu
              let baseKey = baseOptions.length + 1;
              baseKey = baseKey.toString();
    
              //next key for spacer key/value object pairs for drop down menus 
              let spacerKey = spacerOptions.length + 1;
              spacerKey = spacerKey.toString();
    
              let validBaseVal = true;
              let validSpacerVal = true;
    
              //look through current menu of base options, if the current value from baseArray is already included, set valid to false so it isn't included twice
              for (let k = 0; k < baseOptions.length; k++){
                if(baseOptions[k].value == baseArray[j]){
                  validBaseVal = false;
                  break;
                }
              }
    
              //if the index currently being evaluated doesn't match the selected base, set valid to false so the only spacers included belong to the currently selected base
              if(baseArray[j].localeCompare(baseVal) != 0){
                validSpacerVal = false;
              }
    
              //add base at this index from master data to base options
              if(validBaseVal){
                baseOptions.push({key: baseKey, value: baseArray[j]});
              }
    
              //add spacer at this index to spacer options
              if(validSpacerVal){
                spacerOptions.push({key: spacerKey, value: spacerArray[j]});
              }
    
            }
    
          }
        }

    }    
    
      const calculateDOF = () =>{

        setShowDOFResult(true);
        setShowHyperfocalResult(false);
        setRecalculateOptions(recalculateOptions + 1);


        let spacerVal = selectedSpacer;
        let baseVal = selectedBase;
        
        //have to find which index from master data has been selected to know which results to display

        //if spacer is 'none'
        if(spacerVal.localeCompare('none') != 0){
          for(let i = 0; i < spacerOptions.length; i++){
            if(spacerOptions[i].value.localeCompare(spacerVal) == 0){
              overallIndex = i;
              break;
            }
          }
        }
        else {
          for(let i = 0; i < baseOptions.length; i++){
            if(baseOptions[i].value.localeCompare(baseVal) == 0){
              overallIndex = i;
              break;
            }
          }
        }
        
        boltResponse = boltArray[overallIndex];
        subjectDistResponse = subjDistArray[overallIndex];
        f22Response = f22Array[overallIndex];
        f16Response = f16Array[overallIndex];
        f8Response = f8Array[overallIndex];
    
      }
    
    
      const calculateHyperfocal = () =>{

        setShowDOFResult(false);
        setShowHyperfocalResult(true);
        setRecalculateOptions(recalculateOptions + 1);
    
        let lensVal = selectedLens;
        let fStopVal = selectedFStop;
        let fStopArray = [];
        let spacerArray = [];
        //let baseArray = [];
    
        for(let i = 0; i < lensData.length; i++){
          if(lensData[i].name.localeCompare(lensVal) == 0){
    
            spacerArray = lensData[i].spacer;
            base = lensData[i].base;
    
            if(fStopVal.localeCompare('F-22')){
              fStopArray = lensData[i].f_22;
            }
            else if(fStopVal.localeCompare('F-16')){
              fStopArray = lensData[i].f_16; 
            }
            else {
              fStopArray = lensData[i].f_8;
            }
          }
        }
    
        let currMinVal = 100000;
        hyperfocalSpacer = '';
    
        for(let i = 0; i < fStopArray.length; i++){
          if(fStopArray[i].includes('INF')){
            //console.log(fStopArray[i]);
    
            let focalRangeArray = fStopArray[i].split(' - ');
            let focalMin = parseFloat(focalRangeArray[0]);
            //console.log(minVal);
    
            if(focalMin < currMinVal){
              //console.log(focalMin + ' ' + minVal);
              currMinVal = focalMin;
              minVal = fStopArray[i];
              hyperfocalSpacer = spacerArray[i];
            }
          }
        }
    
      }
    
      
      return(
        <SafeAreaView style={dofStyle.container}>
          <ScrollView>
            {/*page title*/}
            {selectedIndex == 0 &&(<Text style={dofStyle.textTitle} accessible={true} accessibilityLabel="Depth of field calculator" accessibilityRole="text">DOF Calculator</Text>)}
            {selectedIndex == 1 &&(<Text style={dofStyle.textTitle} accessible={true} accessibilityLabel="Hyperfocal calculator" accessibilityRole="text">Hyperfocal Calculator</Text>)}
      
            {/*Tabs for selecting what fields will be shown based on what the desired calculation is*/}
            <SegmentedControlTab
              values={['Depth of Field', 'Hyperfocal']}
              selectedIndex={selectedIndex}
              onTabPress={handleSingleIndexSelect}
              tabsContainerStyle={{
                margin: 10,
                width: 300,
                height: 40,
                alignSelf: 'center',
              }}
              tabStyle={{
                backgroundColor: 'gray',
                borderColor: 'black',
              }}
              tabTextStyle={{
                color: 'white'
              }}
              activeTabStyle={{
                backgroundColor: 'white',
                borderColor: 'white'
              
              }}
              activeTabTextStyle={{
                color: 'black'
              }}
              accessible={true}
              accessibilityLabels={['depth of field', 'hyperfocal']}
            />
      
      {/*Dropdown menu for selecting which lens is being used*/}
            <Text style={dofStyle.text} accessible={true} accessibilityLabel="Select lens" accessibilityRole="text">Select lens:</Text>
            <SelectList 
              setSelected={(val) => setSelectedLens(val)}
              data= {lensName}
              save="value"
              onSelect={handleSelections(selectedLens, selectedBase)}
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              accessible={true}
              accessibilityHint="A searchable drop down menu to select a lens option"
            />
      
      {/*Dropdown menu for selecting which base is being used*/}
            {selectedIndex==0 && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Select base" accessibilityRole="text">Select base:</Text>)}
            {selectedIndex==0 && (<SelectList 
              setSelected={(val) => setSelectedBase(val)}
              data= {baseOptions}
              save="value"
              onSelect={handleSelections(selectedLens, selectedBase)}
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              accessible={true}
              accessibilityHint="A searchable drop down menu to select a base option"
            />)}
      
        {/*Dropdown menu for selecting which spacer is being used*/}
            {selectedIndex==0 && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Select focal spacer" accessibilityRole="text">Select focal spacer:</Text>)}
            {selectedIndex==0 && (<SelectList
              setSelected={(val) => setSelectedSpacer(val)}
              data= {spacerOptions}
              save="value"
              onSelect={handleSelections(selectedLens, selectedBase)}
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              accessible={true}
              accessibilityHint="A searchable drop down menu to select a focal spacer option"
            />)}
      
        {/*Dropdown menu for selesting f-stop for hyperfocus*/}
            {selectedIndex==1 && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Select f-stop" accessibilityRole="text">Select f-stop:</Text>)}
            {selectedIndex==1 && (<SelectList
              setSelected={(val) => setSelectedFStop(val)}
              data={fStops}
              save="value"
              onSelect={handleSelections(selectedLens, selectedBase)}
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              accessible={true}
              accessibilityHint="A searchable drop down menu to select an F-stop option"
            />)}
      
      
            {selectedIndex==0 && (<View style={dofStyle.button} accessible={true} accessibilityLabel="Calculate depth of field" accessibilityHint="Press to show the results of the DOF calculation, will not switch to a different screen" accessibilityRole="button">
              {selectedIndex==0 && (<Button 
                title= "Calculate DOF"
                //onPress={() => navigation.push("DOFScreen", {lensName: selectedLens, baseName: selectedBase, spacerName: selectedSpacer})}
                onPress={() => calculateDOF()}
                color="#000000"
              />)}
            </View>)}
      
            {selectedIndex==1 && (<View style={dofStyle.button} accessible={true} accessibilityLabel="Calculate hyperfocal" accessibilityHint="Press to show the results of the hyperfocal calculation, will not switch to a different screen" accessibilityRole="button">
              {selectedIndex==1 && (<Button 
                title= "Calculate Hyperfocal"
                //onPress={() => navigation.push("DOFScreen", {lensName: selectedLens, baseName: selectedBase, spacerName: selectedSpacer})}
                onPress={() => calculateHyperfocal()}
                color="#000000"
              />)}
            </View>)}
      
            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text} accessible={true} accesibilityLabel="Bolt result" accessibiltyRole="text">Bolts:  {boltResponse}</Text>)}
            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Focal distance result" accessibilityRole="text">Focal Distance:  {subjectDistResponse} ft</Text>)}

            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text}>-------------------------------------</Text>)}

            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="F-22 depth of field result" accessibilityRole="text">F-22 DOF:  {f22Response} ft</Text>)}
            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="F-16 depth of field result" accessibilityRole="text">F-16 DOF:  {f16Response} ft</Text>)}
            {selectedIndex==0 && showDOFResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="F-8 depth of field result" accessibilityRole="text">F-8 DOF:  {f8Response} ft</Text>)}
      
            {selectedIndex==1 && showHyperfocalResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Hyperfocal distance result" accessibilityRole="text">Hyperfocal Distance:  {minVal} ft</Text>)}
            {selectedIndex==1 && showHyperfocalResult && (<Text style={dofStyle.text} accessible={true} accessibilityLabel="Spacer result" accessibilityRole="text">Spacer:  {hyperfocalSpacer}</Text>)}

          </ScrollView>
        </SafeAreaView>
      )
    

}


//Style sheet for the depth of field calculator page
const dofStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'tops',
    },
    textTitle: {
        color: 'white',
        margin: 5,
        fontSize: 40,
        textAlign: 'center',
      },
    text: {
      color: 'white',
      margin: 8,
      marginTop: 13,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
    }
  });

export default DOFScreen;