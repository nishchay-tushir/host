import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Select from 'react-select';
import axios from 'axios';

// import V from '../../Assets/V.png';
import vitesco from '../../Assets/vitesco.png';

const Dashboard4 = () => {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
      const Token = localStorage.getItem('token');
      if (!Token) {
          enqueueSnackbar('Login to Navigate!', { variant: 'error' });
          navigate('/');
      }
  }, [enqueueSnackbar, navigate]);
    
    
    const DailyOptions = useMemo(() => [
      { value: 'HT & LT Panel - 1 - 22KV Out VCB HT Panel (RMU)', label: 'HT & LT Panel - 1 - 22KV Out VCB HT Panel (RMU)', path: '/ht_lt_panel_1_d' },
      { value: 'HT & LT Panel - 2 - 22KV Incomer VCB HT Panel (EB)', label: 'HT & LT Panel - 2 - 22KV Incomer VCB HT Panel (EB)', path: '/ht_lt_panel_2_d' },
      { value: 'HT & LT Panel - 3 - 22KV Outgoing VCB HT Panel (EB)', label: 'HT & LT Panel - 3 - 22KV Outgoing VCB HT Panel (EB)', path: '/ht_lt_panel_3_d' },
      { value: 'HT & LT Panel - 4 - 22KV Outgoing VCB HT Panel (EB)', label: 'HT & LT Panel - 4 - 22KV Outgoing VCB HT Panel (EB)', path: '/ht_lt_panel_4_d' },
      { value: 'HT & LT Panel - 5 - 22KV Incomer Indoor VCB HT Panel', label: 'HT & LT Panel - 5 - 22KV Incomer Indoor VCB HT Panel', path: '/ht_lt_panel_5_d' },
      { value: 'HT & LT Panel - 6 - 22KV Incomer Indoor VCB HT Panel', label: 'HT & LT Panel - 6 - 22KV Incomer Indoor VCB HT Panel', path: '/ht_lt_panel_6_d' },
      { value: 'HT & LT Panel - 7 - 22KV Outgoing Indoor VCB HT Panel', label: 'HT & LT Panel - 7 - 22KV Outgoing Indoor VCB HT Panel', path: '/ht_lt_panel_7_d' },
      { value: 'HT & LT Panel - 8 - 22KV Outgoing Indoor VCB HT Panel', label: 'HT & LT Panel - 8 - 22KV Outgoing Indoor VCB HT Panel', path: '/ht_lt_panel_8_d' },
      { value: 'HT & LT Panel - 9 - 22KV Outgoing Indoor VCB HT Panel', label: 'HT & LT Panel - 9 - 22KV Outgoing Indoor VCB HT Panel', path: '/ht_lt_panel_9_d' },
      
      { value: 'Transformer - 1 - 2500KVA Transformer Sr. No. 49730/1', label: 'Transformer - 1 - 2500KVA Transformer Sr. No. 49730/1', path: '/transformer_1_d' },
      { value: 'Transformer - 2 - 2500KVA Transformer Sr. No. 49730/2', label: 'Transformer - 2 - 2500KVA Transformer Sr. No. 49730/2', path: '/transformer_2_d' },
      { value: 'Transformer - 3 - 2500KVA Transformer Sr. No. 49505/3', label: 'Transformer - 3 - 2500KVA Transformer Sr. No. 49505/3', path: '/transformer_3_d' },
      { value: 'Transformer - 4 - 2500KVA Transformer Sr. No. 49505/2', label: 'Transformer - 4 - 2500KVA Transformer Sr. No. 49505/2', path: '/transformer_4_d' },
      { value: 'Transformer - 5 - Transformer 1 LT Panel-1- Panel room', label: 'Transformer - 5 - Transformer 1 LT Panel-1- Panel room', path: '/transformer_5_d' },
      { value: 'Transformer - 6 - Transformer 2 LT Panel-2- Panel room', label: 'Transformer - 6 - Transformer 2 LT Panel-2- Panel room', path: '/transformer_6_d' },
      { value: 'Transformer - 7 - Transformer 3 LT Panel-3- Panel room', label: 'Transformer - 7 - Transformer 3 LT Panel-3- Panel room', path: '/transformer_7_d' },
      { value: 'Transformer - 8 - Transformer 3 LT Panel-3- Panel room', label: 'Transformer - 8 - Transformer 3 LT Panel-3- Panel room', path: '/transformer_8_d' },
      
      { value: 'DG - 500 - 1 - D.G.-2 - 500 KVA ESN NO- 25309737', label: 'DG - 500 - 1 - D.G.-2 - 500 KVA ESN NO- 25309737', path: '/dg_500_1_d' },
      { value: 'DG - 500 - 2 - D.G.-2 Synchoronising Panel', label: 'DG - 500 - 2 - D.G.-2 Synchoronising Panel', path: '/dg_500_2_d' },
      { value: 'DG - 500 - 3 - D.G.-5- 500 KVA ESN NO- 25334984', label: 'DG - 500 - 3 - D.G.-5- 500 KVA ESN NO- 25334984', path: '/dg_500_3_d' },
      { value: 'DG - 1010 - 1 - D.G.-1- 1010 KVA ESN NO.- 25451153', label: 'DG - 1010 - 1 - D.G.-1- 1010 KVA ESN NO.- 25451153', path: '/dg_1010_1_d' },
      { value: 'DG - 1010 - 2 - D.G.-1 Synchoronising Panel', label: 'DG - 1010 - 2 - D.G.-1 Synchoronising Panel', path: '/dg_1010_2_d' },
      { value: 'DG - 1010 - 3 - D.G.-3- 1010 KVA ESN NO.- 25431786', label: 'DG - 1010 - 3 - D.G.-3- 1010 KVA ESN NO.- 25431786', path: '/dg_1010_3_d' },
      { value: 'DG - 1010 - 4 - D.G.-4- 1010 KVA ESN NO.- 25366157', label: 'DG - 1010 - 4 - D.G.-4- 1010 KVA ESN NO.- 25366157', path: '/dg_1010_4_d' },
      
      { value: 'VCB - 1 - Vaccume circuit breaker- HT Yard-Incomer-1', label: 'VCB - 1 - Vaccume circuit breaker- HT Yard-Incomer-1', path: '/vcb_1_d' },
      { value: 'VCB - 2 - Vaccume circuit breaker- HT Yard-Outgoing-1', label: 'VCB - 2 - Vaccume circuit breaker- HT Yard-Outgoing-1', path: '/vcb_2_d' },
      { value: 'VCB - 3 - Vaccume circuit breaker- HT Yard-Outgoing-2', label: 'VCB - 3 - Vaccume circuit breaker- HT Yard-Outgoing-2', path: '/vcb_3_d' },
      { value: 'VCB - 4 - Vaccume circuit breaker-RMU- Incomer-1', label: 'VCB - 4 - Vaccume circuit breaker-RMU- Incomer-1', path: '/vcb_4_d' },
      { value: 'VCB - 5 - Vaccume circuit breaker-RMU- Incomer-1', label: 'VCB - 5 - Vaccume circuit breaker-RMU- Incomer-1', path: '/vcb_5_d' },
      { value: 'VCB - 6 - Vaccume circuit breaker-RMU-Ourgoing-1', label: 'VCB - 6 - Vaccume circuit breaker-RMU-Ourgoing-1', path: '/vcb_6_d' },
      { value: 'VCB - 7 - Vaccume circuit breaker-RMU-Ourgoing-2', label: 'VCB - 7 - Vaccume circuit breaker-RMU-Ourgoing-2', path: '/vcb_7_d' },
      { value: 'VCB - 8 - Vaccume circuit breaker-RMU-Ourgoing-3', label: 'VCB - 8 - Vaccume circuit breaker-RMU-Ourgoing-3', path: '/vcb_8_d' },
      { value: 'VCB - 9 - Vaccume circuit breaker-RMU-Ourgoing-4', label: 'VCB - 9 - Vaccume circuit breaker-RMU-Ourgoing-4', path: '/vcb_9_d' },
      { value: 'VCB - 10 - Vaccume circuit breaker-RMU-Ourgoing-5', label: 'VCB - 10 - Vaccume circuit breaker-RMU-Ourgoing-5', path: '/vcb_10_d' },
      
      { value: 'Fire Hydrant System', label: 'Fire Hydrant System', path: '/fire_hydrant_system_1_d' },
      { value: 'Softener Unit', label: 'Softener Unit', path: '/softener_unit_1_d' },
      { value: 'STP (Sewage Treatment Plant)', label: 'STP (Sewage Treatment Plant)', path: '/stp_1_d' },
      
      { value: 'Air Compressor-1 (1653CFM/S ZR 275) ', label: 'Air Compressor-1 (1653CFM/S ZR 275) ', path: '/air_compressor_1_d' },
      { value: 'Air Compressor-2 (920 CF/ZR 160 VSD)', label: 'Air Compressor-2 (920 CF/ZR 160 VSD)', path: '/air_compressor_2_d' },
      
      { value: 'Air Dryer-1 ( FD1500VSD+)', label: 'Air Dryer-1 ( FD1500VSD+)', path: '/air_dryer_1_d' },
      { value: 'Air Dryer-2 ( FD1500VSD+)', label: 'Air Dryer-2 ( FD1500VSD+)', path: '/air_dryer_2_d' },
      
      { value: 'Swagon Compressor-1 (Technical PH L-1)', label: 'Swagon Compressor-1 (Technical PH L-1)', path: '/swagon_compressor_1_d' },
      { value: 'Swagon Compressor-2 (Technical PH L-1)', label: 'Swagon Compressor-2 (Technical PH L-1)', path: '/swagon_compressor_2_d' },
      { value: 'Swagon compressor-3- Admin Office', label: 'Swagon compressor-3- Admin Office', path: '/swagon_compressor_3_d' },
      { value: 'Swagon compressor-4- Admin office', label: 'Swagon compressor-4- Admin office', path: '/swagon_compressor_4_d' },
      
      { value: 'Water cooled Chiller Unit 1', label: 'Water cooled Chiller Unit 1', path: '/water_chiller_1_d' },
      { value: 'Water cooled Chiller Unit 1', label: 'Water cooled Chiller Unit 1', path: '/water_chiller_2_d' },
      
      { value: 'Air Cooled Chiller 1', label: 'Air Cooled Chiller 1', path: '/air_chiller_1_d' },
      { value: 'Air Cooled Chiller 2', label: 'Air Cooled Chiller 2', path: '/air_chiller_2_d' },

      { value: 'Cooling tower - 1', label: 'Cooling tower - 1', path: '/cooling_tower_1_d' },
      { value: 'Cooling tower - 1', label: 'Cooling tower - 2', path: '/cooling_tower_2_d' },
      
      { value: 'AHU 1 (PH L1)', label: 'AHU 1 (PH L1)', path: '/ahu_1_d' },
      { value: 'AHU 2 (PH L1)', label: 'AHU 2 (PH L1)', path: '/ahu_2_d' },
      { value: 'AHU 3 (PH L1)', label: 'AHU 3 (PH L1)', path: '/ahu_3_d' },
      { value: 'AHU 4 (PH L1)', label: 'AHU 4 (PH L1)', path: '/ahu_4_d' },
      { value: 'AHU 5 (PH L1)', label: 'AHU 5 (PH L1)', path: '/ahu_5_d' },
      { value: 'AHU 6 (PH L1)', label: 'AHU 6 (PH L1)', path: '/ahu_6_d' },
      { value: 'AHU 7 (PH L1)', label: 'AHU 7 (PH L1)', path: '/ahu_7_d' },
      { value: 'AHU 8 (PH L2)', label: 'AHU 8 (PH L2)', path: '/ahu_8_d' },
      { value: 'AHU 9 (PH L2)', label: 'AHU 9 (PH L2)', path: '/ahu_9_d' },
      { value: 'AHU 10 (PH L2)', label: 'AHU 10 (PH L2)', path: '/ahu_10_d' },
      { value: 'AHU 11 (PH L2)', label: 'AHU 11 (PH L2)', path: '/ahu_11_d' },

      { value: 'MAU 1 (PH L2)', label: 'MAU 1 (PH L2)', path: '/ahu_12_d' },
      { value: 'MAU 2 (PH L1)', label: 'MAU 2 (PH L1)', path: '/ahu_13_d' },
      { value: 'MAU 3 (PH L1)', label: 'MAU 3 (PH L1)', path: '/ahu_14_d' },

      { value: 'UPS - 1', label: 'UPS - 1', path: '/ups_1_d' },
      { value: 'UPS - 2', label: 'UPS - 2', path: '/ups_2_d' },
      { value: 'UPS - 3', label: 'UPS - 3', path: '/ups_3_d' },
      { value: 'UPS - 4', label: 'UPS - 4', path: '/ups_4_d' },
      { value: 'UPS - 5', label: 'UPS - 5', path: '/ups_5_d' },
      { value: 'UPS - 6', label: 'UPS - 6', path: '/ups_6_d' },

      { value: 'UPSDB Panel', label: 'UPSDB Panel', path: '/upsdb_panel_1_d' },
      
      { value: 'Air Reservoir Tank - 1', label: 'Air Reservoir Tank - 1', path: '/air_reservoir_tank_1_d' },
      { value: 'Air Reservoir Tank - 2', label: 'Air Reservoir Tank - 2', path: '/air_reservoir_tank_2_d' },
      
      { value: 'Nitrogen Yard', label: 'Nitrogen Yard', path: '/nitrogen_yard_1_d' },
      { value: 'ELDB Panel', label: 'ELDB Panel', path: '/eldb_panel_1_d' },
      { value: 'MLDB Panel', label: 'MLDB Panel', path: '/ldb_panel_1_d' },
      // { value: 'Option75', label: 'PDB Panel', path: '/pdb_panel_1_d' },
      // { value: 'Option77', label: 'DDC Panel', path: '/ddc_panel_1_d' },

      // { value: 'Option78', label: 'Street Lights', path: '/street_lights_1_d' },
      // { value: 'Option79', label: 'Shop Floor Lights', path: '/shop_floor_lights_1_d' },
      // { value: 'Option80', label: 'Rapid Sliding Shutter', path: '/rapid_sliding_shutter_1_d' },
      // { value: 'Option81', label: 'Rapid Rolling Shutter', path: '/rapid_rolling_shutter_1_d' },
      // { value: 'Option82', label: 'Rolling Shutter', path: '/rolling_shutter_1_d' },
      // { value: 'Option83', label: 'Motorised Sliding Gate', path: '/motorised_sliding_gate_1_d' },

      // { value: 'Option84', label: 'WRC Room AHU', path: '/wrc_room_ahu_1_d' },

      // { value: 'Option85', label: 'Swizer Lift', path: '/swizer_lift_1_d' },
      // { value: 'Option86', label: 'Cassette AC', path: '/cassette_ac_1_d' },
      // { value: 'Option87', label: 'Split AC', path: '/split_ac_1_d' },
      // { value: 'Option88', label: 'Stacker', path: '/stacker_1_d' },

      // { value: 'Option89', label: 'Fire Pump House', path: '/fire_pump_house_1_d' },
      // { value: 'Option90', label: 'Fire Extinguisher', path: '/fire_extinguisher_1_d' },

      // { value: 'Option91', label: 'BMS', path: '/bms_1_d' },

      { value: 'Panel-1 ( Water cooled chiller)', label: 'Panel-1 ( Water cooled chiller)', path: '/panel_1_d' },
      { value: 'Panel-2 (Water cooled chiller)', label: 'Panel-2 (Water cooled chiller)', path: '/panel_2_d' },
      { value: 'Panel-3 (Air cooled chiller)', label: 'Panel-3 (Air cooled chiller)', path: '/panel_3_d' },
      { value: 'Panel-4 (Water cool chiller)', label: 'Panel-4 (Water cool chiller)', path: '/panel_4_d' },
      { value: 'Panel-5 (Air compressor)', label: 'Panel-5 (Air compressor)', path: '/panel_5_d' },
      { value: 'Panel-6 (STP Plant)', label: 'Panel-6 (STP Plant)', path: '/panel_6_d' },
      { value: 'Panel-7 (Softner PHE)', label: 'Panel-7 (Softner PHE)', path: '/panel_7_d' },
      { value: 'Panel-8 (Fire Panel)', label: 'Panel-8 (Fire Panel)', path: '/panel_8_d' },
      { value: 'Panel-9 (Ware house)', label: 'Panel-9 (Ware house)', path: '/panel_9_d' },
      { value: 'Panel-10 ( Ware house FAF)', label: 'Panel-10 ( Ware house FAF)', path: '/panel_10_d' },
      { value: 'Panel-11 (L1 AHU Main panel)', label: 'Panel-11 (L1 AHU Main panel)', path: '/panel_11_d' },
      { value: 'Panel-12 (L1 AHU No. 94)', label: 'Panel-12 (L1 AHU No. 94)', path: '/panel_12_d' },
      { value: 'Panel-13 (L1 AHU No. 95)', label: 'Panel-13 (L1 AHU No. 95)', path: '/panel_13_d' },
      { value: 'Panel-14 (L1 AHU No. 96)', label: 'Panel-14 (L1 AHU No. 96)', path: '/panel_14_d' },
      { value: 'Panel-15 (L1 AHU No. 97)', label: 'Panel-15 (L1 AHU No. 97)', path: '/panel_15_d' },
      { value: 'Panel-16 (L1 AHU No. 98)', label: 'Panel-16 (L1 AHU No. 98)', path: '/panel_16_d' },
      { value: 'Panel-17 (L1 AHU No. 99)', label: 'Panel-17 (L1 AHU No. 99)', path: '/panel_17_d' },
      { value: 'Panel-18 (L1 AHU No. 100)', label: 'Panel-18 (L1 AHU No. 100)', path: '/panel_18_d' },
      { value: 'Panel-19 (L2 AHU Main panel)', label: 'Panel-19 (L2 AHU Main panel)', path: '/panel_19_d' },
      { value: 'Panel-20 (L2 AHU No. 101)', label: 'Panel-20 (L2 AHU No. 101)', path: '/panel_20_d' },
      { value: 'Panel-21 (L2 AHUNo. 102)', label: 'Panel-21 (L2 AHUNo. 102)', path: '/panel_21_d' },
      { value: 'Panel-22 (L2 AHU No. 103)', label: 'Panel-22 (L2 AHU No. 103)', path: '/panel_22_d' },
      { value: 'Panel-23 (L2 AHU No. 104)', label: 'Panel-23 (L2 AHU No. 104)', path: '/panel_23_d' },
      { value: 'Panel-24 ( BMS Main I/P Panel)', label: 'Panel-24 ( BMS Main I/P Panel)', path: '/panel_24_d' },
      { value: 'Panel-25 (UPS Input)', label: 'Panel-25 (UPS Input)', path: '/panel_25_d' },
      { value: 'Panel-26 ( UPS Outgoing)', label: 'Panel-26 ( UPS Outgoing)', path: '/panel_26_d' },
      { value: 'Panel -27 (BMS MLDB)', label: 'Panel -27 (BMS MLDB)', path: '/panel_27_d' },
      { value: 'Panel -28 (BMS Oxillary MLDB)', label: 'Panel -28 (BMS Oxillary MLDB)', path: '/panel_28_d' },
      { value: 'Panel- 29 ( BMS Oxillary EMLDB)', label: 'Panel- 29 ( BMS Oxillary EMLDB)', path: '/panel_29_d' },
      { value: 'Panel- 30 (BMS PDB)', label: 'Panel- 30 (BMS PDB)', path: '/panel_30_d' },
      { value: 'Panel- 31 (40KV UPS Panel)', label: 'Panel- 31 (40KV UPS Panel)', path: '/panel_31_d' },

      { value: 'ACB 1 (L&T) (Main incomer UPS input pannel)', label: 'ACB 1 (L&T) (Main incomer UPS input pannel)', path: '/acb_1_d' },
      { value: 'ACB 2 (L&T) (Incoming supply from main mcc panel)', label: 'ACB 2 (L&T) (Incoming supply from main mcc panel)', path: '/acb_2_d' },
      { value: 'ACB 3 (L&T) (UPS incomer panel)', label: 'ACB 3 (L&T) (UPS incomer panel)', path: '/acb_3_d' },
      { value: 'ACB 4 (L&T) (Penthouse level mcc-02)', label: 'ACB 4 (L&T) (Penthouse level mcc-02)', path: '/acb_4_d' },
      { value: 'ACB 5 (L&T) (587 KW Chiller -01)', label: 'ACB 5 (L&T) (587 KW Chiller -01)', path: '/acb_5_d' },
      { value: 'ACB 6 (L&T) (587 KW Chiller -02)', label: 'ACB 6 (L&T) (587 KW Chiller -02)', path: '/acb_6_d' },
      { value: 'ACB 7 (L&T) (MCC -CH3 Pannel)', label: 'ACB 7 (L&T) (MCC -CH3 Pannel)', path: '/acb_7_d' },
      { value: 'ACB 8 (L&T) (MCC Compressor)', label: 'ACB 8 (L&T) (MCC Compressor)', path: '/acb_8_d' },
      { value: 'ACB 9 (L&T) (Spare for solar)', label: 'ACB 9 (L&T) (Spare for solar)', path: '/acb_9_d' },
      { value: 'ACB 10 (L&T) (SUB LT- Panel)', label: 'ACB 10 (L&T) (SUB LT- Panel)', path: '/acb_10_d' },
      { value: 'ACB 11 (L&T) (DG INCOMER NO-1)', label: 'ACB 11 (L&T) (DG INCOMER NO-1)', path: '/acb_11_d' },
      { value: 'ACB 12 (L&T) (TRANSFORMER NO-10)', label: 'ACB 12 (L&T) (TRANSFORMER NO-10)', path: '/acb_12_d' },
      { value: 'ACB 13 (L&T) (Bus coupler)', label: 'ACB 13 (L&T) (Bus coupler)', path: '/acb_13_d' },
      { value: 'ACB 14 (L&T) (Spare for solar)', label: 'ACB 14 (L&T) (Spare for solar)', path: '/acb_14_d' },
      { value: 'ACB 15 (L&T) (APFCR 800 KVAR)', label: 'ACB 15 (L&T) (APFCR 800 KVAR)', path: '/acb_15_d' },
      { value: 'ACB 16 (L&T) (MCC AHU)', label: 'ACB 16 (L&T) (MCC AHU)', path: '/acb_16_d' },
      { value: 'ACB 17 (L&T) (MCC CH1)', label: 'ACB 17 (L&T) (MCC CH1)', path: '/acb_17_d' },
      { value: 'ACB 18 (L&T)(TRANSFORMER NO-11)', label: 'ACB 18 (L&T)(TRANSFORMER NO-11)', path: '/acb_18_d' },
      { value: 'ACB 19 (L&T) (I/C Supply from SYP-15)', label: 'ACB 19 (L&T) (I/C Supply from SYP-15)', path: '/acb_19_d' },
      { value: 'ACB 20 (L&T) (Bus coupler2)', label: 'ACB 20 (L&T) (Bus coupler2)', path: '/acb_20_d' },
      { value: 'ACB 21 (L&T) (Futurebrazing OVEN 6)', label: 'ACB 21 (L&T) (Futurebrazing OVEN 6)', path: '/acb_21_d' },
      { value: 'ACB 22 (L&T) (Futurebrazing OVEN 6)', label: 'ACB 22 (L&T) (Futurebrazing OVEN 6)', path: '/acb_22_d' },
      { value: 'ACB 23 (L&T) (Spare for solar)', label: 'ACB 23 (L&T) (Spare for solar)', path: '/acb_23_d' },
      { value: 'ACB 24 (L&T) (APFCR 800KVAR)', label: 'ACB 24 (L&T) (APFCR 800KVAR)', path: '/acb_24_d' },
      { value: 'ACB 25 (L&T) (ICS OF Transformer-12)', label: 'ACB 25 (L&T) (ICS OF Transformer-12)', path: '/acb_25_d' },
      { value: 'ACB 26 (L&T)(I/C Supply from SYP-16)', label: 'ACB 26 (L&T)(I/C Supply from SYP-16)', path: '/acb_26_d' },
      { value: 'ACB 27 (L&T) (Bus coupler3)', label: 'ACB 27 (L&T) (Bus coupler3)', path: '/acb_27_d' },
      { value: 'ACB 28 (L&T) (spare for solar)', label: 'ACB 28 (L&T) (spare for solar)', path: '/acb_28_d' },
      { value: 'ACB 29 (L&T) (750 KVAR APFC PANNEL)', label: 'ACB 29 (L&T) (750 KVAR APFC PANNEL)', path: '/acb_29_d' },
      { value: 'ACB 30 (L&T) (PH-L2 MCC Panel)', label: 'ACB 30 (L&T) (PH-L2 MCC Panel)', path: '/acb_30_d' },
      { value: 'ACB 31 (L&T) (MCC COMP UTILITY)', label: 'ACB 31 (L&T) (MCC COMP UTILITY)', path: '/acb_31_d' },
      { value: 'ACB 32 (L&T) (ICS of Transformer-4 )', label: 'ACB 32 (L&T) (ICS of Transformer-4 )', path: '/acb_32_d' },
      { value: 'ACB 33 (L&T) (ICS of DG Panel4)', label: 'ACB 33 (L&T) (ICS of DG Panel4)', path: '/acb_33_d' },
      { value: 'ACB 34 (L&T) (W/H MPDB)', label: 'ACB 34 (L&T) (W/H MPDB)', path: '/acb_34_d' },
      { value: 'ACB 35 (L&T) (400 KVAR Capacitor panel)', label: 'ACB 35 (L&T) (400 KVAR Capacitor panel)', path: '/acb_35_d' },
      { value: 'ACB 36 (L&T) (800KVAR APFC panel)', label: 'ACB 36 (L&T) (800KVAR APFC panel)', path: '/acb_36_d' },
      { value: 'ACB 37 (L&T) (Main MCC Pannel)', label: 'ACB 37 (L&T) (Main MCC Pannel)', path: '/acb_37_d' },
      { value: 'ACB 38 (L&T) (Main MCC Pannel)', label: 'ACB 38 (L&T) (Main MCC Pannel)', path: '/acb_38_d' },
      { value: 'ACB 39 (L&T) (ICS of 500 kva DG-4 Future)', label: 'ACB 39 (L&T) (ICS of 500 kva DG-4 Future)', path: '/acb_39_d' },
      { value: 'ACB 40 (L&T) (ICS of 500 kva DG-5 Future)', label: 'ACB 40 (L&T) (ICS of 500 kva DG-5 Future)', path: '/acb_40_d' },
      { value: 'ACB 41 (L&T) (ICS of 500 kva DG-6 Future)', label: 'ACB 41 (L&T) (ICS of 500 kva DG-6 Future)', path: '/acb_41_d' },
      { value: 'ACB 42 (L&T) (DG Syn. Panel)', label: 'ACB 42 (L&T) (DG Syn. Panel)', path: '/acb_42_d' },
      { value: 'ACB 43 (L&T) (ICS of 1010 kva DG 1)', label: 'ACB 43 (L&T) (ICS of 1010 kva DG 1)', path: '/acb_43_d' },
      { value: 'ACB 44 (L&T) (ICS of 1010 kva DG 2)', label: 'ACB 44 (L&T) (ICS of 1010 kva DG 2)', path: '/acb_44_d' },
      { value: 'ACB 45 (L&T) (ICS of 1010 kva DG 3- Future)', label: 'ACB 45 (L&T) (ICS of 1010 kva DG 3- Future)', path: '/acb_45_d' },
      { value: 'ACB 46 (L&T) (Main MCC panel)', label: 'ACB 46 (L&T) (Main MCC panel)', path: '/acb_46_d' },
      { value: 'ACB 47 (L&T) (800 FP Auto change over)', label: 'ACB 47 (L&T) (800 FP Auto change over)', path: '/acb_47_d' },
      { value: 'ACB 48 (L&T) (750 KVAR APFC panel- 4)', label: 'ACB 48 (L&T) (750 KVAR APFC panel- 4)', path: '/acb_48_d' },
      { value: 'ACB 49 (L&T) (800KVAR APFC panel -3)', label: 'ACB 49 (L&T) (800KVAR APFC panel -3)', path: '/acb_49_d' },
      { value: 'ACB 50 (L&T) (Sub Dist for MECH Bay -01)', label: 'ACB 50 (L&T) (Sub Dist for MECH Bay -01)', path: '/acb_50_d' },
      { value: 'ACB 51 (L&T) (WH MPDB)', label: 'ACB 51 (L&T) (WH MPDB)', path: '/acb_51_d' },
      { value: 'ACB 52 (L&T) (3200 amp solar i/c feeder) TPHL-I', label: 'ACB 52 (L&T) (3200 amp solar i/c feeder) TPHL-I', path: '/acb_52_d' },
      { value: 'ACB 53 (L&T) (3200 amp solar i/c feeder) TPHL-I', label: 'ACB 53 (L&T) (3200 amp solar i/c feeder) TPHL-I', path: '/acb_53_d' },
      { value: 'ACB 54 (L&T) (3200 amp solar i/c feeder) TPHL-II', label: 'ACB 54 (L&T) (3200 amp solar i/c feeder) TPHL-II', path: '/acb_54_d' },
      { value: 'ACB 55 (L&T) (3200 amp solar i/c feeder) TPHL-II', label: 'ACB 55 (L&T) (3200 amp solar i/c feeder) TPHL-II', path: '/acb_55_d' },
      { value: 'ACB 56 (L&T) (3200 amp solar i/c feeder) TPHL-II', label: 'ACB 56 (L&T) (3200 amp solar i/c feeder) TPHL-II', path: '/acb_56_d' },
      { value: 'ACB 57 (ABB) (1600 amp ) WCC-VFD1 TPHL-II', label: 'ACB 57 (ABB) (1600 amp ) WCC-VFD1 TPHL-II', path: '/acb_57_d' },
      { value: 'ACB 58 (ABB) (1600 amp ) WCC-VFD2 TPHL-II', label: 'ACB 58 (ABB) (1600 amp ) WCC-VFD2 TPHL-II', path: '/acb_58_d' },
      { value: 'ACB 59 (L&T) (Admin-Solar injection Panel)', label: 'ACB 59 (L&T) (Admin-Solar injection Panel)', path: '/acb_59_d' },
      { value: 'ACB 60 (GE) (Car parking-Solar injection Panel)', label: 'ACB 60 (GE) (Car parking-Solar injection Panel)', path: '/acb_60_d' },
    ], []);


    

    const MonthlyOptions = useMemo(() => [
      { value: 'Fire Extinguisher- Mechanical Area-1', label: 'Fire Extinguisher- Mechanical Area-1', path: '/fire_extinguisher_1_m' },
      { value: 'Fire Extinguisher- Mechanical Area-2', label: 'Fire Extinguisher- Mechanical Area-2', path: '/fire_extinguisher_2_m' },
      { value: 'Fire Extinguisher- Mechanical Area-3', label: 'Fire Extinguisher- Mechanical Area-3', path: '/fire_extinguisher_3_m' },
      { value: 'Fire Extinguisher- Mechanical Area-4', label: 'Fire Extinguisher- Mechanical Area-4', path: '/fire_extinguisher_4_m' },
      { value: 'Fire Extinguisher- Mechanical Area-5', label: 'Fire Extinguisher- Mechanical Area-5', path: '/fire_extinguisher_5_m' },
      { value: 'Fire Extinguisher- Mechanical Area-6', label: 'Fire Extinguisher- Mechanical Area-6', path: '/fire_extinguisher_6_m' },
      { value: 'Fire Extinguisher- Mechanical Area-7', label: 'Fire Extinguisher- Mechanical Area-7', path: '/fire_extinguisher_7_m' },
      { value: 'Fire Extinguisher- Mechanical Area-8', label: 'Fire Extinguisher- Mechanical Area-8', path: '/fire_extinguisher_8_m' },
      { value: 'Fire Extinguisher- Mechanical Area-9', label: 'Fire Extinguisher- Mechanical Area-9', path: '/fire_extinguisher_9_m' },
      { value: 'Fire Extinguisher- Mechanical Area-10', label: 'Fire Extinguisher- Mechanical Area-10', path: '/fire_extinguisher_10_m' },
      { value: 'Fire Extinguisher- Mechanical Area-11', label: 'Fire Extinguisher- Mechanical Area-11', path: '/fire_extinguisher_11_m' },
      { value: 'Fire Extinguisher- Mechanical Area-12', label: 'Fire Extinguisher- Mechanical Area-12', path: '/fire_extinguisher_12_m' },
      { value: 'Fire Extinguisher- Mechanical Area-13', label: 'Fire Extinguisher- Mechanical Area-13', path: '/fire_extinguisher_13_m' },
      { value: 'Fire Extinguisher- Mechanical Area-14', label: 'Fire Extinguisher- Mechanical Area-14', path: '/fire_extinguisher_14_m' },
      { value: 'Fire Extinguisher- Mechanical Area-15', label: 'Fire Extinguisher- Mechanical Area-15', path: '/fire_extinguisher_15_m' },
      { value: 'Fire Extinguisher- Mechanical Area-16', label: 'Fire Extinguisher- Mechanical Area-16', path: '/fire_extinguisher_16_m' },
      { value: 'Fire Extinguisher- Mechanical Area-17', label: 'Fire Extinguisher- Mechanical Area-17', path: '/fire_extinguisher_17_m' },
      { value: 'Fire Extinguisher- Mechanical Area-18', label: 'Fire Extinguisher- Mechanical Area-18', path: '/fire_extinguisher_18_m' },
      { value: 'Fire Extinguisher- Mechanical Area-19', label: 'Fire Extinguisher- Mechanical Area-19', path: '/fire_extinguisher_19_m' },
      { value: 'Fire Extinguisher- Electronic Area-1', label: 'Fire Extinguisher- Electronic Area-1', path: '/fire_extinguisher_20_m' },
      { value: 'Fire Extinguisher- Electronic Area-2', label: 'Fire Extinguisher- Electronic Area-2', path: '/fire_extinguisher_21_m' },
      { value: 'Fire Extinguisher- Electronic Area-3', label: 'Fire Extinguisher- Electronic Area-3', path: '/fire_extinguisher_22_m' },
      { value: 'Fire Extinguisher- Electronic Area-4', label: 'Fire Extinguisher- Electronic Area-4', path: '/fire_extinguisher_23_m' },
      { value: 'Fire Extinguisher- Electronic Area-5', label: 'Fire Extinguisher- Electronic Area-5', path: '/fire_extinguisher_24_m' },
      { value: 'Fire Extinguisher- Electronic Area-6', label: 'Fire Extinguisher- Electronic Area-6', path: '/fire_extinguisher_25_m' },
      { value: 'Fire Extinguisher- Electronic Area-7', label: 'Fire Extinguisher- Electronic Area-7', path: '/fire_extinguisher_26_m' },
      { value: 'Fire Extinguisher- Electronic Area-8', label: 'Fire Extinguisher- Electronic Area-8', path: '/fire_extinguisher_27_m' },
      { value: 'Fire Extinguisher- Electronic Area-9', label: 'Fire Extinguisher- Electronic Area-9', path: '/fire_extinguisher_28_m' },
      { value: 'Fire Extinguisher- Electronic Area-10', label: 'Fire Extinguisher- Electronic Area-10', path: '/fire_extinguisher_29_m' },
      { value: 'Fire Extinguisher- Electronic Area-11', label: 'Fire Extinguisher- Electronic Area-11', path: '/fire_extinguisher_30_m' },
      { value: 'Fire Extinguisher- Electronic Area-12', label: 'Fire Extinguisher- Electronic Area-12', path: '/fire_extinguisher_31_m' },
      { value: 'Fire Extinguisher- Electronic Area-13', label: 'Fire Extinguisher- Electronic Area-13', path: '/fire_extinguisher_32_m' },
      { value: 'Fire Extinguisher- Panel Room-1', label: 'Fire Extinguisher- Panel Room-1', path: '/fire_extinguisher_33_m' },
      { value: 'Fire Extinguisher- Panel Room-2', label: 'Fire Extinguisher- Panel Room-2', path: '/fire_extinguisher_34_m' },
      { value: 'Fire Extinguisher- Panel Room-3', label: 'Fire Extinguisher- Panel Room-3', path: '/fire_extinguisher_35_m' },
      { value: 'Fire Extinguisher- Panel Room-4', label: 'Fire Extinguisher- Panel Room-4', path: '/fire_extinguisher_36_m' },
      { value: 'Fire Extinguisher- Panel Room-5', label: 'Fire Extinguisher- Panel Room-5', path: '/fire_extinguisher_37_m' },
      { value: 'Fire Extinguisher- Panel Room-6', label: 'Fire Extinguisher- Panel Room-6', path: '/fire_extinguisher_38_m' }, 
      { value: 'Fire Extinguisher- Panel Room-7', label: 'Fire Extinguisher- Panel Room-7', path: '/fire_extinguisher_39_m' },
      { value: 'Fire Extinguisher- Panel Room-8', label: 'Fire Extinguisher- Panel Room-8', path: '/fire_extinguisher_40_m' },
      { value: 'Fire Extinguisher- Panel Room-9', label: 'Fire Extinguisher- Panel Room-9', path: '/fire_extinguisher_41_m' },
      { value: 'Fire Extinguisher- Panel Room-10', label: 'Fire Extinguisher- Panel Room-10', path: '/fire_extinguisher_42_m' },
      { value: 'Fire Extinguisher- Panel Room-11', label: 'Fire Extinguisher- Panel Room-11', path: '/fire_extinguisher_43_m' },
      { value: 'Fire Extinguisher- Panel Room-12', label: 'Fire Extinguisher- Panel Room-12', path: '/fire_extinguisher_44_m' },
      { value: 'Fire Extinguisher- Panel Room-13', label: 'Fire Extinguisher- Panel Room-13', path: '/fire_extinguisher_45_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_46_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_47_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_48_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_49_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_50_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_51_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_52_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_53_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_54_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_55_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_56_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_57_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_58_m' },
      { value: 'Fire Extinguisher-Technical PH', label: 'Fire Extinguisher-Technical PH', path: '/fire_extinguisher_59_m' },
      { value: 'Fire Extinguisher-Ware house area -1', label: 'Fire Extinguisher-Ware house area -1', path: '/fire_extinguisher_60_m' },
      { value: 'Fire Extinguisher-Ware house area -2', label: 'Fire Extinguisher-Ware house area -2', path: '/fire_extinguisher_61_m' },
      { value: 'Fire Extinguisher-Ware house area -3', label: 'Fire Extinguisher-Ware house area -3', path: '/fire_extinguisher_62_m' },
      { value: 'Fire Extinguisher-Ware house area -4', label: 'Fire Extinguisher-Ware house area -4', path: '/fire_extinguisher_63_m' },
      { value: 'Fire Extinguisher-Ware house area -5', label: 'Fire Extinguisher-Ware house area -5', path: '/fire_extinguisher_64_m' },
      { value: 'Fire Extinguisher-Ware house area -6', label: 'Fire Extinguisher-Ware house area -6', path: '/fire_extinguisher_65_m' },
      { value: 'Fire Extinguisher-Ware house area -7', label: 'Fire Extinguisher-Ware house area -7', path: '/fire_extinguisher_66_m' },
      { value: 'Fire Extinguisher-Ware house area -8', label: 'Fire Extinguisher-Ware house area -8', path: '/fire_extinguisher_67_m' },
      { value: 'Fire Extinguisher-Ware house area -9', label: 'Fire Extinguisher-Ware house area -9', path: '/fire_extinguisher_68_m' },
      { value: 'Fire Extinguisher-Ware house area -10', label: 'Fire Extinguisher-Ware house area -10', path: '/fire_extinguisher_69_m' },
      { value: 'Fire Extinguisher-Ware house area -11', label: 'Fire Extinguisher-Ware house area -11', path: '/fire_extinguisher_70_m' },
      { value: 'Fire Extinguisher-Ware house area -12', label: 'Fire Extinguisher-Ware house area -12', path: '/fire_extinguisher_71_m' },
      { value: 'Fire Extinguisher-Ware house area -13', label: 'Fire Extinguisher-Ware house area -13', path: '/fire_extinguisher_72_m' },
      { value: 'Fire Extinguisher-Ware house area -14', label: 'Fire Extinguisher-Ware house area -14', path: '/fire_extinguisher_73_m' },
      { value: 'Fire Extinguisher-Ware house area -15', label: 'Fire Extinguisher-Ware house area -15', path: '/fire_extinguisher_74_m' },
      { value: 'Fire Extinguisher-Ware house area -16', label: 'Fire Extinguisher-Ware house area -16', path: '/fire_extinguisher_75_m' },
      { value: 'Fire Extinguisher-Ware house area -17', label: 'Fire Extinguisher-Ware house area -17', path: '/fire_extinguisher_76_m' },
      { value: 'Fire Extinguisher-Ware house area -18', label: 'Fire Extinguisher-Ware house area -18', path: '/fire_extinguisher_77_m' },
      { value: 'Fire Extinguisher-Ware house area -19', label: 'Fire Extinguisher-Ware house area -19', path: '/fire_extinguisher_78_m' },
      { value: 'Fire Extinguisher-Ware house area -20', label: 'Fire Extinguisher-Ware house area -20', path: '/fire_extinguisher_79_m' },
      { value: 'Fire Extinguisher-Ware house area -21', label: 'Fire Extinguisher-Ware house area -21', path: '/fire_extinguisher_80_m' },
      { value: 'Fire Extinguisher-Ware house area -22', label: 'Fire Extinguisher-Ware house area -22', path: '/fire_extinguisher_81_m' },
      { value: 'Fire Extinguisher-Ware house area -23', label: 'Fire Extinguisher-Ware house area -23', path: '/fire_extinguisher_82_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen', label: 'Fire extinguisher-Admin building-Ground floor-canteen', path: '/fire_extinguisher_83_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen pantry area', label: 'Fire extinguisher-Admin building-Ground floor-canteen pantry area', path: '/fire_extinguisher_84_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen kitchan store', label: 'Fire extinguisher-Admin building-Ground floor-canteen kitchan store', path: '/fire_extinguisher_85_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen kitchan store', label: 'Fire extinguisher-Admin building-Ground floor-canteen kitchan store', path: '/fire_extinguisher_86_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen-near wash basin', label: 'Fire extinguisher-Admin building-Ground floor-canteen-near wash basin', path: '/fire_extinguisher_87_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen area', label: 'Fire extinguisher-Admin building-Ground floor-canteen area', path: '/fire_extinguisher_88_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen area', label: 'Fire extinguisher-Admin building-Ground floor-canteen area', path: '/fire_extinguisher_89_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen area', label: 'Fire extinguisher-Admin building-Ground floor-canteen area', path: '/fire_extinguisher_90_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-canteen area', label: 'Fire extinguisher-Admin building-Ground floor-canteen area', path: '/fire_extinguisher_91_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Nr chaning room', label: 'Fire extinguisher-Admin building-Ground floor-Nr chaning room', path: '/fire_extinguisher_92_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', label: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', path: '/fire_extinguisher_93_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', label: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', path: '/fire_extinguisher_94_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', label: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', path: '/fire_extinguisher_95_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', label: 'Fire extinguisher-Admin building-Ground floor-chaning room-M', path: '/fire_extinguisher_96_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Nr steir area-towards 1st fr', label: 'Fire extinguisher-Admin building-Ground floor-Nr steir area-towards 1st fr', path: '/fire_extinguisher_97_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_98_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_99_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_100_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_101_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_102_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_103_m' },
      { value: 'Fire extinguisher-Admin building-Ground floor-Reception area', label: 'Fire extinguisher-Admin building-Ground floor-Reception area', path: '/fire_extinguisher_104_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-steir case', label: 'Fire extinguisher-Admin building-1st floor-steir case', path: '/fire_extinguisher_105_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-Change room-L', label: 'Fire extinguisher-Admin building-1st floor-Change room-L', path: '/fire_extinguisher_106_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-UTM office', label: 'Fire extinguisher-Admin building-1st floor-UTM office', path: '/fire_extinguisher_107_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-DOJO room', label: 'Fire extinguisher-Admin building-1st floor-DOJO room', path: '/fire_extinguisher_108_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-UTM office gang way', label: 'Fire extinguisher-Admin building-1st floor-UTM office gang way', path: '/fire_extinguisher_109_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-change room-M', label: 'Fire extinguisher-Admin building-1st floor-change room-M', path: '/fire_extinguisher_110_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-change room-M-steir case', label: 'Fire extinguisher-Admin building-1st floor-change room-M-steir case', path: '/fire_extinguisher_111_m' },
      { value: 'Fire extinguisher-Admin building-1st floor- near change room-L', label: 'Fire extinguisher-Admin building-1st floor- near change room-L', path: '/fire_extinguisher_112_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-Electronc area entry', label: 'Fire extinguisher-Admin building-1st floor-Electronc area entry', path: '/fire_extinguisher_113_m' },
      { value: 'Fire extinguisher-Admin building-1st floor-change room-L', label: 'Fire extinguisher-Admin building-1st floor-change room-L', path: '/fire_extinguisher_114_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor-steir case', label: 'Fire extinguisher-Admin building-2nd floor-steir case', path: '/fire_extinguisher_115_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_116_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_117_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_118_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_119_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_120_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_121_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_122_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_123_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_124_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_125_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_126_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_127_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_128_m' },
      { value: 'Fire extinguisher-Admin building-2nd floor', label: 'Fire extinguisher-Admin building-2nd floor', path: '/fire_extinguisher_129_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 48', label: 'Fire extinguisher-Admin building-Sr. No. 48', path: '/fire_extinguisher_130_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 49', label: 'Fire extinguisher-Admin building-Sr. No. 49', path: '/fire_extinguisher_131_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 50', label: 'Fire extinguisher-Admin building-Sr. No. 50', path: '/fire_extinguisher_132_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 51', label: 'Fire extinguisher-Admin building-Sr. No. 51', path: '/fire_extinguisher_133_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 52', label: 'Fire extinguisher-Admin building-Sr. No. 52', path: '/fire_extinguisher_134_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 53', label: 'Fire extinguisher-Admin building-Sr. No. 53', path: '/fire_extinguisher_135_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 54', label: 'Fire extinguisher-Admin building-Sr. No. 54', path: '/fire_extinguisher_136_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 55', label: 'Fire extinguisher-Admin building-Sr. No. 55', path: '/fire_extinguisher_137_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 56', label: 'Fire extinguisher-Admin building-Sr. No. 56', path: '/fire_extinguisher_138_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 57', label: 'Fire extinguisher-Admin building-Sr. No. 57', path: '/fire_extinguisher_139_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 58', label: 'Fire extinguisher-Admin building-Sr. No. 58', path: '/fire_extinguisher_140_m' },
      { value: 'Fire extinguisher-Admin building-Sr. No. 59', label: 'Fire extinguisher-Admin building-Sr. No. 59', path: '/fire_extinguisher_141_m' },
      { value: 'Fire extinguisher-Warehouse-Sr. No. 83', label: 'Fire extinguisher-Warehouse-Sr. No. 83', path: '/fire_extinguisher_142_m' },
      { value: 'Fire extinguisher-Warehouse-Sr. No. 84', label: 'Fire extinguisher-Warehouse-Sr. No. 84', path: '/fire_extinguisher_143_m' },
      { value: 'Fire extinguisher-Warehouse-Sr. No. 85', label: 'Fire extinguisher-Warehouse-Sr. No. 85', path: '/fire_extinguisher_144_m' },
      { value: 'Fire extinguisher-Warehouse-Sr. No. 86', label: 'Fire extinguisher-Warehouse-Sr. No. 86', path: '/fire_extinguisher_145_m' },
      { value: 'Fire extinguisher-Warehouse-Sr. No. 87', label: 'Fire extinguisher-Warehouse-Sr. No. 87', path: '/fire_extinguisher_146_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 134', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 134', path: '/fire_extinguisher_147_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 135', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 135', path: '/fire_extinguisher_148_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 136', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 136', path: '/fire_extinguisher_149_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 137', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 137', path: '/fire_extinguisher_150_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 138', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 138', path: '/fire_extinguisher_151_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 139', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 139', path: '/fire_extinguisher_152_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 140', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 140', path: '/fire_extinguisher_153_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 141', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 141', path: '/fire_extinguisher_154_m' },
      { value: 'Fire Extinguisher-Technical PHL-I Sr. No. 142', label: 'Fire Extinguisher-Technical PHL-I Sr. No. 142', path: '/fire_extinguisher_155_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 143', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 143', path: '/fire_extinguisher_156_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 144', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 144', path: '/fire_extinguisher_157_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 145', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 145', path: '/fire_extinguisher_158_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 146', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 146', path: '/fire_extinguisher_159_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 147', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 147', path: '/fire_extinguisher_160_m' },
      { value: 'Fire Extinguisher-Outerperipheri- Sr. No. 148', label: 'Fire Extinguisher-Outerperipheri- Sr. No. 148', path: '/fire_extinguisher_161_m' },
      { value: 'Fire Extinguisher-Near ACC- Sr. No. 149', label: 'Fire Extinguisher-Near ACC- Sr. No. 149', path: '/fire_extinguisher_162_m' },
      { value: 'Fire Extinguisher-Air compressor room- Sr. No. 150', label: 'Fire Extinguisher-Air compressor room- Sr. No. 150', path: '/fire_extinguisher_163_m' },
      { value: 'Fire Extinguisher-LT room- Sr. No. 151', label: 'Fire Extinguisher-LT room- Sr. No. 151', path: '/fire_extinguisher_164_m' },
      { value: 'Fire Extinguisher-LT room- Sr. No. 153', label: 'Fire Extinguisher-LT room- Sr. No. 153', path: '/fire_extinguisher_165_m' },
      { value: 'Fire Extinguisher-DG area- Sr. No. 154', label: 'Fire Extinguisher-DG area- Sr. No. 154', path: '/fire_extinguisher_166_m' },
      { value: 'Fire Extinguisher-HT area- Sr. No. 155', label: 'Fire Extinguisher-HT area- Sr. No. 155', path: '/fire_extinguisher_167_m' },
      { value: 'Fire Extinguisher-HT area- Sr. No. 156', label: 'Fire Extinguisher-HT area- Sr. No. 156', path: '/fire_extinguisher_168_m' },
      { value: 'Fire Extinguisher-Fire pump room- Sr. No. 157', label: 'Fire Extinguisher-Fire pump room- Sr. No. 157', path: '/fire_extinguisher_169_m' },
      { value: 'Fire Extinguisher-Nr packing material- Sr. No. 158', label: 'Fire Extinguisher-Nr packing material- Sr. No. 158', path: '/fire_extinguisher_170_m' },
      { value: 'Fire Extinguisher-Utility area-safety container- Sr. No. 159', label: 'Fire Extinguisher-Utility area-safety container- Sr. No. 159', path: '/fire_extinguisher_171_m' },
      { value: 'Fire Extinguisher-Utility area-safety store- Sr. No. 160', label: 'Fire Extinguisher-Utility area-safety store- Sr. No. 160', path: '/fire_extinguisher_172_m' },
      { value: 'Fire Extinguisher-Utility area-safety store- Sr. No. 161', label: 'Fire Extinguisher-Utility area-safety store- Sr. No. 161', path: '/fire_extinguisher_173_m' },
      { value: 'Fire Extinguisher-Utility area-safety store- Sr. No. 162', label: 'Fire Extinguisher-Utility area-safety store- Sr. No. 162', path: '/fire_extinguisher_174_m' },
      { value: 'Fire Extinguisher-Utility area-safety store- Sr. No. 163', label: 'Fire Extinguisher-Utility area-safety store- Sr. No. 163', path: '/fire_extinguisher_175_m' },
      { value: 'Fire Extinguisher-WRC room- Sr. No. 164', label: 'Fire Extinguisher-WRC room- Sr. No. 164', path: '/fire_extinguisher_176_m' },
      { value: 'Fire Extinguisher-WRC room- Sr. No. 165', label: 'Fire Extinguisher-WRC room- Sr. No. 165', path: '/fire_extinguisher_177_m' },
      { value: 'Fire Extinguisher-Battery room- Sr. No. 166', label: 'Fire Extinguisher-Battery room- Sr. No. 166', path: '/fire_extinguisher_178_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 01', label: 'Fire Extinguisher- Functional Lab -Sr.No. 01', path: '/fire_extinguisher_179_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 02', label: 'Fire Extinguisher- Functional Lab -Sr.No. 02', path: '/fire_extinguisher_180_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 02', label: 'Fire Extinguisher- Functional Lab -Sr.No. 02', path: '/fire_extinguisher_181_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 03', label: 'Fire Extinguisher- Functional Lab -Sr.No. 03', path: '/fire_extinguisher_182_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 03', label: 'Fire Extinguisher- Functional Lab -Sr.No. 03', path: '/fire_extinguisher_183_m' },
      { value: 'Fire Extinguisher- Functional Lab -Sr.No. 03', label: 'Fire Extinguisher- Functional Lab -Sr.No. 03', path: '/fire_extinguisher_184_m' },

      { value: 'D.G.-1- 1010 KVA ESN NO.- 25451153', label: 'D.G.-1- 1010 KVA ESN NO.- 25451153', path: '/dg_1010_1_m' },
      { value: 'D.G.-2- 500 KVA ESN NO- 25309737', label: 'D.G.-2- 500 KVA ESN NO- 25309737', path: '/dg_500_1_m' },
      { value: 'D.G.-3- 1010 KVA ESN NO.- 25431786', label: 'D.G.-3- 1010 KVA ESN NO.- 25431786', path: '/dg_1010_2_m' },
      { value: 'D.G.-4- 1010 KVA ESN NO.- 25366157', label: 'D.G.-4- 1010 KVA ESN NO.- 25366157', path: '/dg_1010_3_m' },
      { value: 'D.G.-5- 500 KVA ESN NO- 25334984', label: 'D.G.-5- 500 KVA ESN NO- 25334984', path: '/dg_500_2_m' },

      { value: 'Air Compressor-1 (1653CFM/S ZR 275)', label: 'Air Compressor-1 (1653CFM/S ZR 275)', path: '/air_compressor_1_m' },
      { value: 'Air Compressor-2 (920 CF/ZR 160 VSD)', label: 'Air Compressor-2 (920 CF/ZR 160 VSD)', path: '/air_compressor_2_m' },

      { value: 'Air Dryer-1 ( FD1500VSD+)', label: 'Air Dryer-1 ( FD1500VSD+)', path: '/air_dryer_1_m' },
      { value: 'Air Dryer-2 ( FD1500VSD+)', label: 'Air Dryer-2 ( FD1500VSD+)', path: '/air_dryer_2_m' },

      { value: 'Fire House- Diesel Pump', label: 'Fire House- Diesel Pump', path: '/diesel_pump_1_m' },

      { value: 'Water Cooled Chiller Unit 1', label: 'Water Cooled Chiller Unit 1', path: '/water_cooled_chiller_1_m' },
      { value: 'Water Cooled Chiller Unit 2', label: 'Water Cooled Chiller Unit 2', path: '/water_cooled_chiller_2_m' },

      { value: 'Water Make-up unit of WCC', label: 'Water Make-up unit of WCC', path: '/water_makeup_unit_wcc_1_m' },
      { value: 'WCC-make up Water unit -Motor-1 & 2', label: 'WCC-make up Water unit -Motor-1 & 2', path: '/water_makeup_unit_wcc_1_m' },

      { value: 'Garden Pump', label: 'Garden Pump', path: '/garden_pump_1_m' },
      { value: 'Pump Section for WCC-1', label: 'Pump Section for WCC-1', path: '/pump_1_m' },
      { value: 'Pump Section for ACC-1', label: 'Pump Section for ACC-1', path: '/pump_2_m' },
      { value: 'Pump Section for CT-1', label: 'Pump Section for CT-1', path: '/pump_3_m' },
      { value: 'Submerssible Pump-1,2 & 3', label: 'Submerssible Pump-1,2 & 3', path: '/pump_4_m' },

      { value: 'Cooling Tower - 1', label: 'Cooling Tower - 1', path: '/cooling_tower_1_m' },
      { value: 'Cooling Tower - 2', label: 'Cooling Tower - 2', path: '/cooling_tower_2_m' },

      { value: 'AHU 1', label: 'AHU 1', path: '/ahu_1_m' },
      { value: 'AHU 2', label: 'AHU 2', path: '/ahu_2_m' },
      { value: 'AHU 3', label: 'AHU 3', path: '/ahu_3_m' },
      { value: 'AHU 4', label: 'AHU 4', path: '/ahu_4_m' },
      { value: 'AHU 5', label: 'AHU 5', path: '/ahu_5_m' },
      { value: 'AHU 6', label: 'AHU 6', path: '/ahu_6_m' },
      { value: 'AHU 7', label: 'AHU 7', path: '/ahu_7_m' },
      { value: 'AHU 8', label: 'AHU 8', path: '/ahu_8_m' },
      { value: 'AHU 9', label: 'AHU 9', path: '/ahu_9_m' },
      { value: 'AHU 10', label: 'AHU 10', path: '/ahu_10_m' },
      { value: 'AHU 11', label: 'AHU 11', path: '/ahu_11_m' },
      { value: 'AHU - 12: Functional lab', label: 'AHU 12: Functional lab', path: '/ahu_12_m' },
      { value: 'AHU - 13: AHU for CMM lab', label: 'AHU 13: AHU for CMM lab', path: '/ahu_13_m' },
      { value: 'WRC Room AHU', label: 'WRC Room AHU', path: '/wrc_room_ahu_1_m' },

      { value: 'MAU 1', label: 'MAU 1', path: '/mau_1_m' },
      { value: 'MAU 2', label: 'MAU 2', path: '/mau_2_m' },
      { value: 'MAU 3', label: 'MAU 3', path: '/mau_3_m' },

      { value: 'Swagon Compressor-1 (Technical PH L-1)', label: 'Swagon Compressor-1 (Technical PH L-1)', path: '/swagon_compressor_1_m' },
      { value: 'Swagon Compressor-2 (Technical PH L-1)', label: 'Swagon Compressor-2 (Technical PH L-1)', path: '/swagon_compressor_2_m' },

      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_1_m' },
      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_2_m' },
      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_3_m' },
      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_4_m' },
      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_5_m' },
      { value: 'Rapid rolling shutter-W/H', label: 'Rapid rolling shutter-W/H', path: '/rapid_rolling_shutter_6_m' },
      { value: 'Rapid rolling shutter-W/H-way to Electronic', label: 'Rapid rolling shutter-W/H-way to Electronic', path: '/rapid_rolling_shutter_7_m' },
      { value: 'Rapid rolling shutter-W/H-way to Electronic', label: 'Rapid rolling shutter-W/H-way to Electronic', path: '/rapid_rolling_shutter_8_m' },
      { value: 'Rapid rolling shutter-Electronic', label: 'Rapid rolling shutter-Electronic', path: '/rapid_rolling_shutter_9_m' },
      { value: 'Rapid rolling shutter-Electronic', label: 'Rapid rolling shutter-Electronic', path: '/rapid_rolling_shutter_10_m' },
      { value: 'Rapid rolling shutter-Mechanical', label: 'Rapid rolling shutter-Mechanical', path: '/rapid_rolling_shutter_11_m' },
      { value: 'Rapid rolling shutter-Mechanical', label: 'Rapid rolling shutter-Mechanical', path: '/rapid_rolling_shutter_12_m' },
      { value: 'Rapid rolling shutter- Mechanical Area Entry', label: 'Rapid rolling shutter- Mechanical Area Entry', path: '/rapid_rolling_shutter_13_m' },
      { value: 'Rapid rolling shutter- WH to scrap yard', label: 'Rapid rolling shutter- WH to scrap yard', path: '/rapid_rolling_shutter_14_m' },

      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_1_m' },
      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_2_m' },
      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_3_m' },
      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_4_m' },
      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_5_m' },
      { value: 'Rapid sliding gate-W/H', label: 'Rapid sliding gate-W/H', path: '/rapid_sliding_gate_6_m' },

      { value: 'Motorised sliding gate- Main gate', label: 'Motorised sliding gate- Main gate', path: '/motorised_sliding_gate_1_m' },
      { value: 'Motorised sliding gate- Main gate', label: 'Motorised sliding gate- Main gate', path: '/motorised_sliding_gate_2_m' },
      { value: 'Motorised sliding gate- Material gate', label: 'Motorised sliding gate- Material gate', path: '/motorised_sliding_gate_3_m' },
      { value: 'Retractable Gate at Main Gate', label: 'Retractable Gate at Main Gate', path: '/retractable_gate_1_m' },

      { value: 'Softner unit- Inlet Motor-1 & 2', label: 'Softner unit- Inlet Motor-1 & 2', path: '/softener_motor_1_m' },
      { value: 'Softner unit- outlet Pump-1,2 & 3', label: 'Softner unit- outlet Pump-1,2 & 3', path: '/softener_pump_1_m' },

      { value: 'STP pump-1 & 2', label: 'STP pump-1 & 2', path: '/stp_pump_1_m' },
      { value: 'STP pump motor-1 & 2', label: 'STP pump motor-1 & 2', path: '/stp_pump_motor_1_m' },
      { value: 'STP Ring Blower-1,2,3 & 4', label: 'STP Ring Blower-1,2,3 & 4', path: '/stp_blower_1_m' },

      { value: 'Split AC-QA-CMM Lab', label: 'Split AC-QA-CMM Lab', path: '/split_ac_1_m' },
      { value: 'Split AC-QA-Confrence room', label: 'Split AC-QA-Confrence room', path: '/split_ac_2_m' },
      { value: 'Split AC-QA office-AC1', label: 'Split AC-QA office-AC1', path: '/split_ac_3_m' },
      { value: 'Split AC-PLNA line (Near CMM room)', label: 'Split AC-PLNA line (Near CMM room)', path: '/split_ac_4_m' },
      { value: 'Split AC-BMS Room-AC 1,2,3 & 4', label: 'Split AC-BMS Room-AC 1,2,3 & 4', path: '/split_ac_5_m' },
      { value: 'Split AC-UPS room-AC 1 & 2', label: 'Split AC-UPS room-AC 1 & 2', path: '/split_ac_6_m' },

      { value: 'Cassette AC- Reception area', label: 'Cassette AC- Reception area', path: '/cassette_ac_1_m' },
      { value: 'Cassette AC- Reception area-Cabin-1', label: 'Cassette AC- Reception area-Cabin-1', path: '/cassette_ac_2_m' },
      { value: 'Cassette AC-Canteen area', label: 'Cassette AC-Canteen area', path: '/cassette_ac_3_m' },
      { value: 'Cassette AC- CMM Lab', label: 'Cassette AC- CMM Lab', path: '/cassette_ac_4_m' },
      { value: 'Cassette AC-NOX lab', label: 'Cassette AC-NOX lab', path: '/cassette_ac_5_m' },
      { value: 'Cassette AC-QA-Inspection lab', label: 'Cassette AC-QA-Inspection lab', path: '/cassette_ac_6_m' },
      { value: 'Cassette AC-Wear house-Packing area', label: 'Cassette AC-Wear house-Packing area', path: '/cassette_ac_7_m' },
      { value: 'Cassette AC-Wear house-Mechanical unboxing area', label: 'Cassette AC-Wear house-Mechanical unboxing area', path: '/cassette_ac_8_m' },
      { value: 'Cassette AC-Wear house-Electronic unboxing area', label: 'Cassette AC-Wear house-Electronic unboxing area', path: '/cassette_ac_9_m' },
      { value: 'Cassette AC-Wear house-1st floor-Cabin 1', label: 'Cassette AC-Wear house-1st floor-Cabin 1', path: '/cassette_ac_10_m' },
      { value: 'Cassette AC-Wear house-1st floor-Cabin 2', label: 'Cassette AC-Wear house-1st floor-Cabin 2', path: '/cassette_ac_11_m' },
      { value: 'Cassette AC-Mechanical-water drink room', label: 'Cassette AC-Mechanical-water drink room', path: '/cassette_ac_12_m' },
      { value: 'Cassette AC-Mechanical-glue room', label: 'Cassette AC-Mechanical-glue room', path: '/cassette_ac_13_m' },
      { value: 'Cassette AC-Mechanical office', label: 'Cassette AC-Mechanical office', path: '/cassette_ac_14_m' },
      { value: 'Cassette AC-Electronic -Maintenance office', label: 'Cassette AC-Electronic -Maintenance office', path: '/cassette_ac_15_m' },
      { value: 'Cassette AC-Electronic-QA Lab', label: 'Cassette AC-Electronic-QA Lab', path: '/cassette_ac_16_m' },
      { value: 'Cassette AC-Electronic-Water drinking room', label: 'Cassette AC-Electronic-Water drinking room', path: '/cassette_ac_17_m' },
      { value: 'Cassette AC-Electronic-Meeting room', label: 'Cassette AC-Electronic-Meeting room', path: '/cassette_ac_18_m' },
      { value: 'Cassette AC-UTM office', label: 'Cassette AC-UTM office', path: '/cassette_ac_19_m' },
      { value: 'Cassette AC-Dojo room', label: 'Cassette AC-Dojo room', path: '/cassette_ac_20_m' },
      { value: 'Cassette AC-Admin building-IInd flr-cabin 1 TO 15', label: 'Cassette AC-Admin building-IInd flr-cabin 1 TO 15', path: '/cassette_ac_21_m' },
      { value: 'Cassette AC-Admin building-IInd flr-confrence room 1 & 2', label: 'Cassette AC-Admin building-IInd flr-confrence room 1 & 2', path: '/cassette_ac_22_m' },
      { value: 'Cassette AC-Admin building-IInd flr-office passage-L1 TO L4', label: 'Cassette AC-Admin building-IInd flr-office passage-L1 TO L4', path: '/cassette_ac_23_m' },
      { value: 'Cassette AC-Admin building-IInd flr-office passage-L5 TO L9', label: 'Cassette AC-Admin building-IInd flr-office passage-L5 TO L9', path: '/cassette_ac_24_m' },

      { value: 'Street Light DB Panel-01- Main Gate Driver Cabin', label: 'Street Light DB Panel-01- Main Gate Driver Cabin', path: '/street_lights_1_m' },
      { value: 'Street Light DB Panel-02- Mate. Gate Security Cabin', label: 'Street Light DB Panel-02- Mate. Gate Security Cabin', path: '/street_lights_2_m' },
      { value: 'Street Light Pole- Main gate-Single Light', label: 'Street Light Pole- Main gate-Single Light', path: '/street_lights_3_m' },
      { value: 'Street Light Pole-Main gate-Front side gargen area-Single light', label: 'Street Light Pole-Main gate-Front side gargen area-Single light', path: '/street_lights_4_m' },
      { value: 'Street Light Pole-Canteen garden-Double light', label: 'Street Light Pole-Canteen garden-Double light', path: '/street_lights_5_m' },
      { value: 'Street Light Pole-Ware house- Dock yard-Double light', label: 'Street Light Pole-Ware house- Dock yard-Double light', path: '/street_lights_6_m' },
      { value: 'Street Light Pole-Play ground area-Double light', label: 'Street Light Pole-Play ground area-Double light', path: '/street_lights_7_m' },

      { value: 'In-house Ceiling light-Electronic Prod. Area-L1 TO L10', label: 'In-house Ceiling light-Electronic Prod. Area-L1 TO L10', path: '/canteen_led_lights_1_m' },
      { value: 'In-house Ceiling light-Electronic Prod. Area-L11 TO L20', label: 'In-house Ceiling light-Electronic Prod. Area-L11 TO L20', path: '/canteen_led_lights_2_m' },
      { value: 'In-house Ceiling light-Electronic Prod. Area- Passage 1 & 2', label: 'In-house Ceiling light-Electronic Prod. Area- Passage 1 & 2', path: '/canteen_led_lights_3_m' },
      { value: 'In-house Ceiling LED Linear light-Electronic Office', label: 'In-house Ceiling LED Linear light-Electronic Office', path: '/canteen_led_lights_4_m' }, 
      { value: 'In-house Ceiling light-Electronic- Stencil cleaning room', label: 'In-house Ceiling light-Electronic- Stencil cleaning room', path: '/canteen_led_lights_5_m' },
      { value: 'In-house Ceiling light-Electronic- Maintenance office', label: 'In-house Ceiling light-Electronic- Maintenance office', path: '/canteen_led_lights_6_m' },
      { value: 'In-house Ceiling light-Electronic- Cabin 1 TO 5', label: 'In-house Ceiling light-Electronic- Cabin 1 TO 5', path: '/canteen_led_lights_7_m' },
      { value: 'In-house Ceiling light-Electronic- QA Office', label: 'In-house Ceiling light-Electronic- QA Office', path: '/canteen_led_lights_8_m' },
      { value: 'In-house Ceiling light-Electronic- Maintenance room', label: 'In-house Ceiling light-Electronic- Maintenance room', path: '/canteen_led_lights_9_m' }, 
      { value: 'In-house Ceiling light-Electronic- Confrence room', label: 'In-house Ceiling light-Electronic- Confrence room', path: '/canteen_led_lights_10_m' },    
      { value: 'In-house Ceiling light-Electronic- Water drinking room', label: 'In-house Ceiling light-Electronic- Water drinking room', path: '/canteen_led_lights_11_m' },
      { value: 'In-house Tube light-Electronic-Maintenance office passage area ', label: 'In-house Tube light-Electronic-Maintenance office passage area ', path: '/canteen_led_lights_12_m' },
      { value: 'In-house Tube light-Electronic-Production area-wash room- M', label: 'In-house Tube light-Electronic-Production area-wash room- M', path: '/canteen_led_lights_13_m' },
      { value: 'In-house Tube light-Electronic-Production area-wash room- L', label: 'In-house Tube light-Electronic-Production area-wash room- L', path: '/canteen_led_lights_14_m' },
      { value: 'In-house ceiling light-Mechanical prod. Area- L1 TO L5', label: 'In-house ceiling light-Mechanical prod. Area- L1 TO L5', path: '/canteen_led_lights_15_m' },
      { value: 'In-house ceiling light-Mechanical prod. Area- L6 TO L11', label: 'In-house ceiling light-Mechanical prod. Area- L6 TO L11', path: '/canteen_led_lights_16_m' },
      { value: 'In-house ceiling light-Mechanical Office', label: 'In-house ceiling light-Mechanical Office', path: '/canteen_led_lights_17_m' },
      { value: 'In-house Tube light-Mechanical-Glue room', label: 'In-house Tube light-Mechanical-Glue room', path: '/canteen_led_lights_18_m' },
      { value: 'In-house ceiling light-Mechanical-Tool room', label: 'In-house ceiling light-Mechanical-Tool room', path: '/canteen_led_lights_19_m' },
      { value: 'In-house Tube light-Mechanical-Wash room-Production area- M', label: 'In-house Tube light-Mechanical-Wash room-Production area- M', path: '/canteen_led_lights_20_m' },
      { value: 'In-house Tube light-Mechanical-Wash room-Production area- L', label: 'In-house Tube light-Mechanical-Wash room-Production area- L', path: '/canteen_led_lights_21_m' },
      { value: 'In-house ceiling light-Mechanical-QA Lab', label: 'In-house ceiling light-Mechanical-QA Lab', path: '/canteen_led_lights_22_m' },
      { value: 'In-house Tube light-UTM & EHS Office', label: 'In-house Tube light-UTM & EHS Office', path: '/canteen_led_lights_23_m' },
      { value: 'In-house Tube light-DOJO Room', label: 'In-house Tube light-DOJO Room', path: '/canteen_led_lights_24_m' },
      { value: 'In-house ceiling light-QA- CMM Lab/QA office', label: 'In-house ceiling light-QA- CMM Lab/QA office', path: '/canteen_led_lights_25_m' },
      { value: 'In-house ceiling light-QA- NOX Lab', label: 'In-house ceiling light-QA- NOX Lab', path: '/canteen_led_lights_26_m' },
      { value: 'In-house ceiling light-QA- Lab', label: 'In-house ceiling light-QA- Lab', path: '/canteen_led_lights_27_m' },
      { value: 'In-house Tube light-QA-CMM External area', label: 'In-house Tube light-QA-CMM External area', path: '/canteen_led_lights_28_m' },
      { value: 'In-house Tube light- PLNA Line-Internal ( Near CMM Room)', label: 'In-house Tube light- PLNA Line-Internal ( Near CMM Room)', path: '/canteen_led_lights_29_m' },
      { value: 'In-house Tube light-Ware House-Inward & outward office', label: 'In-house Tube light-Ware House-Inward & outward office', path: '/canteen_led_lights_30_m' },
      { value: 'In-house Tube light-Ware House-Dock yard-1 & 2', label: 'In-house Tube light-Ware House-Dock yard-1 & 2', path: '/canteen_led_lights_31_m' },
      { value: 'In-house Tube light-Ware House-wash room-M', label: 'In-house Tube light-Ware House-wash room-M', path: '/canteen_led_lights_32_m' },
      { value: 'In-house Tube light-Ware House-wash room-L', label: 'In-house Tube light-Ware House-wash room-L', path: '/canteen_led_lights_33_m' },
      { value: 'In-house Tube light-Mechanical area to BMS Room stire case', label: 'In-house Tube light-Mechanical area to BMS Room stire case', path: '/canteen_led_lights_34_m' },
      { value: 'In-house Tube light-BMS Room passage-PH L1 ', label: 'In-house Tube light-BMS Room passage-PH L1 ', path: '/canteen_led_lights_35_m' },
      { value: 'In-house Tube light-PH L2- Mechanical AHU area', label: 'In-house Tube light-PH L2- Mechanical AHU area', path: '/canteen_led_lights_36_m' },
      { value: 'In-house Ceiling LED Linear light-Admin B. Reception Area', label: 'In-house Ceiling LED Linear light-Admin B. Reception Area', path: '/canteen_led_lights_37_m' },
      { value: 'IN-house LED light-Canteen Area', label: 'IN-house LED light-Canteen Area', path: '/canteen_led_lights_38_m' },
      { value: 'In-house Tube light- Mechanical Changing room-M- L1 TO L6', label: 'In-house Tube light- Mechanical Changing room-M- L1 TO L6', path: '/canteen_led_lights_39_m' },
      { value: 'In-house Tube light- Changing room-1 (Mecha)- External passage', label: 'In-house Tube light- Changing room-1 (Mecha)- External passage', path: '/canteen_led_lights_40_m' },
      { value: 'In-house Tube light- Changing room-1 (Mecha)- wash room area-G', label: 'In-house Tube light- Changing room-1 (Mecha)- wash room area-G', path: '/canteen_led_lights_41_m' },
      { value: 'In-house Tube light-Ceiling- Ware House-Packing area', label: 'In-house Tube light-Ceiling- Ware House-Packing area', path: '/canteen_led_lights_42_m' },
      { value: 'In-house Tube light-Ceiling- Ware House-Mecha. Unboxting area', label: 'In-house Tube light-Ceiling- Ware House-Mecha. Unboxting area', path: '/canteen_led_lights_43_m' },
      { value: 'In-house Tube light-Ceiling- Ware House-Elect. Unboxting area', label: 'In-house Tube light-Ceiling- Ware House-Elect. Unboxting area', path: '/canteen_led_lights_44_m' },
      { value: 'In-house Tube light-steir Case lights-(Canteen-UTM OFF-Terrace)', label: 'In-house Tube light-steir Case lights-(Canteen-UTM OFF-Terrace)', path: '/canteen_led_lights_45_m' },
      { value: 'In-house Tube light-steir Case lights-(Canteen Garden side-Terrace)', label: 'In-house Tube light-steir Case lights-(Canteen Garden side-Terrace)', path: '/canteen_led_lights_46_m' },
      { value: 'In-house Tube light-steir Case lights-(From Reception cab1-Terrace)', label: 'In-house Tube light-steir Case lights-(From Reception cab1-Terrace)', path: '/canteen_led_lights_47_m' },
      { value: 'In-house Tube light-Electronic- Change room-M- L1 TO L5', label: 'In-house Tube light-Electronic- Change room-M- L1 TO L5', path: '/canteen_led_lights_48_m' },
      { value: 'In-house Tube light-Electronic- Change room-M- wash room', label: 'In-house Tube light-Electronic- Change room-M- wash room', path: '/canteen_led_lights_49_m' },
      { value: 'In-house Tube light-Electronic- Change room-L- L1 TO L4', label: 'In-house Tube light-Electronic- Change room-L- L1 TO L4', path: '/canteen_led_lights_50_m' },
      { value: 'In-house Tube light-Electronic- Change room-L- wash room', label: 'In-house Tube light-Electronic- Change room-L- wash room', path: '/canteen_led_lights_51_m' },
      { value: 'In-house light-Admin building-passage way to table tanis play room-Tube light', label: 'In-house light-Admin building-passage way to table tanis play room-Tube light', path: '/canteen_led_lights_52_m' },
      { value: 'LED lights on Vitesco board- Admin building', label: 'LED lights on Vitesco board- Admin building', path: '/canteen_led_lights_53_m' },
      { value: 'LED lights on Vitesco board- parking area', label: 'LED lights on Vitesco board- parking area', path: '/canteen_led_lights_54_m' },
      { value: 'In-house ceiling light-Access control gate to Electronic area', label: 'In-house ceiling light-Access control gate to Electronic area', path: '/canteen_led_lights_55_m' },
      { value: 'In-house light-Ware house-1st floor-wash room-M-Tube light', label: 'In-house light-Ware house-1st floor-wash room-M-Tube light', path: '/canteen_led_lights_56_m' },
      { value: 'In-house light-Ware house-1st floor-wash room-L-Tube light', label: 'In-house light-Ware house-1st floor-wash room-L-Tube light', path: '/canteen_led_lights_57_m' },
      { value: 'In-house Ceiling LED Linear light-Compressor room-L1 TO L4', label: 'In-house Ceiling LED Linear light-Compressor room-L1 TO L4', path: '/canteen_led_lights_58_m' },
      { value: 'In-house Ceiling LED Linear light-Fire hydrant room-L1 TO L4', label: 'In-house Ceiling LED Linear light-Fire hydrant room-L1 TO L4', path: '/canteen_led_lights_59_m' },
      { value: 'In-house Ceiling Flame froop light-Chemical room-L1 TO L4', label: 'In-house Ceiling Flame froop light-Chemical room-L1 TO L4', path: '/canteen_led_lights_60_m' },
      { value: 'In-house Ceiling Flame froop light-WRC room-L1 TO L2', label: 'In-house Ceiling Flame froop light-WRC room-L1 TO L2', path: '/canteen_led_lights_61_m' },
      { value: 'In-house LED Linear light-Fire hydrant room external-Fore tank side', label: 'In-house LED Linear light-Fire hydrant room external-Fore tank side', path: '/canteen_led_lights_62_m' },
      { value: 'In-house Ceiling LED Linear light-Panel room-L1 TO L3', label: 'In-house Ceiling LED Linear light-Panel room-L1 TO L3', path: '/canteen_led_lights_63_m' },
      { value: 'In-house LED Linear light-Transformer Yard-1', label: 'In-house LED Linear light-Transformer Yard-1', path: '/canteen_led_lights_64_m' },
      { value: 'In-house Ceiling LED Linear light-Air cooled chiller area-L1 TO L4', label: 'In-house Ceiling LED Linear light-Air cooled chiller area-L1 TO L4', path: '/canteen_led_lights_65_m' },
      { value: 'In-house tube light-STP room', label: 'In-house tube light-STP room', path: '/canteen_led_lights_66_m' },
      { value: 'In-house tube light-Main gate-Security cabin', label: 'In-house tube light-Main gate-Security cabin', path: '/canteen_led_lights_67_m' },
      { value: 'In-house tube light-Material gate-Security cabin 1 & 2', label: 'In-house tube light-Material gate-Security cabin 1 & 2', path: '/canteen_led_lights_68_m' },
      { value: 'In-house tube light-HT yard-1 & 2', label: 'In-house tube light-HT yard-1 & 2', path: '/canteen_led_lights_69_m' },
      { value: 'In-house tube light-Check meter area ( 1 TO 4 nos.)', label: 'In-house tube light-Check meter area ( 1 TO 4 nos.)', path: '/canteen_led_lights_70_m' },
      { value: 'In-house LED Linear light-Transformer Yard-(1 TO 5)', label: 'In-house LED Linear light-Transformer Yard-(1 TO 5)', path: '/canteen_led_lights_71_m' },
      { value: 'In-house ceiling light-Wear house cabin ( from Inward office)', label: 'In-house ceiling light-Wear house cabin ( from Inward office)', path: '/canteen_led_lights_72_m' },
      { value: 'Admin office light-iPLANE round sf- 15w', label: 'Admin office light-iPLANE round sf- 15w', path: '/canteen_led_lights_73_m' },
      { value: 'Admin office light-Xcent - 15W WD', label: 'Admin office light-Xcent - 15W WD', path: '/canteen_led_lights_74_m' },
      { value: 'Admin office light-BARREL - P 15W DIFFUSE LIGHT 2 METER WIRE KIT', label: 'Admin office light-BARREL - P 15W DIFFUSE LIGHT 2 METER WIRE KIT', path: '/canteen_led_lights_75_m' },
      { value: 'Admin office light-U4YA - P 400 25W OPAL 2.5 METER SUSPENSION KIT', label: 'Admin office light-U4YA - P 400 25W OPAL 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_76_m' },
      { value: 'RAD 12W DOWN LIGHT', label: 'RAD 12W DOWN LIGHT', path: '/canteen_led_lights_77_m' },
      { value: 'Admin office light-DARK KNIGHT FLUTE 2400MM CUSTOMIZED PROFILE DARK KNIGHT 512W MD 3NOS 2.5 METER SUSPENSION KIT', label: 'Admin office light-DARK KNIGHT FLUTE 2400MM CUSTOMIZED PROFILE DARK KNIGHT 512W MD 3NOS 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_78_m' },
      { value: 'Admin office light-SLATE - P 120 30W 2.5 METER SUSPENSION KIT', label: 'Admin office light-SLATE - P 120 30W 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_79_m' },
      { value: 'Admin office light-ENSO - P 2400 DIA 100W SEMICIRCLE 2.5 METER SUSPENSION KIT', label: 'Admin office light-ENSO - P 2400 DIA 100W SEMICIRCLE 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_80_m' },
      { value: 'Admin office light-ROA - P 240 40W SUSPENDED PROFILE LIGHT (OPD) 2.5 METER SUSPENSION KIT', label: 'Admin office light-ROA - P 240 40W SUSPENDED PROFILE LIGHT (OPD) 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_81_m' },
      { value: 'Admin office light-ROA - P 120 20W SUSPENDED PROFILE LIGHT (OPD) 2.5 METER SUSPENSION KIT', label: 'Admin office light-ROA - P 120 20W SUSPENDED PROFILE LIGHT (OPD) 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_82_m' },
      { value: 'Admin office light-ROA - P 4800 SUSPENDED PROFILE LIGHT (OPD) ROA - P 240 40W 2 NOS. 2.5 METER SUSPENSION KIT', label: 'Admin office light-ROA - P 4800 SUSPENDED PROFILE LIGHT (OPD) ROA - P 240 40W 2 NOS. 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_83_m' },
      { value: 'Admin office light-ROA - P 3600 SUSPENDED PROFILE LIGHT (OPD) ROA - P 180 30W 2 NOS. 2.5 METER SUSPENSION KIT', label: 'Admin office light-ROA - P 3600 SUSPENDED PROFILE LIGHT (OPD) ROA - P 180 30W 2 NOS. 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_84_m' },
      { value: 'Admin office light-SKY LIGHT 22 - 30 W', label: 'Admin office light-SKY LIGHT 22 - 30 W', path: '/canteen_led_lights_85_m' },
      { value: 'Admin office light-COCO - P 60 40W', label: 'Admin office light-COCO - P 60 40W', path: '/canteen_led_lights_86_m' },
      { value: 'Admin office light-LOOK AROUND SF 15W', label: 'Admin office light-LOOK AROUND SF 15W', path: '/canteen_led_lights_87_m' },
      { value: 'Admin office light-ROA - R 180 30W OPD', label: 'Admin office light-ROA - R 180 30W OPD', path: '/canteen_led_lights_88_m' },
      { value: 'Admin office light-ENSO - P 1800 DIA 76W 2.5 METER SUSPENSION KIT', label: 'Admin office light-ENSO - P 1800 DIA 76W 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_89_m' },
      { value: 'Admin office light-SPOT BOY TA 50 10W MD', label: 'Admin office light-SPOT BOY TA 50 10W MD', path: '/canteen_led_lights_90_m' },
      { value: 'Admin office light-INVICTUS - P 350 28W 2.5 METER SUSPENSION KIT', label: 'Admin office light-INVICTUS - P 350 28W 2.5 METER SUSPENSION KIT', path: '/canteen_led_lights_91_m' },

      { value: 'Emergency Fire door -Functional lab Staff working room', label: 'Emergency Fire door -Functional lab Staff working room', path: '/emergency_door_1_m' },
      { value: 'Emergency Fire door -Functional lab chemical storage room', label: 'Emergency Fire door -Functional lab chemical storage room', path: '/emergency_door_2_m' },

      { value: 'Beam Detector', label: 'Beam Detector', path: '/beam_detector_1_m' },
      { value: 'Smoke Detector', label: 'Smoke Detector', path: '/smoke_detector_1_m' },

      { value: 'Process cooling water line (Mechanical Area)', label: 'Process cooling water line (Mechanical Area)', path: '/water_line_1_m' },
      { value: 'Process cooling water line (PHL -1)', label: 'Process cooling water line (PHL -1)', path: '/water_line_2_m' },
      { value: 'Process cooling water line (PHL -2 )', label: 'Process cooling water line (PHL -2 )', path: '/water_line_3_m' },
      { value: 'Domestic water pipe line (Inward Area)', label: 'Domestic water pipe line (Inward Area)', path: '/water_line_4_m' },
      { value: 'Domestic water pipe line (PHL -1)', label: 'Domestic water pipe line (PHL -1)', path: '/water_line_5_m' },
      { value: 'Domestic water pipe line (PHL -2 )', label: 'Domestic water pipe line (PHL -2 )', path: '/water_line_6_m' },
      
      { value: 'Air Line (PHL -1 Fall Ceiling)', label: 'Air Line (PHL -1 Fall Ceiling)', path: '/air_line_1_m' },
      { value: 'Air Line (Electronis Area)', label: 'Air Line (Electronis Area)', path: '/air_line_2_m' },
      { value: 'Air Line (Utility Area)', label: 'Air Line (Utility Area)', path: '/air_line_3_m' },
      { value: 'Air Line (Mechanical Area)', label: 'Air Line (Mechanical Area)', path: '/air_line_4_m' },

      { value: 'Fire water line (Inhouse- Wear house area)', label: 'Fire water line (Inhouse- Wear house area)', path: '/fire_water_line_1_m' },
      { value: 'Fire water line (Inhouse- Electronic area)', label: 'Fire water line (Inhouse- Electronic area)', path: '/fire_water_line_2_m' },
      { value: 'Fire water line (Inhouse- Mechanical  area)', label: 'Fire water line (Inhouse- Mechanical  area)', path: '/fire_water_line_3_m' },
      { value: 'Fire water line (Inhouse-Admin Building Area)', label: 'Fire water line (Inhouse-Admin Building Area)', path: '/fire_water_line_4_m' },
      { value: 'Fire water line (Inhouse- Utility Area)', label: 'Fire water line (Inhouse- Utility Area)', path: '/fire_water_line_5_m' },
      { value: 'Fire water line (Outer periferi)', label: 'Fire water line (Outer periferi)', path: '/fire_water_line_6_m' },

      { value: 'Panel - 32 (VFD + star delta panel for standby process loop system)', label: 'Panel - 32 (VFD + star delta panel for standby process loop system)', path: '/panel_1_m' },
      { value: 'Panel - 33 (Seimens - VFD for condensor pump 2 & CT pump 2 nos panel)', label: 'Panel - 33 (Seimens - VFD for condensor pump 2 & CT pump 2 nos panel)', path: '/panel_2_m' },
      { value: 'Panel - 34 (Admin-Solar injection Panel)', label: 'Panel - 34 (Admin-Solar injection Panel)', path: '/panel_3_m' },
      { value: 'Panel - 35 (Car parking-Solar injection Panel)', label: 'Panel - 35 (Car parking-Solar injection Panel)', path: '/panel_4_m' },
      { value: 'Panel - 36 (Pond water pump)', label: 'Panel - 36 (Pond water pump)', path: '/panel_5_m' },
      { value: 'Panel - 37 EV charging station', label: 'Panel - 37 EV charging station', path: '/panel_6_m' },

      // { value: 'Option6', label: 'Air Chiller', path: '/air_chiller_1_m' },
      // { value: 'Option9', label: 'STP', path: '/stp_1_m' },
      // { value: 'Option11', label: 'Air Receiver', path: '/air_receiver_1_m' },
      // { value: 'Option12', label: 'UPS', path: '/ups_1_m' },
      // { value: 'Option13', label: 'Swizer Lift', path: '/swizer_lift_1_m' },
      // { value: 'Option17', label: 'Stacker-Manual', path: '/stacker_manual_1_m' },
      // { value: 'Option18', label: 'Stacker-Battery', path: '/stacker_battery_1_m' },
      // { value: 'Option20', label: 'Fire Hydrant System', path: '/fire_hydrant_system_1_m' },
      // { value: 'Option21', label: 'Transformer', path: '/transformer_1_m' },
      // { value: 'Option22', label: 'Panel w/o ACB', path: '/panel_wo_acb_1_m' },
      // { value: 'Option23', label: 'Panel With ACB', path: '/panel_with_acb_1_m' },
      // { value: 'Option26', label: 'Shop Floor Tubelights', path: '/shop_floor_tubelights_1_m' },
      // { value: 'Option27', label: 'Shop Floor Lights Mecha', path: '/shop_floor_lights_mecha_1_m' },
      // { value: 'Option28', label: 'Shop Floor Lights', path: '/shop_floor_lights_1_m' },
      // { value: 'Option29', label: 'Vaccum Circuit Breaker - VCB', path: '/vaccum_circuit_breaker_vcb_1_m' },
      // { value: 'Option30', label: 'Air Circuit Breaker - ACB', path: '/air_circuit_breaker_acb_1_m' },
      // { value: 'Option31', label: 'HT & LT Panel', path: '/ht_lt_panel_1_m' },
      // { value: 'Option34', label: 'Rolling Shutter', path: '/rolling_shutter_1_m' },
      // { value: 'Option36', label: 'Softener Plant', path: '/softener_plant_1_m' },
      // { value: 'Option37', label: 'PDB Panel', path: '/pdb_panel_1_m' },
      // { value: 'Option38', label: 'ELDB', path: '/eldb_1_m' },
      // { value: 'Option39', label: 'UPSDB Panel', path: '/upsdb_panel_1_m' },
      // { value: 'Option40', label: 'LDB', path: '/ldb_1_m' },
      // { value: 'Option41', label: 'DDC Panel', path: '/ddc_panel_1_m' },
      // { value: 'Option43', label: 'Spinkler', path: '/spinkler_1_m' },
      // { value: 'Option45', label: 'Manual Call Point', path: '/manual_call_point_1_m' },
      // { value: 'Option47', label: 'Hooter cum Strobe', path: '/hooter_cum_strobe_1_m' },
      // { value: 'Option48', label: 'Fire Hydrant', path: '/fire_hydrant_1_m' },
      // { value: 'Option49', label: 'Hose Reel', path: '/hose_reel_1_m' },
      // { value: 'Option51', label: 'Metal Double Leaf Door', path: '/metal_double_leaf_door_1_m' },
      // { value: 'Option52', label: 'Metal Single Leaf Door', path: '/metal_single_leaf_door_1_m' },
      // { value: 'Option53', label: 'Wooden Double Leaf Door', path: '/wooden_double_leaf_door_1_m' },
      // { value: 'Option54', label: 'Wooden Single Leaf Door', path: '/wooden_single_leaf_door_1_m' },
      // { value: 'Option55', label: 'Glass Round Door', path: '/glass_round_door_1_m' },
      // { value: 'Option56', label: 'Glass Double Leaf Door', path: '/glass_double_leaf_door_1_m' },
      // { value: 'Option57', label: 'Glass Single Leaf Door', path: '/glass_single_leaf_door_1_m' },
      // { value: 'Option58', label: 'FRP Door', path: '/frp_door_1_m' },
      // { value: 'Option60', label: 'Water Make-up unit of ACC', path: '/water_makeup_unit_acc_1_m' },
    ], []);
      






    const QuarterlyOptions = useMemo(() => [
      // { value: 'Air Compressor', label: 'Air Compressor', path: '/air_compressor_1_q' },
      // { value: 'DG - 1010', label: 'DG - 1010', path: '/dg_1010_1_q' },
      // { value: 'DG - 500', label: 'DG - 500', path: '/dg_500_1_q' },
      // { value: 'AHU-1', label: 'AHU-1', path: '/ahu_1_1_q' },
      
      { value: 'Air Chiller-1', label: 'Air Chiller-1', path: '/air_chiller_1_q' },
      { value: 'Air Chiller-2', label: 'Air Chiller-2', path: '/air_chiller_2_q' },

      { value: 'BMS-1', label: 'BMS-1', path: '/bms_1_q' },

      { value: 'Water cooler -1', label: 'Water cooler -1', path: '/water_chiller_1_q' },
      { value: 'Water cooler -2', label: 'Water cooler -2', path: '/water_chiller_2_q' },
      { value: 'Water cooler -3', label: 'Water cooler -3', path: '/water_chiller_3_q' },
      { value: 'Water cooler -4', label: 'Water cooler -4', path: '/water_chiller_4_q' },
      { value: 'Water cooler -5', label: 'Water cooler -5', path: '/water_chiller_5_q' },
      { value: 'Water cooler -6', label: 'Water cooler -6', path: '/water_chiller_6_q' },

      { value: 'Cooling Tower', label: 'Cooling Tower', path: '/cooling_tower_1_q' },
      { value: 'STP', label: 'STP', path: '/stp_1_q' },
      { value: 'Air Dryer', label: 'Air Dryer', path: '/air_dryer_1_q' },
      { value: 'Air Receiver Tank', label: 'Air Receiver Tank', path: '/air_receiver_tank_1_q' },

      { value: 'UPS-1', label: 'UPS -1 (250 kva) (SR NO. P1201949129564)', path: '/ups_1_q' },
      { value: 'UPS-2', label: 'UPS -2 (250 kva) (SR NO. P1201948129387)', path: '/ups_2_q' },
      { value: 'UPS-3', label: 'UPS -3 (250 kva) (SR NO. P1201948129386)', path: '/ups_3_q' },
      { value: 'UPS-4', label: 'UPS - 4 (250 kva) (SR NO. P1201936121960)', path: '/ups_4_q' },
      { value: 'UPS-5', label: 'UPS-UTM Office (Sr. No. 201812HU2903)', path: '/ups_5_q' },
      { value: 'UPS-6', label: 'UPS Panel for 120 kva-UTM Office', path: '/ups_6_q' },
      { value: 'UPS-7', label: 'UPS-3 kva Main gate', path: '/ups_7_q' },
      { value: 'UPS-8', label: 'UPS-3 kva Material gate', path: '/ups_8_q' },
      { value: 'UPS-9', label: 'UPS-6 kva UTM office-Computer 1', path: '/ups_9_q' },
      { value: 'UPS-10', label: 'UPS-6 kva UTM office-Computer 2', path: '/ups_10_q' },
      { value: 'UPS-11', label: 'UPS-6 kva UTM office-Computer 3', path: '/ups_11_q' },
      { value: 'UPS-12', label: 'UPS-6 kva Panel room', path: '/ups_12_q' },
      { value: 'UPS-13', label: 'UPS- 90KVA (TPHL-I)', path: '/ups_13_q' },
      { value: 'UPS-14', label: 'UPS- 90KVA (ADB II nd FR))', path: '/ups_14_q' },
      { value: 'UPS-15', label: 'UPS - 400 KVA', path: '/ups_15_q' },
      { value: 'UPS-16', label: 'UPS -60 KVA', path: '/ups_16_q' },
      { value: 'UPS-17', label: 'UPS -Step up', path: '/ups_17_q' },
      { value: 'UPS-18', label: 'UPS -Step down', path: '/ups_18_q' },

      { value: 'Swizer Lift', label: 'Swizer Lift', path: '/swizer_lift_1_q' },

      { value: 'Cassette AC-1', label: 'Cassette AC-1-Reception area', path: '/cassette_ac_1_q' },
      { value: 'Cassette AC-2', label: 'Cassette AC-2-Reception area-Cabin-1', path: '/cassette_ac_2_q' },
      { value: 'Cassette AC-3', label: 'Cassette AC-3-Canteen area', path: '/cassette_ac_3_q' },
      { value: 'Cassette AC-4', label: 'Cassette AC-4-CMM Lab', path: '/cassette_ac_4_q' },
      { value: 'Cassette AC-5', label: 'Cassette AC-5-NOX lab', path: '/cassette_ac_5_q' },
      { value: 'Cassette AC-6', label: 'Cassette AC-6-QA-Inspection lab', path: '/cassette_ac_6_q' },
      { value: 'Cassette AC-7', label: 'Cassette AC-7-Wear house-Packing area', path: '/cassette_ac_7_q' },
      { value: 'Cassette AC-8', label: 'Cassette AC-8-Wear house-Mechanical unboxing area', path: '/cassette_ac_8_q' },
      { value: 'Cassette AC-9', label: 'Cassette AC-9-Wear house-Electronic unboxing area', path: '/cassette_ac_9_q' },
      { value: 'Cassette AC-10', label: 'Cassette AC-10-Wear house-1st floor-Cabin 1', path: '/cassette_ac_10_q' },
      { value: 'Cassette AC-11', label: 'Cassette AC-11-Wear house-1st floor-Cabin 2', path: '/cassette_ac_11_q' },
      { value: 'Cassette AC-12', label: 'Cassette AC-12-Mechanical-water drink room', path: '/cassette_ac_12_q' },
      { value: 'Cassette AC-13', label: 'Cassette AC-13-Mechanical-glue room', path: '/cassette_ac_13_q' },
      { value: 'Cassette AC-14', label: 'Cassette AC-14-Mechanical office', path: '/cassette_ac_14_q' },
      { value: 'Cassette AC-15', label: 'Cassette AC-15-Electronic-Maintenance office', path: '/cassette_ac_15_q' },
      
      { value: 'Cassette AC-16', label: 'Cassette AC-16-Electronic-QA Lab', path: '/cassette_ac_16_q' },
      { value: 'Cassette AC-17', label: 'Cassette AC-17-Electronic-Water drinking room', path: '/cassette_ac_17_q' },
      { value: 'Cassette AC-18', label: 'Cassette AC-18-Electronic-Meeting room', path: '/cassette_ac_18_q' },
      { value: 'Cassette AC-19', label: 'Cassette AC-19-UTM office', path: '/cassette_ac_19_q' },
      { value: 'Cassette AC-20', label: 'Cassette AC-20-Dojo room (1 & 2 nos)', path: '/cassette_ac_20_q' },
      
      { value: 'Cassette AC-21', label: 'Cassette AC-21-Admin building-IInd flr-cabin 1 TO 15', path: '/cassette_ac_21_q' },
      { value: 'Cassette AC-22', label: 'Cassette AC-22-Admin building-IInd flr-conference room 1 & 2', path: '/cassette_ac_22_q' },
      { value: 'Cassette AC-23', label: 'Cassette AC-23-Admin building-IInd flr-office passage-L1 TO L4', path: '/cassette_ac_23_q' },
      { value: 'Cassette AC-24', label: 'Cassette AC-24-Admin building-IInd flr-office passage-L5 TO L9', path: '/cassette_ac_24_q' },

      { value: 'Cassette AC-25', label: 'Cassette AC-Admin building-Medical room', path: '/cassette_ac_25_q' },
      { value: 'Cassette AC-26', label: 'Cassette AC-Admin building-Beard room', path: '/cassette_ac_26_q' },
      { value: 'Cassette AC-27', label: 'Cassette AC-Admin building-Mother care room', path: '/cassette_ac_27_q' },
      { value: 'Cassette AC-28', label: 'Cassette AC-Admin building-cardle & crayom room', path: '/cassette_ac_28_q' },
      { value: 'Cassette AC-29', label: 'Cassette AC-WH Ist floor cabin', path: '/cassette_ac_29_q' },

      { value: 'Cassette AC-30', label: 'Cassette AC 1 - Suprime', path: '/cassette_ac_30_q' },
      { value: 'Cassette AC-31', label: 'Cassette AC 2 - Suprime', path: '/cassette_ac_31_q' },

      { value: 'Split AC-1', label: 'Split AC-1-QA-CMM Lab', path: '/split_ac_1_q' },
      { value: 'Split AC-2', label: 'Split AC-2-QA-Conference room', path: '/split_ac_2_q' },
      { value: 'Split AC-3', label: 'Split AC-3-QA office-AC1', path: '/split_ac_3_q' },
      { value: 'Split AC-4', label: 'Split AC-4-PLNA line (Near CMM room)', path: '/split_ac_4_q' },
      { value: 'Split AC-5', label: 'Split AC-5-BMS Room-AC 1,2,3 & 4', path: '/split_ac_5_q' },
      { value: 'Split AC-6', label: 'Split AC-6-UPS room-AC 1 & 2', path: '/split_ac_6_q' },
      { value: 'Split AC-7', label: 'Split AC-7-Wear house-Inward office', path: '/split_ac_7_q' },
      { value: 'Split AC-8', label: 'Split AC-8-Wear house-Outward office', path: '/split_ac_8_q' },
      { value: 'Split AC-9', label: 'Split AC-9-Mechanical-QA Lab-AC1 & 2', path: '/split_ac_9_q' },
      { value: 'Split AC-10', label: 'Split AC-Admin office-Swagon compressor room AC-1', path: '/split_ac_10_q' },
      { value: 'Split AC-11', label: 'Split AC-Admin office-Swagon compressor room AC-2', path: '/split_ac_11_q' },
      { value: 'Split AC-12', label: 'Split AC-Admin office-Network room, AC-1', path: '/split_ac_12_q' },
      { value: 'Split AC-13', label: 'Split AC-Admin office-Network room, AC-2', path: '/split_ac_13_q' },

      { value: 'Split AC-14', label: 'Split AC-Server room at WH AC-1', path: '/split_ac_14_q' },
      { value: 'Split AC-15', label: 'Split AC-Server room at WH AC-2', path: '/split_ac_15_q' },
      { value: 'Split AC-16', label: 'Split AC-TPHL I- Swagon compressor room', path: '/split_ac_16_q' },
      { value: 'Split AC-17', label: 'Split AC-TPHL I- Server room AC-1', path: '/split_ac_17_q' },
      { value: 'Split AC-18', label: 'Split AC-TPHL I- Server room AC-2', path: '/split_ac_18_q' },

      { value: 'Split AC-19', label: 'Split AC - 1- Server room,Mechanical office', path: '/split_ac_19_q' },
      { value: 'Split AC-20', label: 'Split AC - 2- Server room,Mechanical office', path: '/split_ac_20_q' },

      { value: 'Split AC-21', label: 'Split AC -Functional lab', path: '/split_ac_21_q' },
      { value: 'Split AC-22', label: 'Split AC -Functional lab', path: '/split_ac_22_q' },
      { value: 'Split AC-23', label: 'Split AC -Functional lab', path: '/split_ac_23_q' },

      { value: 'Swegon Compressor', label: 'Swegon Compressor', path: '/swegon_compressor_1_q' },

      { value: 'Stacker-Manual-1', label: 'Stacker-Manual operate-Electroninc production area', path: '/stacker_manual_1_q' },
      { value: 'Stacker-Manual', label: 'Stacker-Manual operate-Mechanical area-1 & 2', path: '/stacker_manual_2_q' },

      { value: 'Stacker-Battery-1', label: 'Stacker-Battery-1 operated-ware house area', path: '/stacker_battery_1_q' },
      { value: 'Stacker-Battery-2', label: 'Stacker-Mechanical-2-Battery operated pallet truck', path: '/stacker_battery_2_q' },
      { value: 'Stacker-Battery-3', label: 'Stacker-Battery-3 operated-ware house area', path: '/stacker_battery_3_q' },
      { value: 'Stacker-Battery-4', label: 'Stacker-Battery-4 operated-ware house area', path: '/stacker_battery_4_q' },
      { value: 'Stacker-Battery-5', label: 'Stacker-Battery-5 operated-ware house area (SI NO. 2016/04/007) ', path: '/stacker_battery_5_q' },

      { value: 'Diesel Pump', label: 'Diesel Pump', path: '/diesel_pump_1_q' },
      { value: 'Fire Hydrant System', label: 'Fire Hydrant System', path: '/fire_hydrant_system_1_q' },

      { value: 'Street Light -1', label: 'Street Light Pole-1-Main gate-Single Light', path: '/street_lights_1_q' },
      { value: 'Street Light -2', label: 'Street Light Pole-2-Main gate-Front side garden area-Single light', path: '/street_lights_2_q' },
      { value: 'Street Light -3', label: 'Street Light Pole-3-Canteen garden-Double light', path: '/street_lights_3_q' },
      { value: 'Street Light -4', label: 'Street Light Pole-4-Warehouse-Dock yard-Double light', path: '/street_lights_4_q' },
      { value: 'Street Light -5', label: 'Street Light Pole-5-Play ground area-Double light', path: '/street_lights_5_q' },
      
      { value: 'Inhouse Light-1', label: 'In-house-1 Ceiling light-Electronic Prod. Area-L1 TO L10', path: '/inhouse_lights_1_q' },
      { value: 'Inhouse Light-2', label: 'In-house-2 Ceiling light-Electronic Prod. Area-L11 TO L20', path: '/inhouse_lights_2_q' },
      { value: 'Inhouse Light-3', label: 'In-house-3 Ceiling light-Electronic Prod. Area-Passage 1 & 2', path: '/inhouse_lights_3_q' },
      { value: 'Inhouse Light-4', label: 'In-house-4 Ceiling LED Linear light-Electronic Office', path: '/inhouse_lights_4_q' },
      { value: 'Inhouse Light-5', label: 'In-house-5 Ceiling light-Electronic-Stencil cleaning room', path: '/inhouse_lights_5_q' },
      { value: 'Inhouse Light-6', label: 'In-house-6 Ceiling light-Electronic-Maintenance office', path: '/inhouse_lights_6_q' },
      { value: 'Inhouse Light-7', label: 'In-house-7 Ceiling light-Electronic-Cabin 1 TO 5', path: '/inhouse_lights_7_q' },
      { value: 'Inhouse Light-8', label: 'In-house-8 Ceiling light-Electronic-QA Office', path: '/inhouse_lights_8_q' },
      { value: 'Inhouse Light-9', label: 'In-house-9 Ceiling light-Electronic-Maintenance room', path: '/inhouse_lights_9_q' },
      { value: 'Inhouse Light-10', label: 'In-house-10 Ceiling light-Electronic-Conference room', path: '/inhouse_lights_10_q' },
      { value: 'Inhouse Light-11', label: 'In-house-11 Ceiling light-Electronic-Water drinking room', path: '/inhouse_lights_11_q' },
      { value: 'Inhouse Light-12', label: 'In-house-12 Tube light-Electronic-Maintenance office passage area', path: '/inhouse_lights_12_q' },
      { value: 'Inhouse Light-13', label: 'In-house-13 Tube light-Electronic-Production area-wash room-M', path: '/inhouse_lights_13_q' },
      { value: 'Inhouse Light-14', label: 'In-house-14 Tube light-Electronic-Production area-wash room-L', path: '/inhouse_lights_14_q' },
      { value: 'Inhouse Light-15', label: 'In-house-15 Ceiling light-Mechanical Prod. Area-L1 TO L5', path: '/inhouse_lights_15_q' },
      { value: 'Inhouse Light-16', label: 'In-house-16 Ceiling light-Mechanical Prod. Area-L6 TO L11', path: '/inhouse_lights_16_q' },
      { value: 'Inhouse Light-17', label: 'In-house-17 Ceiling light-Mechanical Office', path: '/inhouse_lights_17_q' },
      { value: 'Inhouse Light-18', label: 'In-house-18 Tube light-Mechanical-Glue room', path: '/inhouse_lights_18_q' },
      { value: 'Inhouse Light-19', label: 'In-house-19 Ceiling light-Mechanical-Tool room', path: '/inhouse_lights_19_q' },
      { value: 'Inhouse Light-20', label: 'In-house-20 Tube light-Mechanical-Wash room-Production area-M', path: '/inhouse_lights_20_q' },
      { value: 'Inhouse Light-21', label: 'In-house-21 Tube light-Mechanical-Wash room-Production area-L', path: '/inhouse_lights_21_q' },
      { value: 'Inhouse Light-22', label: 'In-house-22 Ceiling light-Mechanical-QA Lab', path: '/inhouse_lights_22_q' },
      { value: 'Inhouse Light-23', label: 'In-house-23 Tube light-UTM & EHS Office', path: '/inhouse_lights_23_q' },
      { value: 'Inhouse Light-24', label: 'In-house-24 Tube light-DOJO Room', path: '/inhouse_lights_24_q' },
      { value: 'Inhouse Light-25', label: 'In-house-25 Ceiling light-QA-CMM Lab/QA Office', path: '/inhouse_lights_25_q' },
      { value: 'Inhouse Light-26', label: 'In-house-26 Ceiling light-QA-NOX Lab', path: '/inhouse_lights_26_q' },
      { value: 'Inhouse Light-27', label: 'In-house-27 Ceiling light-QA-Lab', path: '/inhouse_lights_27_q' },
      { value: 'Inhouse Light-28', label: 'In-house-28 Tube light-QA-CMM External area', path: '/inhouse_lights_28_q' },
      { value: 'Inhouse Light-29', label: 'In-house-29 Tube light-PLNA Line-Internal (Near CMM Room)', path: '/inhouse_lights_29_q' },
      { value: 'Inhouse Light-30', label: 'In-house-30 Ceiling light-Ware House Area L1 TO L7', path: '/inhouse_lights_30_q' },
      { value: 'Inhouse Light-31', label: 'In-house-31 Tube light-Ware House-Inward & outward office', path: '/inhouse_lights_31_q' },
      { value: 'Inhouse Light-32', label: 'In-house-32 Tube light-Ware House-Dock yard-1 & 2', path: '/inhouse_lights_32_q' },
      { value: 'Inhouse Light-33', label: 'In-house-33 Ceiling LED Linear light-Ware house Office', path: '/inhouse_lights_33_q' },
      { value: 'Inhouse Light-34', label: 'In-house-34 Tube light-Ware House-wash room-M', path: '/inhouse_lights_34_q' },
      { value: 'Inhouse Light-35', label: 'In-house-35 Tube light-Ware House-wash room-L', path: '/inhouse_lights_35_q' },
      { value: 'Inhouse Light-36', label: 'In-house-36 Tube light-Mechanical area to BMS Room stair case', path: '/inhouse_lights_36_q' },
      { value: 'Inhouse Light-37', label: 'In-house-37 Tube light-BMS Room passage-PH L1', path: '/inhouse_lights_37_q' },
      { value: 'Inhouse Light-38', label: 'In-house-38 Tube light-PH L2-Mechanical AHU area', path: '/inhouse_lights_38_q' },
      { value: 'Inhouse Light-39', label: 'In-house-39 Ceiling LED Linear light-Admin B. Reception Area', path: '/inhouse_lights_39_q' },
      { value: 'Inhouse Light-40', label: 'In-house-40 Pedestal Fan-1', path: '/inhouse_lights_40_q' },
      { value: 'Inhouse Light-41', label: 'In-house-41 Pedestal Fan-2', path: '/inhouse_lights_41_q' },
      { value: 'Inhouse Light-42', label: 'In-house-42 LED light-Canteen Area', path: '/inhouse_lights_42_q' },
      { value: 'Inhouse Light-43', label: 'In-house-43 Tube light-Mechanical Changing room-M-L1 TO L6', path: '/inhouse_lights_43_q' },
      { value: 'Inhouse Light-44', label: 'In-house-44 Tube light-Changing room-1 (Mecha)-External passage', path: '/inhouse_lights_44_q' },
      { value: 'Inhouse Light-45', label: 'In-house-45 Tube light-Changing room-1 (Mecha)-Wash room area-G', path: '/inhouse_lights_45_q' },
      { value: 'Inhouse Light-46', label: 'In-house-46 Tube light-Ceiling-Ware House-Packing area', path: '/inhouse_lights_46_q' },
      { value: 'Inhouse Light-47', label: 'In-house-47 Tube light-Ceiling-Ware House-Mecha. Unboxing area', path: '/inhouse_lights_47_q' },
      { value: 'Inhouse Light-48', label: 'In-house-48 Tube light-Ceiling-Ware House-Elect. Unboxing area', path: '/inhouse_lights_48_q' },
      { value: 'Inhouse Light-49', label: 'In-house-49 Tube light-Staircase lights-(Canteen-UTM OFF-Terrace)', path: '/inhouse_lights_49_q' },
      { value: 'Inhouse Light-50', label: 'In-house-50 Tube light-Staircase lights-(Canteen Garden side-Terrace)', path: '/inhouse_lights_50_q' },
      { value: 'Inhouse Light-51', label: 'In-house-51 Tube light-Staircase lights-(From Reception cab1-Terrace)', path: '/inhouse_lights_51_q' },
      { value: 'Inhouse Light-52', label: 'In-house-52 Tube light-Electronic-Change room-M-L1 TO L5', path: '/inhouse_lights_52_q' },
      { value: 'Inhouse Light-53', label: 'In-house-53 Tube light-Electronic-Change room-M-Wash room', path: '/inhouse_lights_53_q' },
      { value: 'Inhouse Light-54', label: 'In-house-54 Tube light-Electronic-Change room-L-L1 TO L4', path: '/inhouse_lights_54_q' },
      { value: 'Inhouse Light-55', label: 'In-house-55 Tube light-Electronic-Change room-L-Wash room', path: '/inhouse_lights_55_q' },
      { value: 'Inhouse Light-56', label: 'In-house-56 light-Admin building-passage way to table tennis play room-Tube light', path: '/inhouse_lights_56_q' },
      { value: 'Inhouse Light-57', label: 'In-house-57 ceiling light-Access control gate to Electronic area', path: '/inhouse_lights_57_q' },
      { value: 'Inhouse Light-58', label: 'In-house-58 light-Ware house-1st floor-wash room-M-Tube light', path: '/inhouse_lights_58_q' },
      { value: 'Inhouse Light-59', label: 'In-house-59 light-Ware house-1st floor-wash room-L-Tube light', path: '/inhouse_lights_59_q' },
      { value: 'Inhouse Light-60', label: 'In-house-60 Ceiling LED Linear light-Compressor room-L1 TO L4', path: '/inhouse_lights_60_q' },
      { value: 'Inhouse Light-61', label: 'In-house-61 Ceiling LED Linear light-Fire hydrant room-L1 TO L4', path: '/inhouse_lights_61_q' },
      { value: 'Inhouse Light-62', label: 'In-house-62 Ceiling Flame proof light-Chemical room-L1 TO L4', path: '/inhouse_lights_62_q' },
      { value: 'Inhouse Light-63', label: 'In-house-63 Ceiling Flame proof light-WRC room-L1 TO L2', path: '/inhouse_lights_63_q' },
      { value: 'Inhouse Light-64', label: 'In-house-64 LED Linear light-Fire hydrant room external-Fore tank side', path: '/inhouse_lights_64_q' },
      { value: 'Inhouse Light-65', label: 'In-house-65 Ceiling LED Linear light-Panel room-L1 TO L3', path: '/inhouse_lights_65_q' },
      { value: 'Inhouse Light-66', label: 'In-house-66 LED Linear light-Transformer Yard-1', path: '/inhouse_lights_66_q' },
      { value: 'Inhouse Light-67', label: 'In-house-67 LED Linear light-Transformer Yard-2', path: '/inhouse_lights_67_q' },
      { value: 'Inhouse Light-68', label: 'In-house-68 LED Linear light-Transformer Yard-3', path: '/inhouse_lights_68_q' },
      { value: 'Inhouse Light-69', label: 'In-house-69 LED Linear light-Transformer Yard-4', path: '/inhouse_lights_69_q' },
      { value: 'Inhouse Light-70', label: 'In-house-70 LED Linear light-Transformer Yard-5', path: '/inhouse_lights_70_q' },
      { value: 'Inhouse Light-71', label: 'In-house-71 Ceiling LED Linear light-Air cooled chiller area-L1 TO L4', path: '/inhouse_lights_71_q' },
      { value: 'Inhouse Light-72', label: 'In-house-72 tube light-STP room', path: '/inhouse_lights_72_q' },
      { value: 'Inhouse Light-73', label: 'In-house-73 tube light-Main gate-Security cabin', path: '/inhouse_lights_73_q' },
      { value: 'Inhouse Light-74', label: 'In-house-74 tube light-HT yard-1 & 2', path: '/inhouse_lights_74_q' },
      { value: 'Inhouse Light-75', label: 'In-house-75 tube light-Check meter area (1 TO 4 nos.)', path: '/inhouse_lights_75_q' },
      { value: 'Inhouse Light-76', label: 'In-house-76 LED Linear light-Transformer Yard-(1 TO 5)', path: '/inhouse_lights_76_q' },
      { value: 'Inhouse Light-77', label: 'In-house-77 tube light-Material gate-Security cabin 1 & 2', path: '/inhouse_lights_77_q' },
      { value: 'Inhouse Light-78', label: 'In-house-78 ceiling light-Wear house cabin (from Inward office)', path: '/inhouse_lights_78_q' },
      { value: 'Inhouse Light-78', label: 'In-house-78 Tubelight-Functional Lab', path: '/inhouse_lights_78_q' },
      { value: 'Inhouse Light-79', label: 'In-house-79 Tubelight-Functional Lab', path: '/inhouse_lights_79_q' },
      { value: 'Inhouse Light-80', label: 'In-house-80 Tubelight-Functional Lab', path: '/inhouse_lights_80_q' },
      { value: 'Inhouse Light-81', label: 'In-house-81 Tubelight-Functional Lab', path: '/inhouse_lights_81_q' },
      { value: 'Inhouse Light-82', label: 'In-house-82 Tubelight-Functional Lab', path: '/inhouse_lights_82_q' },
      { value: 'Inhouse Light-83', label: 'In-house-83 Tubelight-Functional Lab', path: '/inhouse_lights_83_q' },
      { value: 'Inhouse Light-84', label: 'In-house-84 Tubelight-Functional Lab', path: '/inhouse_lights_84_q' },
      { value: 'Inhouse Light-85', label: 'In-house-85 Tubelight-Functional Lab', path: '/inhouse_lights_85_q' },
      { value: 'Inhouse Light-86', label: 'In-house-86 Tubelight-Functional Lab', path: '/inhouse_lights_86_q' },
      { value: 'Inhouse Light-87', label: 'In-house-87 Fire Tubelight - Boom Room', path: '/inhouse_lights_87_q' },
      { value: 'Inhouse Light-88', label: 'In-house-88 Tubelight Lucar', path: '/inhouse_lights_88_q' },
      { value: 'Inhouse Light-89', label: 'In-house-89 Tubelight Lucar', path: '/inhouse_lights_89_q' },
      { value: 'Inhouse Light-90', label: 'In-house-90 Tubelight Lucar', path: '/inhouse_lights_90_q' },
      { value: 'Inhouse Light-91', label: 'In-house-91 Tubelight Lucar', path: '/inhouse_lights_91_q' },
      { value: 'Inhouse Light-92', label: 'In-house-92 Tubelight Lucar', path: '/inhouse_lights_92_q' },
      { value: 'Inhouse Light-93', label: 'In-house-93 Tubelight Lucar', path: '/inhouse_lights_93_q' },
      { value: 'Inhouse Light-94', label: 'In-house-94 Tubelight Lucar', path: '/inhouse_lights_94_q' },
      { value: 'Inhouse Light-95', label: 'In-house-95 Tubelight Lucar', path: '/inhouse_lights_95_q' },
      { value: 'Inhouse Light-96', label: 'In-house-96 Tubelight Lucar', path: '/inhouse_lights_96_q' },
      { value: 'Inhouse Light-97', label: 'In-house-97 Tubelight Lucar', path: '/inhouse_lights_97_q' },
      { value: 'Inhouse Light-98', label: 'In-house-98 Tubelight Lucar', path: '/inhouse_lights_98_q' },
      { value: 'Inhouse Light-99', label: 'In-house-99 Tubelight Lucar', path: '/inhouse_lights_99_q' },
      { value: 'Shop Floor Lights', label: 'Shop Floor Lights', path: '/shop_floor_lights_1_q' },
      { value: 'HT & LT Panel', label: 'HT & LT Panel', path: '/ht_lt_panel_1_q' },
      { value: 'Rapid Sliding Gate', label: 'Rapid Sliding Gate', path: '/rapid_sliding_gate_1_q' },
      { value: 'Rapid Rolling Shutter', label: 'Rapid Rolling Shutter', path: '/rapid_rolling_shutter_1_q' },

      { value: 'Rolling Shutter-1', label: 'Rolling Shutter-1-Mecha Shop (1,2,3)', path: '/rolling_shutter_1_q' },
      { value: 'Rolling Shutter-2', label: 'Rolling Shutter-2-Electronic shop (1,2)', path: '/rolling_shutter_2_q' },
      { value: 'Rolling Shutter-3', label: 'Rolling Shutter-3-Air compressor Room', path: '/rolling_shutter_3_q' },
      { value: 'Rolling Shutter-4', label: 'Rolling Shutter-4-Fire pump room', path: '/rolling_shutter_4_q' },
      { value: 'Rolling Shutter-5', label: 'Rolling Shutter-5-PHL1-Near AMU', path: '/rolling_shutter_5_q' },
      { value: 'Rolling Shutter-6', label: 'Rolling Shutter-6-PHL2-Near AMU', path: '/rolling_shutter_6_q' },
      { value: 'Rolling Shutter-7', label: 'Rolling Shutter-7-W/H Dock yard', path: '/rolling_shutter_7_q' },
      { value: 'Rolling Shutter-8', label: 'Rolling Shutter-Compressor room', path: '/rolling_shutter_8_q' },
      { value: 'Rolling Shutter-9', label: 'Rolling Shutter-WH to Electronic area between rapid rolling shutter', path: '/rolling_shutter_9_q' },
      { value: 'Rolling Shutter-10', label: 'Rolling Shutter-WH to Electronic area between rapid rolling shutter', path: '/rolling_shutter_10_q' },
      { value: 'Rolling Shutter-11', label: 'Rolling shutter-way from WH to Electronic area-1', path: '/rolling_shutter_11_q' },
      { value: 'Rolling Shutter-12', label: 'Rolling shutter-way from WH to Electronic area-2', path: '/rolling_shutter_12_q' },

      { value: 'Motorised Sliding Gate', label: 'Motorised Sliding Gate', path: '/motorised_sliding_gate_1_q' },
      { value: 'Softener Plant', label: 'Softener Plant', path: '/softener_plant_1_q' },
      { value: 'Softener Unit Outlet Pump', label: 'Softner unit- outlet Pump-1,2 & 3', path: '/softener_unit_outlet_pump_1_q' },

      { value: 'ELDB Panel-1', label: 'ELDB Panel-1-Electronic Lab', path: '/eldb_1_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-Panel room', path: '/eldb_2_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-W/H Packing area', path: '/eldb_3_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-W/H office', path: '/eldb_4_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-W/H Under office area', path: '/eldb_5_q' },
      { value: 'ELDB Panel-1', label: 'ELDB Panel-1-Mech. QA Lab', path: '/eldb_6_q' },
      { value: 'ELDB Panel-2', label: 'ELDB Panel-2-Mech. Near Powder Re-Check Room', path: '/eldb_7_q' },
      { value: 'ELDB Panel-3', label: 'ELDB Panel-3-Mech. Tool Room', path: '/eldb_8_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-Admin Buld. Store Room', path: '/eldb_9_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-Main Gate Driver Cabin', path: '/eldb_10_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel-Panel room', path: '/eldb_11_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel- Admin office (Near confrence room)', path: '/eldb_12_q' },
      { value: 'ELDB Panel', label: 'ELDB Panel- Admin office (Near office entry)', path: '/eldb_13_q' },

      { value: 'LDB Panel-1', label: 'LDB Panel-1-Electronic Lab', path: '/ldb_1_q' },
      { value: 'LDB Panel', label: 'LDB Panel-Panel room', path: '/ldb_2_q' },
      { value: 'LDB Panel', label: 'LDB Panel-W/H Packing area', path: '/ldb_3_q' },
      { value: 'LDB Panel', label: 'LDB Panel-W/H office', path: '/ldb_4_q' },
      { value: 'LDB Panel', label: 'LDB Panel-W/H Under office area', path: '/ldb_5_q' },
      { value: 'LDB Panel', label: 'LDB Panel-CMM room', path: '/ldb_6_q' },
      { value: 'LDB Panel', label: 'LDB Panel-UTM Office', path: '/ldb_7_q' },
      { value: 'LDB Panel-1', label: 'LDB Panel-1-Mech. QA Lab', path: '/ldb_8_q' },
      { value: 'LDB Panel-2', label: 'LDB Panel-2-Mech. Near Powder Re-Check Room', path: '/ldb_9_q' },
      { value: 'LDB Panel-3', label: 'LDB Panel-3-Mech. Tool Room', path: '/ldb_10_q' },
      { value: 'LDB Panel', label: 'LDB Panel-Admin Buld. Store Room', path: '/ldb_11_q' },
      { value: 'LDB Panel', label: 'LDB Panel-Air Compr. Room', path: '/ldb_12_q' },
      { value: 'LDB Panel', label: 'LDB Panel-Pump House', path: '/ldb_13_q' },
      { value: 'LDB Panel', label: 'LDB Panel-PHL2-Near AHU Panel', path: '/ldb_14_q' },
      { value: 'LDB Panel', label: 'LDB Panel- PHL1-Near BMS room', path: '/ldb_15_q' },
      { value: 'LDB Panel', label: 'LDB Panel- PHL1-Near MAU unit', path: '/ldb_16_q' },
      { value: 'LDB Panel', label: 'LDB Panel- Admin office (Near confrence room)', path: '/ldb_17_q' },
      { value: 'LDB Panel', label: 'LDB Panel- Admin office (Near office entry)', path: '/ldb_18_q' },
      { value: 'LDB Panel', label: 'LDB Panel- Admin office-Network room', path: '/ldb_19_q' },
      { value: 'LDB Panel', label: 'LDB Panel- Admin office-Swagon compressor room', path: '/ldb_20_q' },
      { value: 'LDB Panel', label: 'LDB Panel 1- canteen', path: '/ldb_21_q' },
      { value: 'LDB Panel', label: 'LDB Panel 2- canteen', path: '/ldb_22_q' },

      { value: 'PDB Panel-1', label: 'PDB Panel-1-Electronic Lab', path: '/pdb_1_q' },
      { value: 'PDB Panel', label: 'PDB Panel- W/H Packing area', path: '/pdb_2_q' },
      { value: 'PDB Panel', label: 'PDB Panel-W/H Under office area', path: '/pdb_3_q' },
      { value: 'PDB Panel-1', label: 'PDB Panel-1-Mech. QA Lab', path: '/pdb_5_q' },
      { value: 'PDB Panel-2', label: 'PDB Panel-2-Mech. Near Powder Re-Check Room', path: '/pdb_6_q' },
      { value: 'PDB Panel-3', label: 'PDB Panel-3-Mech. Tool Room', path: '/pdb_7_q' },
      { value: 'PDB Panel', label: 'PDB Panel-Admin Buld. Store Room', path: '/pdb_8_q' },
      { value: 'PDB Panel', label: 'PDB Panel-Main Gate Driver Cabin', path: '/pdb_9_q' },
      { value: 'PDB Panel', label: 'PDB Panel- Swagon Compr. Room', path: '/pdb_10_q' },
      { value: 'PDB Panel', label: 'PDB Panel-Pump House', path: '/pdb_11_q' },
      { value: 'PDB Panel', label: 'PDB Panel-UTM Office', path: '/pdb_4_q' },
      { value: 'PDB Panel', label: 'PDB Panel- Admin office (Near confrence room)', path: '/pdb_12_q' },
      { value: 'PDB Panel', label: 'PDB Panel- Admin office (Near office entry)', path: '/pdb_13_q' },

      { value: 'UPSDB Panel', label: 'UPSDB Panel-CMM room', path: '/upsdb_1_q' },
      { value: 'UPSDB Panel', label: 'UPSDB Panel- Swagon Compr. Room', path: '/upsdb_2_q' },

      { value: 'MLDB Panel', label: 'MLDB Panel- panel room', path: '/mldb_1_q' },

      { value: 'Pump Section-1', label: 'Pump Section-1 FHS Jockey- Sprinckler', path: '/pump_section_1_q' },
      { value: 'Pump Section-2', label: 'Pump Section-2-FHS Jockey-Hydrant', path: '/pump_section_2_q' },
      { value: 'Pump Section-3', label: 'Pump Section-3-FHS Pressure Pump-Sprinkler', path: '/pump_section_3_q' },
      { value: 'Pump Section-4', label: 'Pump Section-4-FHS Pressure Pump-Hydrant', path: '/pump_section_4_q' },

      { value: 'DDC Panel-1', label: 'DDC Panel-1-PHL1', path: '/ddc_panel_1_q' },
      { value: 'DDC Panel-2', label: 'DDC Panel-2-PHL2', path: '/ddc_panel_2_q' },
      { value: 'DDC Panel-3', label: 'DDC Panel-3-Near Air Cooled Chiller', path: '/ddc_panel_3_q' },
      { value: 'DDC Panel-4', label: 'DDC Panel-4-Pump House', path: '/ddc_panel_4_q' },
      { value: 'DDC Panel-5', label: 'DDC Panel-5-Panel Room', path: '/ddc_panel_5_q' },
      { value: 'DDC Panel-6', label: 'DDC Panel- UTM Office', path: '/ddc_panel_6_q' },
      { value: 'DDC Panel-7', label: 'DDC Panel- STP Plant', path: '/ddc_panel_7_q' },
      
      { value: 'Fire Extinguisher', label: 'Fire Extinguisher', path: '/fire_extinguisher_1_q' },

      { value: 'Sprinkler-1', label: 'Sprinkler-1-Electronics area- Primary', path: '/sprinkler_1_q' },
      { value: 'Sprinkler-2', label: 'Sprinkler-2-Electronics area- Secondary', path: '/sprinkler_2_q' },
      { value: 'Sprinkler-3', label: 'Sprinkler-3-Mechanical area', path: '/sprinkler_3_q' },
      { value: 'Sprinkler-4', label: 'Sprinkler-4-Mechanical Utility area', path: '/sprinkler_4_q' },
      { value: 'Sprinkler-5', label: 'Sprinkler-5-Warehouse area', path: '/sprinkler_5_q' },
      { value: 'Sprinkler-6', label: 'Sprinkler-6-Admin building', path: '/sprinkler_6_q' },
      { value: 'Sprinkler-7', label: 'Sprinkler-7-Technical penthouse', path: '/sprinkler_7_q' },
      { value: 'Sprinkler-8', label: 'Sprinkler-8-Below duct', path: '/sprinkler_8_q' },
      
      { value: 'Smoke Detector-1', label: 'Smoke Detector-1-Warehouse roof level, Penthouse, Pump room & Security Cabin', path: '/smoke_detector_1_q' },
      { value: 'Smoke Detector-2', label: 'Smoke Detector-2-Mechanical Production & Utility area', path: '/smoke_detector_2_q' },
      { value: 'Smoke Detector-3', label: 'Smoke Detector-3-Electronic Production Area', path: '/smoke_detector_3_q' },
      { value: 'Smoke Detector-4', label: 'Smoke Detector-4-Technical Penthouse Area', path: '/smoke_detector_4_q' },
      { value: 'Smoke Detector-5', label: 'Smoke Detector-5-Admin Building Area', path: '/smoke_detector_5_q' },
      
      { value: 'Manual Call Point-1', label: 'Manual Call Point-1-Warehouse roof level, Penthouse, Pump room & Security Cabin', path: '/manual_call_point_1_q' },
      { value: 'Manual Call Point-2', label: 'Manual Call Point-2-Mechanical Production & Utility area', path: '/manual_call_point_2_q' },
      { value: 'Manual Call Point-3', label: 'Manual Call Point-3-Electronic Production Area', path: '/manual_call_point_3_q' },
      { value: 'Manual Call Point-4', label: 'Manual Call Point-4-Technical Penthouse Area', path: '/manual_call_point_4_q' },
      { value: 'Manual Call Point-5', label: 'Manual Call Point-5-Admin Building Area', path: '/manual_call_point_5_q' },
      
      { value: 'Beam Detector-1', label: 'Beam Detector-1 Transmeter-Warehouse roof level, Penthouse, Pump room & Security Cabin', path: '/beam_detector_1_q' },
      { value: 'Beam Detector-2', label: 'Beam Detector-2 Transmeter-Mechanical Production & Utility Area', path: '/beam_detector_2_q' },
      { value: 'Beam Detector-3', label: 'Beam Detector-3 Transmeter-Electronic Roof Area', path: '/beam_detector_3_q' },
      { value: 'Beam Detector-4', label: 'Beam Detector-4 Transmeter-Admin Building Area', path: '/beam_detector_4_q' },
      { value: 'Beam Detector-5', label: 'Beam Detector-5 Reflector-Warehouse roof level, Penthouse, Pump room & Security Cabin', path: '/beam_detector_5_q' },
      { value: 'Beam Detector-6', label: 'Beam Detector-6 Reflector-Mechanical Production & Utility Area', path: '/beam_detector_6_q' },
      { value: 'Beam Detector-7', label: 'Beam Detector-7 Reflector-Electronic Roof Area', path: '/beam_detector_7_q' },
      { value: 'Beam Detector-8', label: 'Beam Detector-8 Reflector-Admin Building Area', path: '/beam_detector_8_q' },
      
      { value: 'Hooter cum Strobe-1', label: 'Hooter cum Strobe-1-Warehouse roof level, Penthouse, Pump room & Security Cabin', path: '/hooter_cum_strobe_1_q' },
      { value: 'Hooter cum Strobe-2', label: 'Hooter cum Strobe-2-Mechanical Production & Utility Area', path: '/hooter_cum_strobe_2_q' },
      { value: 'Hooter cum Strobe-3', label: 'Hooter cum Strobe-3-Electronic Production Area', path: '/hooter_cum_strobe_3_q' },
      { value: 'Hooter cum Strobe-4', label: 'Hooter cum Strobe-4-Admin Building Area', path: '/hooter_cum_strobe_4_q' },
      { value: 'Hooter cum Strobe-5', label: 'Hooter cum Strobe-5-Technical Penthouse Area', path: '/hooter_cum_strobe_5_q' },
      
      { value: 'Fire Hydrant-1', label: 'Fire Hydrant-1-Post External-Double Headed', path: '/fire_hydrant_1_q' },
      { value: 'Fire Hydrant-2', label: 'Fire Hydrant-2-Post External-Single Headed-(1 TO 23 nos)', path: '/fire_hydrant_2_q' },
      { value: 'Fire Hydrant-3', label: 'Fire Hydrant-3-Hose Reel-Admin Building-GL', path: '/fire_hydrant_3_q' },
      { value: 'Fire Hydrant-4', label: 'Fire Hydrant-4-Hose Reel-Admin Building-L1 Stair', path: '/fire_hydrant_4_q' },
      { value: 'Fire Hydrant-5', label: 'Fire Hydrant-5-Hose Reel-Admin Building-L2 Stair', path: '/fire_hydrant_5_q' },
      { value: 'Fire Hydrant-6', label: 'Fire Hydrant-6-Hose Reel-Electronic Area-(1 TO 10 nos)', path: '/fire_hydrant_6_q' },
      { value: 'Fire Hydrant-7', label: 'Fire Hydrant-7-Hose Reel-Mechanical Area-(1 TO 10 nos)', path: '/fire_hydrant_7_q' },
      { value: 'Fire Hydrant-8', label: 'Fire Hydrant-8-Hose Reel-Warehouse Area-(1 TO 10 nos)', path: '/fire_hydrant_8_q' },
      { value: 'Fire Hydrant-9', label: 'Fire Hydrant-9-Hose Reel-Penthouse L1-(1,2)', path: '/fire_hydrant_9_q' },
      { value: 'Fire Hydrant-10', label: 'Fire Hydrant-10-Hose Reel-Penthouse L2-(1,2)', path: '/fire_hydrant_10_q' },
      
      { value: 'Hose Reel', label: 'Hose Reel', path: '/hose_reel_1_q' },
      { value: 'Emergency Door', label: 'Emergency Door', path: '/emergency_door_1_q' },

      { value: 'Glass Round Door', label: 'Glass Round Door', path: '/glass_round_door_1_q' },

      { value: 'Glass double leaf door', label: 'Door-Admin Building-Reception', path: '/glass_double_leaf_door_1_q' },
      { value: 'Wooden double leaf door', label: 'Door-Electronic area-Changing room-L', path: '/wooden_double_leaf_door_1_q' },
      { value: 'Wooden double leaf door', label: 'Door-DOJO room area main entry', path: '/wooden_double_leaf_door_2_q' },
      { value: 'Metal single leaf door', label: 'Door-UTM Office entry', path: '/metal_single_leaf_door_1_q' },
      { value: 'Wooden single leaf door', label: 'Door-UTM Office inside', path: '/wooden_single_leaf_door_1_q' },
      { value: 'Wooden single leaf door', label: 'Door-UTM Office inside-Record room', path: '/wooden_single_leaf_door_2_q' },
      { value: 'Wooden double leaf door', label: 'Door-UTM Office inside-Panel room', path: '/wooden_double_leaf_door_3_q' },
      { value: 'Wooden single leaf door', label: 'Door-DOJO room-towards stair case', path: '/wooden_single_leaf_door_3_q' },
      { value: 'Metal single leaf door', label: 'Door-DOJO room-towards stair case', path: '/metal_single_leaf_door_2_q' },
      { value: 'Metal double leaf door', label: 'Door-Mechanical area entry', path: '/metal_double_leaf_door_1_q' },
      { value: 'Metal double leaf door', label: 'Door-CMM area entry', path: '/metal_double_leaf_door_2_q' },
      { value: 'Glass single leaf door', label: 'Door-CMM area entry', path: '/glass_single_leaf_door_1_q' },
      { value: 'Glass double leaf door', label: 'Door-QA lab entry-Glass double leaf door-1 & 2', path: '/glass_double_leaf_door_2_q' },
      { value: 'Glass double leaf door', label: 'Door-QA lab-Entry to NOX QA room', path: '/glass_double_leaf_door_3_q' },
      { value: 'Glass single leaf door', label: 'Door-Ware house area-Inward cabin', path: '/glass_single_leaf_door_2_q' },
      { value: 'Glass single leaf door', label: 'Door-Ware house area-Outward cabin', path: '/glass_single_leaf_door_3_q' },
      { value: 'Wooden single leaf door', label: 'Door-Ware house area-washroom-G', path: '/wooden_single_leaf_door_4_q' },
      { value: 'Wooden single leaf door', label: 'Door-Ware house area-washroom-L', path: '/wooden_single_leaf_door_5_q' },
      { value: 'Wooden single leaf door', label: 'Door-Ware house area-Driver wash room', path: '/wooden_single_leaf_door_6_q' },
      { value: 'Glass double leaf door', label: 'Door-Electronic area-Office-Mechanical tool room entry-Glass double leaf door', path: '/glass_double_leaf_door_4_q' },
      { value: 'Metal double leaf door', label: 'Door-WRC room-Metal double leaf door', path: '/metal_double_leaf_door_3_q' },
      { value: 'Metal double leaf door', label: 'Door-Chemical room-Metal double leaf door', path: '/metal_double_leaf_door_4_q' },
      { value: 'Wooden single leaf door', label: 'Door-STP-Wooden single leaf door', path: '/wooden_single_leaf_door_7_q' },
      { value: 'Wooden single leaf door', label: 'Door-Main gate security cabin- wooden single leaf door', path: '/wooden_single_leaf_door_8_q' },
      { value: 'Wooden single leaf door', label: 'Door-Main gate-Driver wash room-wooden single leaf door-1 & 2', path: '/wooden_single_leaf_door_9_q' },

      { value: 'Glass double leaf door', label: 'Door- Employee entry,Nr Mechanical Change Room - Glass double leaf door', path: '/glass_double_leaf_door_5_q' },
      { value: 'Glass double leaf door', label: 'Door-Glass double leaf- Admin office', path: '/glass_double_leaf_door_6_q' },
      
      { value: 'Glass single leaf door', label: 'Door-Glass single leaf- Admin office', path: '/glass_single_leaf_door_4_q' },

      { value: 'Wooden double leaf door', label: 'Door-Wooden double leaf- Admin office', path: '/wooden_double_leaf_door_4_q' },
      { value: 'Wooden single leaf door', label: 'Door-Wooden single leaf- Admin office', path: '/wooden_single_leaf_door_10_q' },

      { value: 'FRP Door-1', label: 'FRP Door-Electronic production area-wash room-G', path: '/frp_door_1_q' },
      { value: 'FRP Door-2', label: 'FRP Door-Electronic production area-wash room-L', path: '/frp_door_2_q' },
      { value: 'FRP Door-3', label: 'FRP Door-Electronic change room-wash room-G', path: '/frp_door_3_q' },
      { value: 'FRP Door-4', label: 'FRP Door-Electronic change room-wash room-L', path: '/frp_door_4_q' },
      { value: 'FRP Door-5', label: 'FRP Door-Ware house-wash room-G', path: '/frp_door_5_q' },
      { value: 'FRP Door-6', label: 'FRP Door-Ware house-wash room-L', path: '/frp_door_6_q' },
      { value: 'FRP Door-7', label: 'FRP Door-Mechanical production area-wash room-G', path: '/frp_door_7_q' },
      { value: 'FRP Door-8', label: 'FRP Door-Mechanical production area-wash room-L', path: '/frp_door_8_q' },
      { value: 'FRP Door-9', label: 'FRP Door-Mechanical change room-wash room-G', path: '/frp_door_9_q' },
      { value: 'FRP Door-10', label: 'FRP Door-Mechanical change room-wash room-L', path: '/frp_door_10_q' },
      { value: 'FRP Door-11', label: 'FRP door-Ware house-Dock yard-Driver wash room', path: '/frp_door_11_q' },
      { value: 'FRP Door-12', label: 'FRP door-Ware house-1st floor-wash room-L', path: '/frp_door_12_q' },
      { value: 'FRP Door-13', label: 'FRP door-Ware house-1st floor-wash room-G', path: '/frp_door_13_q' },
      { value: 'FRP Door-14', label: 'FRP door- Male washroom-Admin office', path: '/frp_door_14_q' },
      { value: 'FRP Door-15', label: 'FRP door- Female washroom-Admin office', path: '/frp_door_15_q' },
    
      { value: 'Garden Pump', label: 'Garden Pump', path: '/garden_pump_1_q' },

      { value: 'STP Pump-1', label: 'STP Pump-1', path: '/stp_pump_1_q' },
      { value: 'STP Pump-2', label: 'STP Pump-2', path: '/stp_pump_2_q' },

      { value: 'STP Pump Motor-1', label: 'STP Pump Motor-1', path: '/stp_pump_motor_1_q' },
      { value: 'STP Pump Motor-2', label: 'STP Pump Motor-2', path: '/stp_pump_motor_2_q' },
      { value: 'STP Ring Blower-1', label: 'STP Ring Blower-1', path: '/stp_ring_blower_1_q' },

      { value: 'STP Ring Blower-2', label: 'STP Ring Blower-2', path: '/stp_ring_blower_2_q' },
      { value: 'STP Ring Blower-3', label: 'STP Ring Blower-3', path: '/stp_ring_blower_3_q' },
      { value: 'STP Ring Blower-4', label: 'STP Ring Blower-4', path: '/stp_ring_blower_4_q' },

      { value: 'Panel-1 (Water cooled chiller)', label: 'Panel-1 (Water cooled chiller)', path: '/panel_1_q' },
      { value: 'Panel-2 (Water cooled chiller)', label: 'Panel-2 (Water cooled chiller)', path: '/panel_2_q' },
      { value: 'Panel-3 (Air cooled chiller)', label: 'Panel-3 (Air cooled chiller)', path: '/panel_3_q' },
      { value: 'Panel-4 (Water cool chiller)', label: 'Panel-4 (Water cool chiller)', path: '/panel_4_q' },
      { value: 'Panel-5 (Air compressor)', label: 'Panel-5 (Air compressor)', path: '/panel_5_q' },
      { value: 'Panel-6 (STP Plant)', label: 'Panel-6 (STP Plant)', path: '/panel_6_q' },
      { value: 'Panel-7 (Softner PHE)', label: 'Panel-7 (Softner PHE)', path: '/panel_7_q' },
      { value: 'Panel-8 (Fire Hydrant system)', label: 'Panel-8 (Fire Hydrant system)', path: '/panel_8_q' },
      { value: 'Panel-9 (Ware house)', label: 'Panel-9 (Ware house)', path: '/panel_9_q' },
      { value: 'Panel-10 (Ware house FAF)', label: 'Panel-10 (Ware house FAF)', path: '/panel_10_q' },
      { value: 'Panel-11 (L1 AHU Main panel)', label: 'Panel-11 (L1 AHU Main panel)', path: '/panel_11_q' },
      { value: 'Panel-12 (L1 AHU No. 94)', label: 'Panel-12 (L1 AHU No. 94)', path: '/panel_12_q' },
      { value: 'Panel-13 (L1 AHU No. 95)', label: 'Panel-13 (L1 AHU No. 95)', path: '/panel_13_q' },
      { value: 'Panel-14 (L1 AHU No. 96)', label: 'Panel-14 (L1 AHU No. 96)', path: '/panel_14_q' },
      { value: 'Panel-15 (L1 AHU No. 97)', label: 'Panel-15 (L1 AHU No. 97)', path: '/panel_15_q' },
      { value: 'Panel-16 (L1 AHU No. 98)', label: 'Panel-16 (L1 AHU No. 98)', path: '/panel_16_q' },
      { value: 'Panel-17 (L1 AHU No. 99)', label: 'Panel-17 (L1 AHU No. 99)', path: '/panel_17_q' },
      { value: 'Panel-18 (L1 AHU No. 100)', label: 'Panel-18 (L1 AHU No. 100)', path: '/panel_18_q' },
      { value: 'Panel-19 (L2 AHU Main panel)', label: 'Panel-19 (L2 AHU Main panel)', path: '/panel_19_q' },
      { value: 'Panel-20 (L2 AHU No. 101)', label: 'Panel-20 (L2 AHU No. 101)', path: '/panel_20_q' },
      { value: 'Panel-21 (L2 AHU No. 102)', label: 'Panel-21 (L2 AHU No. 102)', path: '/panel_21_q' },
      { value: 'Panel-22 (L2 AHU No. 103)', label: 'Panel-22 (L2 AHU No. 103)', path: '/panel_22_q' },
      { value: 'Panel-23 (L2 AHU No. 104)', label: 'Panel-23 (L2 AHU No. 104)', path: '/panel_23_q' },
      { value: 'Panel-24 (BMS Main I/P Panel)', label: 'Panel-24 (BMS Main I/P Panel)', path: '/panel_24_q' },
      { value: 'Panel-25 (UPS Input)', label: 'Panel-25 (UPS Input)', path: '/panel_25_q' },
      { value: 'Panel-26 (UPS Outgoing)', label: 'Panel-26 (UPS Outgoing)', path: '/panel_26_q' },
      { value: 'Panel-27 (BMD MLDB)', label: 'Panel-27 (BMD MLDB)', path: '/panel_27_q' },
      { value: 'Panel-28 (BMS Oxillary MLDB)', label: 'Panel-28 (BMS Oxillary MLDB)', path: '/panel_28_q' },
      { value: 'Panel-29 (BMS Oxillary EMLDB)', label: 'Panel-29 (BMS Oxillary EMLDB)', path: '/panel_29_q' },
      { value: 'Panel-30 (BMS PDB)', label: 'Panel-30 (BMS PDB)', path: '/panel_30_q' },
      { value: 'Panel-31 (40KV UPS Panel)', label: 'Panel-31 (40KV UPS Panel)', path: '/panel_31_q' },
      { value: 'Panel-31 (40KV UPS Panel)', label: 'Panel-31 (40KV UPS Panel)', path: '/panel_31_q' },
      { value: 'Panel-32 (Electronic production area-1)', label: 'Panel-32 (Electronic production area-1)', path: '/panel_32_q' },
      { value: 'Panel-33 (Electronic production area-2)', label: 'Panel-33 (Electronic production area-2)', path: '/panel_33_q' },
      { value: 'Panel-34 (Electronic production area-3)', label: 'Panel-34 (Electronic production area-3)', path: '/panel_34_q' },
      { value: 'Panel-35 (Electronic production area-4)', label: 'Panel-35 (Electronic production area-4)', path: '/panel_35_q' },
      { value: 'Panel-36 (Electronic production area-5)', label: 'Panel-36 (Electronic production area-5)', path: '/panel_36_q' },
      { value: 'Panel-37 (Electronic production area-6)', label: 'Panel-37 (Electronic production area-6)', path: '/panel_37_q' },
      { value: 'Panel-38 (Electronic production area-7)', label: 'Panel-38 (Electronic production area-7)', path: '/panel_38_q' },
      { value: 'Panel-39 (Electronic production area-8)', label: 'Panel-39 (Electronic production area-8)', path: '/panel_39_q' },
      { value: 'Panel-40 (Electronic production area-9)', label: 'Panel-40 (Electronic production area-9)', path: '/panel_40_q' },
      { value: 'Panel-41 (Electronic production area-10)', label: 'Panel-41 (Electronic production area-10)', path: '/panel_41_q' },
      { value: 'Panel-42 (Electronic production area-11)', label: 'Panel-42 (Electronic production area-11)', path: '/panel_42_q' },
      { value: 'Panel-43 (Electronic production area-12)', label: 'Panel-43 (Electronic production area-12)', path: '/panel_43_q' },
      { value: 'Panel-44 (Electronic production area-13)', label: 'Panel-44 (Electronic production area-13)', path: '/panel_44_q' },
      { value: 'Panel-45 (Electronic production area-14)', label: 'Panel-45 (Electronic production area-14)', path: '/panel_45_q' },
      { value: 'Panel-46 (Electronic production area-15)', label: 'Panel-46 (Electronic production area-15)', path: '/panel_46_q' },
      { value: 'Panel-47 (Electronic production area-16)', label: 'Panel-47 (Electronic production area-16)', path: '/panel_47_q' },
      { value: 'Panel-48 (Electronic production area-17)', label: 'Panel-48 (Electronic production area-18)', path: '/panel_48_q' },

      { value: 'Nitrogen yard', label: 'Nitrogen yard', path: '/nitrogen_yard_1_q' }
      
    ], []);
      
      const [selectedQuarterlyOption, setSelectedQuarterlyOption] = useState(null);
      const handleQuarterlyChange = (option) => {
        setSelectedQuarterlyOption(option);
        if (option && option.path) {
          navigate(option.path);
        }
      };


      const TimeBasedOptions = useMemo(() => [
        { value: 'Air Compressor-1 (1653CFM/S ZR 275) ', label: 'Air Compressor-1 (1653CFM/S ZR 275) ', path: '/air_compressor_1_tb' },
        { value: 'Air Compressor-2 (920 CF/ZR 160 VSD)', label: 'Air Compressor-2 (920 CF/ZR 160 VSD)', path: '/air_compressor_2_tb' },

        { value: 'D.G.-1- 1010 KVA ESN NO.- 25451153', label: 'D.G.-1- 1010 KVA ESN NO.- 25451153', path: '/dg_1010_1_tb' },
        { value: 'D.G.-2- 500 KVA ESN NO- 25309737', label: 'D.G.-2- 500 KVA ESN NO- 25309737', path: '/dg_500_1_tb' },
        { value: 'D.G.-3- 1010 KVA ESN NO.- 25431786', label: 'D.G.-3- 1010 KVA ESN NO.- 25431786', path: '/dg_1010_2_tb' },
        { value: 'D.G.-4- 1010 KVA ESN NO.- 25366157', label: 'D.G.-4- 1010 KVA ESN NO.- 25366157', path: '/dg_1010_3_tb' },
        { value: 'D.G.-5- 500 KVA ESN NO- 25334984', label: 'D.G.-5- 500 KVA ESN NO- 25334984', path: '/dg_500_2_tb' },

        { value: 'Water cooled Chiller Unit 1', label: 'Water cooled Chiller Unit 1', path: '/water_chiller_1_tb' },
        { value: 'Water cooled Chiller Unit 2', label: 'Water cooled Chiller Unit 2', path: '/water_chiller_2_tb' },

        { value: 'Air Dryer-1 ( FD1500VSD+)', label: 'Air Dryer-1 ( FD1500VSD+)', path: '/air_dryer_1_tb' },
        { value: 'Air Dryer-2 ( FD1500VSD+)', label: 'Air Dryer-2 ( FD1500VSD+)', path: '/air_dryer_2_tb' },

        { value: 'Fire House - Diesel Pump', label: 'Fire House - Diesel Pump', path: '/diesel_pump_1_tb' },
      ], []);
      
      const [selectedTimeBasedOption, setSelectedTimeBasedOption] = useState(null);
      const handleTimeBasedChange = (option) => {
        setSelectedTimeBasedOption(option);
        if (option && option.path) {
          navigate(option.path);
        }
      };


      const [submissionStatuses, setSubmissionStatuses] = useState({});

      // Fetch submission status for all options
      useEffect(() => {
          const fetchSubmissionStatus = async () => {
              const statuses = {};
              for (const option of DailyOptions) {
                  try {
                      const response = await axios.get(`https://scheq.in/api${option.path}/status`);
                      statuses[option.value] = response.data.submittedToday;
                      console.log(`Fetched status for ${option.label}:`, response.data.submittedToday); // Debugging line
                  } catch (error) {
                      console.error(`Error fetching status for ${option.label}:`, error);
                      statuses[option.value] = false; // Assume not submitted on error
                  }
              }
              setSubmissionStatuses(statuses);
              console.log('Updated submission statuses:', statuses); // Debugging line
          };
      
          fetchSubmissionStatus();
      }, [DailyOptions]);

            
    // Function to determine the color based on submission status
    const getLabelColor = (value) => {
      // Debugging line to check status value
      console.log(`Getting label color for ${value}:`, submissionStatuses[value]);
      return submissionStatuses[value] ? 'text-green-600' : 'text-red-600';
    };

    // Map options with dynamic label styles
    const formattedOptions = DailyOptions.map(option => ({
      ...option,
      label: (
          <span className={getLabelColor(option.value)}>
              {option.label}
          </span>
      ),
    }));



      const [submissionStatuses1, setSubmissionStatuses1] = useState({});

      // Fetch submission status for all options
      useEffect(() => {
          const fetchSubmissionStatus = async () => {
              const statuses = {};
              for (const option of MonthlyOptions) {
                  try {
                      const response = await axios.get(`https://scheq.in/api${option.path}/status`);
                      statuses[option.value] = response.data.submittedThisMonth;
                      console.log(`Fetched status for ${option.label}:`, response.data.submittedThisMonth); // Debugging line
                  } catch (error) {
                      console.error(`Error fetching status for ${option.label}:`, error);
                      statuses[option.value] = false; // Assume not submitted on error
                  }
              }
              setSubmissionStatuses1(statuses);
              console.log('Updated submission statuses:', statuses); // Debugging line
          };
      
          fetchSubmissionStatus();
      }, [MonthlyOptions]);

            
    // Function to determine the color based on submission status
    const getLabelColor1 = (value) => {
      // Debugging line to check status value
      console.log(`Getting label color for ${value}:`, submissionStatuses1[value]);
      return submissionStatuses1[value] ? 'text-green-600' : 'text-red-600';
    };

    // Map options with dynamic label styles
    const formattedOptions1 = MonthlyOptions.map(option => ({
      ...option,
      label: (
          <span className={getLabelColor1(option.value)}>
              {option.label}
          </span>
      ),
    }));



      const [submissionStatuses2, setSubmissionStatuses2] = useState({});

      // Fetch submission status for all options
      useEffect(() => {
          const fetchSubmissionStatus = async () => {
              const statuses = {};
              for (const option of QuarterlyOptions) {
                  try {
                      const response = await axios.get(`https://scheq.in/api${option.path}/status`);
                      statuses[option.value] = response.data.submittedThisQuarter;
                      console.log(`Fetched status for ${option.label}:`, response.data.submittedThisQuarter); // Debugging line
                  } catch (error) {
                      console.error(`Error fetching status for ${option.label}:`, error);
                      statuses[option.value] = false; // Assume not submitted on error
                  }
              }
              setSubmissionStatuses2(statuses);
              console.log('Updated submission statuses:', statuses); // Debugging line
          };
      
          fetchSubmissionStatus();
      }, [QuarterlyOptions]);

            
    // Function to determine the color based on submission status
    const getLabelColor2 = (value) => {
      // Debugging line to check status value
      console.log(`Getting label color for ${value}:`, submissionStatuses2[value]);
      return submissionStatuses2[value] ? 'text-green-600' : 'text-red-600';
    };

    // Map options with dynamic label styles
    const formattedOptions2 = QuarterlyOptions.map(option => ({
      ...option,
      label: (
          <span className={getLabelColor2(option.value)}>
              {option.label}
          </span>
      ),
    }));


      const [submissionStatuses3, setSubmissionStatuses3] = useState({});

      // Fetch submission status for all options
      useEffect(() => {
          const fetchSubmissionStatus = async () => {
              const statuses = {};
              for (const option of TimeBasedOptions) {
                  try {
                      const response = await axios.get(`https://scheq.in/api${option.path}/status`);
                      statuses[option.value] = response.data.submittedThisQuarter;
                      console.log(`Fetched status for ${option.label}:`, response.data.submittedThisQuarter); // Debugging line
                  } catch (error) {
                      console.error(`Error fetching status for ${option.label}:`, error);
                      statuses[option.value] = false; // Assume not submitted on error
                  }
              }
              setSubmissionStatuses3(statuses);
              console.log('Updated submission statuses:', statuses); // Debugging line
          };
      
          fetchSubmissionStatus();
      }, [TimeBasedOptions]);

            
    // Function to determine the color based on submission status
    const getLabelColor3 = (value) => {
      // Debugging line to check status value
      console.log(`Getting label color for ${value}:`, submissionStatuses3[value]);
      return submissionStatuses3[value] ? 'text-green-600' : 'text-red-600';
    };

    // Map options with dynamic label styles
    const formattedOptions3 = TimeBasedOptions.map(option => ({
      ...option,
      label: (
          <span className={getLabelColor3(option.value)}>
              {option.label}
          </span>
      ),
    }));


    const [selectedDailyOption, setSelectedDailyOption] = useState(null);
    const handleDailyChange = (option) => {
      setSelectedDailyOption(option);
      if (option && option.path) {
        navigate(option.path);
      }
    };

    const [selectedMonthlyOption, setSelectedMonthlyOption] = useState(null);
    const handleMonthlyChange = (option) => {
      setSelectedMonthlyOption(option);
      if (option && option.path) {
        navigate(option.path);
      }
    };
      

    const [DailyDropdown, setShowDailyDropdown] = useState(true);
    const [MonthlyDropdown, setShowMonthlyDropdown] = useState(false);
    const [QuarterlyDropdown, setShowQuarterlyDropdown] = useState(false);
    const [TimeBasedDropdown, setShowTimeBasedDropdown] = useState(false);

    const [isDailyClicked, setIsDailyClicked] = useState(true);
    const [isMonthlyClicked, setIsMonthlyClicked] = useState(false);
    const [isQuarterlyClicked, setIsQuarterlyClicked] = useState(false);
    const [isTimeBasedClicked, setIsTimeBasedClicked] = useState(false);

    const toggleDailyDropdown = (e) => {
        e.preventDefault();
        setShowDailyDropdown(!DailyDropdown);
        setIsDailyClicked(!isDailyClicked);
        setShowMonthlyDropdown(false);
        setIsMonthlyClicked(false);
        setShowQuarterlyDropdown(false);
        setIsQuarterlyClicked(false);
        setShowTimeBasedDropdown(false);
        setIsTimeBasedClicked(false);
    };

    const toggleMonthlyDropdown = (e) => {
        e.preventDefault();
        setShowMonthlyDropdown(!MonthlyDropdown);
        setIsMonthlyClicked(!isMonthlyClicked);
        setShowDailyDropdown(false);
        setIsDailyClicked(false);
        setShowQuarterlyDropdown(false);
        setIsQuarterlyClicked(false);
        setShowTimeBasedDropdown(false);
        setIsTimeBasedClicked(false);
    };

    const toggleQuarterlyDropdown = (e) => {
        e.preventDefault();
        setShowQuarterlyDropdown(!QuarterlyDropdown);
        setIsQuarterlyClicked(!isQuarterlyClicked);
        setShowMonthlyDropdown(false);
        setIsMonthlyClicked(false);
        setShowDailyDropdown(false);
        setIsDailyClicked(false);
        setShowTimeBasedDropdown(false);
        setIsTimeBasedClicked(false);
    };

    const toggleTimeBasedDropdown = (e) => {
        e.preventDefault();
        setShowTimeBasedDropdown(!TimeBasedDropdown);
        setIsTimeBasedClicked(!isTimeBasedClicked);
        setShowMonthlyDropdown(false);
        setIsMonthlyClicked(false);
        setShowDailyDropdown(false);
        setIsDailyClicked(false);
        setShowQuarterlyDropdown(false);
        setIsQuarterlyClicked(false);
    };

    const toggleBreakdown = (e) => {
      e.preventDefault();
      navigate('/4/breakdown')
    };

    const sendEmail = (e) => {
        e.preventDefault();
        window.location.href = 'mailto:operations@webinn.ltd?subject=Contact%20Us&body=Hello%2C%0D%0A%0D%0A';
    };

    const Logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        enqueueSnackbar('Successfully Logged out!', { variant: 'success' });
        navigate('/login');
    };

    return (
        <>
            <div className='flex m-2 fixed'>
                <div className='w-1/5'>
                    <img className='w-10/12' src={vitesco} alt="" />
                </div>
                <div className='flex w-full text-center m-4 bg-green-700 rounded-xl shadow-lg shadow-gray-700 ml-6 overflow-hidden'>
                    <div className='w-full'>
                        <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>Checksheets &nbsp;&nbsp; VT1014532-F10</h1>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <div className='bg-gray-900 w-fit m-3 rounded-xl p-2 shadow-lg shadow-gray-700 text-white overflow-hidden fixed'>
                <h1 onClick={toggleDailyDropdown} className={`p-2 cursor-pointer shadow-md rounded-lg my-1 ${isDailyClicked ? 'bg-green-700 ' : 'hover:bg-green-700 '}`}>Daily Checksheet</h1>
                <h1 onClick={toggleMonthlyDropdown} className={`p-2 cursor-pointer shadow-md rounded-lg my-1 ${isMonthlyClicked ? 'bg-green-700 ' : 'hover:bg-green-700 '}`}>Monthly Checksheet</h1>
                <h1 onClick={toggleQuarterlyDropdown} className={`p-2 cursor-pointer shadow-md rounded-lg my-1 ${isQuarterlyClicked ? 'bg-green-700 ' : 'hover:bg-green-700 '}`}>Quarterly Checksheet</h1>
                <h1 onClick={toggleTimeBasedDropdown} className={`p-2 cursor-pointer shadow-md rounded-lg my-1 ${isTimeBasedClicked ? 'bg-green-700 ' : 'hover:bg-green-700 '}`}>Time-Based Checksheet</h1>
                <h1 onClick={toggleBreakdown} className="p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700">Report Breakdown</h1><br />
                <h1 onClick={sendEmail} className='p-2 my-1 cursor-pointer shadow-md hover:bg-gray-700 hover:text-green-400 rounded-lg'>Contact us</h1>
                <h1 onClick={Logout} className='p-2 my-1 cursor-pointer hover:bg-gray-700 shadow-md hover:text-green-400 rounded-lg'>Logout</h1>
            </div>

            {DailyDropdown && (
                <>
                  <div className="text-center mt-12">
                        <div className="text-center mt-12">
                          <h1>Select Daily Checksheet:</h1>
                          <Select options={formattedOptions} value={selectedDailyOption} onChange={handleDailyChange} placeholder="Select an option or search for something" isSearchable className="w-2/5 mx-auto outline-none shadow-md"/>
                        </div>
                    </div>
                </>
            )}

            {MonthlyDropdown && (
                <>
                    <div className="text-center mt-12">
                        <div className="text-center mt-12">
                          <h1>Select Monthly Checksheet:</h1>
                          <Select options={formattedOptions1} value={selectedMonthlyOption} onChange={handleMonthlyChange} placeholder="Select an option or search for something" isSearchable className="w-2/5 mx-auto outline-none shadow-md"/>
                        </div>
                    </div>
                </>
            )}

            {QuarterlyDropdown && (
                <>
                <div className="text-center mt-12">
                    <div className="text-center mt-12">
                      <h1>Select Quarterly Checksheet:</h1>
                      <Select options={formattedOptions2} value={selectedQuarterlyOption} onChange={handleQuarterlyChange} placeholder="Select an option or search for something" isSearchable className="w-2/5 mx-auto outline-none shadow-md"/>
                    </div>
                </div>
            </>
            )}

            {TimeBasedDropdown && (
                <>
                    <div className="text-center mt-12">
                        <div className="text-center mt-12">
                          <h1>Select Time-Based Checksheet:</h1>
                          <Select options={formattedOptions3} value={selectedTimeBasedOption} onChange={handleTimeBasedChange} placeholder="Select an option or search for something" isSearchable className="w-2/5 mx-auto outline-none shadow-md"/>
                        </div>
                    </div>
                </>
            )}
        </>
    )
};

export default Dashboard4;
