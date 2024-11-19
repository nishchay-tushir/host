import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AdminDashboard from './components/Pages/Admin/AdminDashboard';
import Login from './components/Pages/Login';

import Dashboard1 from './components/Pages/L1/Dashboard1';
import Dashboard2 from './components/Pages/L2/Dashboard2';
import Dashboard3 from './components/Pages/L3/Dashboard3';
import Dashboard4 from './components/Pages/L4/Dashboard4';

//Breakdown
import Breakdown from './components/Pages/L4/Breakdown/Breakdown';

// Daily Checksheets
import DG5001d from './components/Pages/L4/dailyForms/DG5001d';
import DG5002d from './components/Pages/L4/dailyForms/DG5002d';
import DG5003d from './components/Pages/L4/dailyForms/DG5003d';
import DG10101d from './components/Pages/L4/dailyForms/DG10101d';
import DG10102d from './components/Pages/L4/dailyForms/DG10102d';
import DG10103d from './components/Pages/L4/dailyForms/DG10103d';
import DG10104d from './components/Pages/L4/dailyForms/DG10104d';

import VCB1d from './components/Pages/L4/dailyForms/VCB1d';
import VCB2d from './components/Pages/L4/dailyForms/VCB2d';
import VCB3d from './components/Pages/L4/dailyForms/VCB3d';
import VCB4d from './components/Pages/L4/dailyForms/VCB4d';
import VCB5d from './components/Pages/L4/dailyForms/VCB5d';
import VCB6d from './components/Pages/L4/dailyForms/VCB6d';
import VCB7d from './components/Pages/L4/dailyForms/VCB7d';
import VCB8d from './components/Pages/L4/dailyForms/VCB8d';
import VCB9d from './components/Pages/L4/dailyForms/VCB9d';
import VCB10d from './components/Pages/L4/dailyForms/VCB10d';

import Transformer1d from './components/Pages/L4/dailyForms/Transformer1d';
import Transformer2d from './components/Pages/L4/dailyForms/Transformer2d';
import Transformer3d from './components/Pages/L4/dailyForms/Transformer3d'; 
import Transformer4d from './components/Pages/L4/dailyForms/Transformer4d';
import Transformer5d from './components/Pages/L4/dailyForms/Transformer5d';
import Transformer6d from './components/Pages/L4/dailyForms/Transformer6d';
import Transformer7d from './components/Pages/L4/dailyForms/Transformer7d';
import Transformer8d from './components/Pages/L4/dailyForms/Transformer8d';

import HTLTpanel1d from './components/Pages/L4/dailyForms/HTLTpanel1d';
import HTLTpanel2d from './components/Pages/L4/dailyForms/HTLTpanel2d';
import HTLTpanel3d from './components/Pages/L4/dailyForms/HTLTpanel3d';
import HTLTpanel4d from './components/Pages/L4/dailyForms/HTLTpanel4d';
import HTLTpanel5d from './components/Pages/L4/dailyForms/HTLTpanel5d';
import HTLTpanel6d from './components/Pages/L4/dailyForms/HTLTpanel6d';
import HTLTpanel7d from './components/Pages/L4/dailyForms/HTLTpanel7d';
import HTLTpanel8d from './components/Pages/L4/dailyForms/HTLTpanel8d';
import HTLTpanel9d from './components/Pages/L4/dailyForms/HTLTpanel9d';

import FireHydrantSystem1d from './components/Pages/L4/dailyForms/FireHydrant1d';
import SoftenerUnit1d from './components/Pages/L4/dailyForms/SoftenerUnit1d';
import STP1d from './components/Pages/L4/dailyForms/STP1d';

import AirCompressor1d from './components/Pages/L4/dailyForms/AirCompressor1d';
import AirCompressor2d from './components/Pages/L4/dailyForms/AirCompressor2d';

import AirDryer1d from './components/Pages/L4/dailyForms/AirDryer1d';
import AirDryer2d from './components/Pages/L4/dailyForms/AirDryer2d';

import SwagonCompressor1d from './components/Pages/L4/dailyForms/SwagonCompressor1d';
import SwagonCompressor2d from './components/Pages/L4/dailyForms/SwagonCompressor2d';
import SwagonCompressor3d from './components/Pages/L4/dailyForms/SwagonCompressor3d';
import SwagonCompressor4d from './components/Pages/L4/dailyForms/SwagonCompressor4d';

import WaterChiller1d from './components/Pages/L4/dailyForms/WaterChiller1d';
import WaterChiller2d from './components/Pages/L4/dailyForms/WaterChiller2d';

import AirChiller1d from './components/Pages/L4/dailyForms/AirChiller1d';
import AirChiller2d from './components/Pages/L4/dailyForms/AirChiller2d';

import CoolingTower1d from './components/Pages/L4/dailyForms/CoolingTower1d';
import CoolingTower2d from './components/Pages/L4/dailyForms/CoolingTower2d';

import AHU1d from './components/Pages/L4/dailyForms/AHU1d';
import AHU2d from './components/Pages/L4/dailyForms/AHU2d';
import AHU3d from './components/Pages/L4/dailyForms/AHU3d';
import AHU4d from './components/Pages/L4/dailyForms/AHU4d';
import AHU5d from './components/Pages/L4/dailyForms/AHU5d';
import AHU6d from './components/Pages/L4/dailyForms/AHU6d';
import AHU7d from './components/Pages/L4/dailyForms/AHU7d';
import AHU8d from './components/Pages/L4/dailyForms/AHU8d';
import AHU9d from './components/Pages/L4/dailyForms/AHU9d';
import AHU10d from './components/Pages/L4/dailyForms/AHU10d';
import AHU11d from './components/Pages/L4/dailyForms/AHU11d';
import AHU12d from './components/Pages/L4/dailyForms/AHU12d';
import AHU13d from './components/Pages/L4/dailyForms/AHU13d';
import AHU14d from './components/Pages/L4/dailyForms/AHU14d';

import UPS1d from './components/Pages/L4/dailyForms/UPS1d';
import UPS2d from './components/Pages/L4/dailyForms/UPS2d';
import UPS3d from './components/Pages/L4/dailyForms/UPS3d';
import UPS4d from './components/Pages/L4/dailyForms/UPS4d';
import UPS5d from './components/Pages/L4/dailyForms/UPS5d';
import UPS6d from './components/Pages/L4/dailyForms/UPS6d';

import AirReservoirTank1d from './components/Pages/L4/dailyForms/AirReservoirTank1d';
import AirReservoirTank2d from './components/Pages/L4/dailyForms/AirReservoirTank2d';

import SwizerLift1d from './components/Pages/L4/dailyForms/SwizerLift1d';
import CassetteAC1d from './components/Pages/L4/dailyForms/CassetteAC1d';
import SplitAC1d from './components/Pages/L4/dailyForms/SplitAC1d';
import Stacker1d from './components/Pages/L4/dailyForms/Stacker1d';
import FirePumpHouse1d from './components/Pages/L4/dailyForms/FirePumpHouse1d';
import BMS1d from './components/Pages/L4/dailyForms/BMS1d';
import StreetLights1d from './components/Pages/L4/dailyForms/StreetLights1d';
import ShopFloorLights1d from './components/Pages/L4/dailyForms/ShopFloorLights1d';
import RapidSlidingShutter1d from './components/Pages/L4/dailyForms/RapidSlidingShutter1d';
import RapidRollingShutter1d from './components/Pages/L4/dailyForms/RapidRollingShutter1d';
import RollingShutter1d from './components/Pages/L4/dailyForms/RollingShutter1d';
import MotorisedSlidingGate1d from './components/Pages/L4/dailyForms/MotorisedSlidingGate1d';
import ELDBpanel1d from './components/Pages/L4/dailyForms/ELDBpanel1d';
import PDBpanel1d from './components/Pages/L4/dailyForms/PDBpanel1d';
import LDBpanel1d from './components/Pages/L4/dailyForms/LDBpanel1d';
import UPSDBpanel1d from './components/Pages/L4/dailyForms/UPSDBpanel1d';
import DDCpanel1d from './components/Pages/L4/dailyForms/DDCpanel1d';
import FireExtinguisher1d from './components/Pages/L4/dailyForms/FireExtinguisher1d';
import NitrogenYard1d from './components/Pages/L4/dailyForms/NitrogenYard1d';
import WRCroomAHU1d from './components/Pages/L4/dailyForms/WRCroomAHU1d';

import Panel1d from './components/Pages/L4/dailyForms/Panel1d';
import Panel2d from './components/Pages/L4/dailyForms/Panel2d';
import Panel3d from './components/Pages/L4/dailyForms/Panel3d';
import Panel4d from './components/Pages/L4/dailyForms/Panel4d';
import Panel5d from './components/Pages/L4/dailyForms/Panel5d';
import Panel6d from './components/Pages/L4/dailyForms/Panel6d';
import Panel7d from './components/Pages/L4/dailyForms/Panel7d';
import Panel8d from './components/Pages/L4/dailyForms/Panel8d';
import Panel9d from './components/Pages/L4/dailyForms/Panel9d';
import Panel10d from './components/Pages/L4/dailyForms/Panel10d';
import Panel11d from './components/Pages/L4/dailyForms/Panel11d';
import Panel12d from './components/Pages/L4/dailyForms/Panel12d';
import Panel13d from './components/Pages/L4/dailyForms/Panel13d';
import Panel14d from './components/Pages/L4/dailyForms/Panel14d';
import Panel15d from './components/Pages/L4/dailyForms/Panel15d';
import Panel16d from './components/Pages/L4/dailyForms/Panel16d';
import Panel17d from './components/Pages/L4/dailyForms/Panel17d';
import Panel18d from './components/Pages/L4/dailyForms/Panel18d';
import Panel19d from './components/Pages/L4/dailyForms/Panel19d';
import Panel20d from './components/Pages/L4/dailyForms/Panel20d';
import Panel21d from './components/Pages/L4/dailyForms/Panel21d';
import Panel22d from './components/Pages/L4/dailyForms/Panel22d';
import Panel23d from './components/Pages/L4/dailyForms/Panel23d';
import Panel24d from './components/Pages/L4/dailyForms/Panel24d';
import Panel25d from './components/Pages/L4/dailyForms/Panel25d';
import Panel26d from './components/Pages/L4/dailyForms/Panel26d';
import Panel27d from './components/Pages/L4/dailyForms/Panel27d';
import Panel28d from './components/Pages/L4/dailyForms/Panel28d';
import Panel29d from './components/Pages/L4/dailyForms/Panel29d';
import Panel30d from './components/Pages/L4/dailyForms/Panel30d';
import Panel31d from './components/Pages/L4/dailyForms/Panel31d';
import Panel32d from './components/Pages/L4/dailyForms/Panel32d';
import Panel33d from './components/Pages/L4/dailyForms/Panel33d';
import Panel34d from './components/Pages/L4/dailyForms/Panel34d';
import Panel35d from './components/Pages/L4/dailyForms/Panel35d';
import Panel36d from './components/Pages/L4/dailyForms/Panel36d';

import ACB1d from './components/Pages/L4/dailyForms/ACB1d';
import ACB2d from './components/Pages/L4/dailyForms/ACB2d';
import ACB3d from './components/Pages/L4/dailyForms/ACB3d';
import ACB4d from './components/Pages/L4/dailyForms/ACB4d';
import ACB5d from './components/Pages/L4/dailyForms/ACB5d';
import ACB6d from './components/Pages/L4/dailyForms/ACB6d';
import ACB7d from './components/Pages/L4/dailyForms/ACB7d';
import ACB8d from './components/Pages/L4/dailyForms/ACB8d';
import ACB9d from './components/Pages/L4/dailyForms/ACB9d';
import ACB10d from './components/Pages/L4/dailyForms/ACB10d';
import ACB11d from './components/Pages/L4/dailyForms/ACB11d';
import ACB12d from './components/Pages/L4/dailyForms/ACB12d';
import ACB13d from './components/Pages/L4/dailyForms/ACB13d';
import ACB14d from './components/Pages/L4/dailyForms/ACB14d';
import ACB15d from './components/Pages/L4/dailyForms/ACB15d';
import ACB16d from './components/Pages/L4/dailyForms/ACB16d';
import ACB17d from './components/Pages/L4/dailyForms/ACB17d';
import ACB18d from './components/Pages/L4/dailyForms/ACB18d';
import ACB19d from './components/Pages/L4/dailyForms/ACB19d';
import ACB20d from './components/Pages/L4/dailyForms/ACB20d';
import ACB21d from './components/Pages/L4/dailyForms/ACB21d';
import ACB22d from './components/Pages/L4/dailyForms/ACB22d';
import ACB23d from './components/Pages/L4/dailyForms/ACB23d';
import ACB24d from './components/Pages/L4/dailyForms/ACB24d';
import ACB25d from './components/Pages/L4/dailyForms/ACB25d';
import ACB26d from './components/Pages/L4/dailyForms/ACB26d';
import ACB27d from './components/Pages/L4/dailyForms/ACB27d';
import ACB28d from './components/Pages/L4/dailyForms/ACB28d';
import ACB29d from './components/Pages/L4/dailyForms/ACB29d';
import ACB30d from './components/Pages/L4/dailyForms/ACB30d';
import ACB31d from './components/Pages/L4/dailyForms/ACB31d';
import ACB32d from './components/Pages/L4/dailyForms/ACB32d';
import ACB33d from './components/Pages/L4/dailyForms/ACB33d';
import ACB34d from './components/Pages/L4/dailyForms/ACB34d';
import ACB35d from './components/Pages/L4/dailyForms/ACB35d';
import ACB36d from './components/Pages/L4/dailyForms/ACB36d';
import ACB37d from './components/Pages/L4/dailyForms/ACB37d';
import ACB38d from './components/Pages/L4/dailyForms/ACB38d';
import ACB39d from './components/Pages/L4/dailyForms/ACB39d';
import ACB40d from './components/Pages/L4/dailyForms/ACB40d';
import ACB41d from './components/Pages/L4/dailyForms/ACB41d';
import ACB42d from './components/Pages/L4/dailyForms/ACB42d';
import ACB43d from './components/Pages/L4/dailyForms/ACB43d';
import ACB44d from './components/Pages/L4/dailyForms/ACB44d';
import ACB45d from './components/Pages/L4/dailyForms/ACB45d';
import ACB46d from './components/Pages/L4/dailyForms/ACB46d';
import ACB47d from './components/Pages/L4/dailyForms/ACB47d';
import ACB48d from './components/Pages/L4/dailyForms/ACB48d';
import ACB49d from './components/Pages/L4/dailyForms/ACB49d';
import ACB50d from './components/Pages/L4/dailyForms/ACB50d';
import ACB51d from './components/Pages/L4/dailyForms/ACB51d';
import ACB52d from './components/Pages/L4/dailyForms/ACB52d';
import ACB53d from './components/Pages/L4/dailyForms/ACB53d';
import ACB54d from './components/Pages/L4/dailyForms/ACB54d';
import ACB55d from './components/Pages/L4/dailyForms/ACB55d';
import ACB56d from './components/Pages/L4/dailyForms/ACB56d';
import ACB57d from './components/Pages/L4/dailyForms/ACB57d';
import ACB58d from './components/Pages/L4/dailyForms/ACB58d';
import ACB59d from './components/Pages/L4/dailyForms/ACB59d';
import ACB60d from './components/Pages/L4/dailyForms/ACB60d';




//Monthly Checksheets
import FireExtinguisher1m from './components/Pages/L4/MonthlyForms/FireExtinguisher1m';
import FireExtinguisher2m from './components/Pages/L4/MonthlyForms/FireExtinguisher2m';
import FireExtinguisher3m from './components/Pages/L4/MonthlyForms/FireExtinguisher3m';
import FireExtinguisher4m from './components/Pages/L4/MonthlyForms/FireExtinguisher4m';
import FireExtinguisher5m from './components/Pages/L4/MonthlyForms/FireExtinguisher5m';
import FireExtinguisher6m from './components/Pages/L4/MonthlyForms/FireExtinguisher6m';
import FireExtinguisher7m from './components/Pages/L4/MonthlyForms/FireExtinguisher7m';
import FireExtinguisher8m from './components/Pages/L4/MonthlyForms/FireExtinguisher8m';
import FireExtinguisher9m from './components/Pages/L4/MonthlyForms/FireExtinguisher9m';
import FireExtinguisher10m from './components/Pages/L4/MonthlyForms/FireExtinguisher10m';
import FireExtinguisher11m from './components/Pages/L4/MonthlyForms/FireExtinguisher11m';
import FireExtinguisher12m from './components/Pages/L4/MonthlyForms/FireExtinguisher12m';
import FireExtinguisher13m from './components/Pages/L4/MonthlyForms/FireExtinguisher13m';
import FireExtinguisher14m from './components/Pages/L4/MonthlyForms/FireExtinguisher14m';
import FireExtinguisher15m from './components/Pages/L4/MonthlyForms/FireExtinguisher15m';
import FireExtinguisher16m from './components/Pages/L4/MonthlyForms/FireExtinguisher16m';
import FireExtinguisher17m from './components/Pages/L4/MonthlyForms/FireExtinguisher17m';
import FireExtinguisher18m from './components/Pages/L4/MonthlyForms/FireExtinguisher18m';
import FireExtinguisher19m from './components/Pages/L4/MonthlyForms/FireExtinguisher19m';
import FireExtinguisher20m from './components/Pages/L4/MonthlyForms/FireExtinguisher20m';
import FireExtinguisher21m from './components/Pages/L4/MonthlyForms/FireExtinguisher21m';
import FireExtinguisher22m from './components/Pages/L4/MonthlyForms/FireExtinguisher22m';
import FireExtinguisher23m from './components/Pages/L4/MonthlyForms/FireExtinguisher23m';
import FireExtinguisher24m from './components/Pages/L4/MonthlyForms/FireExtinguisher24m';
import FireExtinguisher25m from './components/Pages/L4/MonthlyForms/FireExtinguisher25m';
import FireExtinguisher26m from './components/Pages/L4/MonthlyForms/FireExtinguisher26m';
import FireExtinguisher27m from './components/Pages/L4/MonthlyForms/FireExtinguisher27m';
import FireExtinguisher28m from './components/Pages/L4/MonthlyForms/FireExtinguisher28m';
import FireExtinguisher29m from './components/Pages/L4/MonthlyForms/FireExtinguisher29m';
import FireExtinguisher30m from './components/Pages/L4/MonthlyForms/FireExtinguisher30m';
import FireExtinguisher31m from './components/Pages/L4/MonthlyForms/FireExtinguisher31m';
import FireExtinguisher32m from './components/Pages/L4/MonthlyForms/FireExtinguisher32m';
import FireExtinguisher33m from './components/Pages/L4/MonthlyForms/FireExtinguisher33m';
import FireExtinguisher34m from './components/Pages/L4/MonthlyForms/FireExtinguisher34m';
import FireExtinguisher35m from './components/Pages/L4/MonthlyForms/FireExtinguisher35m';
import FireExtinguisher36m from './components/Pages/L4/MonthlyForms/FireExtinguisher36m';
import FireExtinguisher37m from './components/Pages/L4/MonthlyForms/FireExtinguisher37m';
import FireExtinguisher38m from './components/Pages/L4/MonthlyForms/FireExtinguisher38m';
import FireExtinguisher39m from './components/Pages/L4/MonthlyForms/FireExtinguisher39m';
import FireExtinguisher40m from './components/Pages/L4/MonthlyForms/FireExtinguisher40m';
import FireExtinguisher41m from './components/Pages/L4/MonthlyForms/FireExtinguisher41m';
import FireExtinguisher42m from './components/Pages/L4/MonthlyForms/FireExtinguisher42m';
import FireExtinguisher43m from './components/Pages/L4/MonthlyForms/FireExtinguisher43m';
import FireExtinguisher44m from './components/Pages/L4/MonthlyForms/FireExtinguisher44m';
import FireExtinguisher45m from './components/Pages/L4/MonthlyForms/FireExtinguisher45m';
import FireExtinguisher46m from './components/Pages/L4/MonthlyForms/FireExtinguisher46m';
import FireExtinguisher47m from './components/Pages/L4/MonthlyForms/FireExtinguisher47m';
import FireExtinguisher48m from './components/Pages/L4/MonthlyForms/FireExtinguisher48m';
import FireExtinguisher49m from './components/Pages/L4/MonthlyForms/FireExtinguisher49m';
import FireExtinguisher50m from './components/Pages/L4/MonthlyForms/FireExtinguisher50m';
import FireExtinguisher51m from './components/Pages/L4/MonthlyForms/FireExtinguisher51m';
import FireExtinguisher52m from './components/Pages/L4/MonthlyForms/FireExtinguisher52m';
import FireExtinguisher53m from './components/Pages/L4/MonthlyForms/FireExtinguisher53m';
import FireExtinguisher54m from './components/Pages/L4/MonthlyForms/FireExtinguisher54m';
import FireExtinguisher55m from './components/Pages/L4/MonthlyForms/FireExtinguisher55m';
import FireExtinguisher56m from './components/Pages/L4/MonthlyForms/FireExtinguisher56m';
import FireExtinguisher57m from './components/Pages/L4/MonthlyForms/FireExtinguisher57m';
import FireExtinguisher58m from './components/Pages/L4/MonthlyForms/FireExtinguisher58m';
import FireExtinguisher59m from './components/Pages/L4/MonthlyForms/FireExtinguisher59m';
import FireExtinguisher60m from './components/Pages/L4/MonthlyForms/FireExtinguisher60m';
import FireExtinguisher61m from './components/Pages/L4/MonthlyForms/FireExtinguisher61m';
import FireExtinguisher62m from './components/Pages/L4/MonthlyForms/FireExtinguisher62m';
import FireExtinguisher63m from './components/Pages/L4/MonthlyForms/FireExtinguisher63m';
import FireExtinguisher64m from './components/Pages/L4/MonthlyForms/FireExtinguisher64m';
import FireExtinguisher65m from './components/Pages/L4/MonthlyForms/FireExtinguisher65m';
import FireExtinguisher66m from './components/Pages/L4/MonthlyForms/FireExtinguisher66m';
import FireExtinguisher67m from './components/Pages/L4/MonthlyForms/FireExtinguisher67m';
import FireExtinguisher68m from './components/Pages/L4/MonthlyForms/FireExtinguisher68m';
import FireExtinguisher69m from './components/Pages/L4/MonthlyForms/FireExtinguisher69m';
import FireExtinguisher70m from './components/Pages/L4/MonthlyForms/FireExtinguisher70m';
import FireExtinguisher71m from './components/Pages/L4/MonthlyForms/FireExtinguisher71m';
import FireExtinguisher72m from './components/Pages/L4/MonthlyForms/FireExtinguisher72m';
import FireExtinguisher73m from './components/Pages/L4/MonthlyForms/FireExtinguisher73m';
import FireExtinguisher74m from './components/Pages/L4/MonthlyForms/FireExtinguisher74m';
import FireExtinguisher75m from './components/Pages/L4/MonthlyForms/FireExtinguisher75m';
import FireExtinguisher76m from './components/Pages/L4/MonthlyForms/FireExtinguisher76m';
import FireExtinguisher77m from './components/Pages/L4/MonthlyForms/FireExtinguisher77m';
import FireExtinguisher78m from './components/Pages/L4/MonthlyForms/FireExtinguisher78m';
import FireExtinguisher79m from './components/Pages/L4/MonthlyForms/FireExtinguisher79m';
import FireExtinguisher80m from './components/Pages/L4/MonthlyForms/FireExtinguisher80m';
import FireExtinguisher81m from './components/Pages/L4/MonthlyForms/FireExtinguisher81m';
import FireExtinguisher82m from './components/Pages/L4/MonthlyForms/FireExtinguisher82m';
import FireExtinguisher83m from './components/Pages/L4/MonthlyForms/FireExtinguisher83m';
import FireExtinguisher84m from './components/Pages/L4/MonthlyForms/FireExtinguisher84m';
import FireExtinguisher85m from './components/Pages/L4/MonthlyForms/FireExtinguisher85m';
import FireExtinguisher86m from './components/Pages/L4/MonthlyForms/FireExtinguisher86m';
import FireExtinguisher87m from './components/Pages/L4/MonthlyForms/FireExtinguisher87m';
import FireExtinguisher88m from './components/Pages/L4/MonthlyForms/FireExtinguisher88m';
import FireExtinguisher89m from './components/Pages/L4/MonthlyForms/FireExtinguisher89m';
import FireExtinguisher90m from './components/Pages/L4/MonthlyForms/FireExtinguisher90m';
import FireExtinguisher91m from './components/Pages/L4/MonthlyForms/FireExtinguisher91m';
import FireExtinguisher92m from './components/Pages/L4/MonthlyForms/FireExtinguisher92m';
import FireExtinguisher93m from './components/Pages/L4/MonthlyForms/FireExtinguisher93m';
import FireExtinguisher94m from './components/Pages/L4/MonthlyForms/FireExtinguisher94m';
import FireExtinguisher95m from './components/Pages/L4/MonthlyForms/FireExtinguisher95m';
import FireExtinguisher96m from './components/Pages/L4/MonthlyForms/FireExtinguisher96m';
import FireExtinguisher97m from './components/Pages/L4/MonthlyForms/FireExtinguisher97m';
import FireExtinguisher98m from './components/Pages/L4/MonthlyForms/FireExtinguisher98m';
import FireExtinguisher99m from './components/Pages/L4/MonthlyForms/FireExtinguisher99m';
import FireExtinguisher100m from './components/Pages/L4/MonthlyForms/FireExtinguisher100m';
import FireExtinguisher101m from './components/Pages/L4/MonthlyForms/FireExtinguisher101m';
import FireExtinguisher102m from './components/Pages/L4/MonthlyForms/FireExtinguisher102m';
import FireExtinguisher103m from './components/Pages/L4/MonthlyForms/FireExtinguisher103m';
import FireExtinguisher104m from './components/Pages/L4/MonthlyForms/FireExtinguisher104m';
import FireExtinguisher105m from './components/Pages/L4/MonthlyForms/FireExtinguisher105m';
import FireExtinguisher106m from './components/Pages/L4/MonthlyForms/FireExtinguisher106m';
import FireExtinguisher107m from './components/Pages/L4/MonthlyForms/FireExtinguisher107m';
import FireExtinguisher108m from './components/Pages/L4/MonthlyForms/FireExtinguisher108m';
import FireExtinguisher109m from './components/Pages/L4/MonthlyForms/FireExtinguisher109m';
import FireExtinguisher110m from './components/Pages/L4/MonthlyForms/FireExtinguisher110m';
import FireExtinguisher111m from './components/Pages/L4/MonthlyForms/FireExtinguisher111m';
import FireExtinguisher112m from './components/Pages/L4/MonthlyForms/FireExtinguisher112m';
import FireExtinguisher113m from './components/Pages/L4/MonthlyForms/FireExtinguisher113m';
import FireExtinguisher114m from './components/Pages/L4/MonthlyForms/FireExtinguisher114m';
import FireExtinguisher115m from './components/Pages/L4/MonthlyForms/FireExtinguisher115m';
import FireExtinguisher116m from './components/Pages/L4/MonthlyForms/FireExtinguisher116m';
import FireExtinguisher117m from './components/Pages/L4/MonthlyForms/FireExtinguisher117m';
import FireExtinguisher118m from './components/Pages/L4/MonthlyForms/FireExtinguisher118m';
import FireExtinguisher119m from './components/Pages/L4/MonthlyForms/FireExtinguisher119m';
import FireExtinguisher120m from './components/Pages/L4/MonthlyForms/FireExtinguisher120m';
import FireExtinguisher121m from './components/Pages/L4/MonthlyForms/FireExtinguisher121m';
import FireExtinguisher122m from './components/Pages/L4/MonthlyForms/FireExtinguisher122m';
import FireExtinguisher123m from './components/Pages/L4/MonthlyForms/FireExtinguisher123m';
import FireExtinguisher124m from './components/Pages/L4/MonthlyForms/FireExtinguisher124m';
import FireExtinguisher125m from './components/Pages/L4/MonthlyForms/FireExtinguisher125m';
import FireExtinguisher126m from './components/Pages/L4/MonthlyForms/FireExtinguisher126m';
import FireExtinguisher127m from './components/Pages/L4/MonthlyForms/FireExtinguisher127m';
import FireExtinguisher128m from './components/Pages/L4/MonthlyForms/FireExtinguisher128m';
import FireExtinguisher129m from './components/Pages/L4/MonthlyForms/FireExtinguisher129m';
import FireExtinguisher130m from './components/Pages/L4/MonthlyForms/FireExtinguisher130m';
import FireExtinguisher131m from './components/Pages/L4/MonthlyForms/FireExtinguisher131m';
import FireExtinguisher132m from './components/Pages/L4/MonthlyForms/FireExtinguisher132m';
import FireExtinguisher133m from './components/Pages/L4/MonthlyForms/FireExtinguisher133m';
import FireExtinguisher134m from './components/Pages/L4/MonthlyForms/FireExtinguisher134m';
import FireExtinguisher135m from './components/Pages/L4/MonthlyForms/FireExtinguisher135m';
import FireExtinguisher136m from './components/Pages/L4/MonthlyForms/FireExtinguisher136m';
import FireExtinguisher137m from './components/Pages/L4/MonthlyForms/FireExtinguisher137m';
import FireExtinguisher138m from './components/Pages/L4/MonthlyForms/FireExtinguisher138m';
import FireExtinguisher139m from './components/Pages/L4/MonthlyForms/FireExtinguisher139m';
import FireExtinguisher140m from './components/Pages/L4/MonthlyForms/FireExtinguisher140m';
import FireExtinguisher141m from './components/Pages/L4/MonthlyForms/FireExtinguisher141m';
import FireExtinguisher142m from './components/Pages/L4/MonthlyForms/FireExtinguisher142m';
import FireExtinguisher143m from './components/Pages/L4/MonthlyForms/FireExtinguisher143m';
import FireExtinguisher144m from './components/Pages/L4/MonthlyForms/FireExtinguisher144m';
import FireExtinguisher145m from './components/Pages/L4/MonthlyForms/FireExtinguisher145m';
import FireExtinguisher146m from './components/Pages/L4/MonthlyForms/FireExtinguisher146m';
import FireExtinguisher147m from './components/Pages/L4/MonthlyForms/FireExtinguisher147m';
import FireExtinguisher148m from './components/Pages/L4/MonthlyForms/FireExtinguisher148m';
import FireExtinguisher149m from './components/Pages/L4/MonthlyForms/FireExtinguisher149m';
import FireExtinguisher150m from './components/Pages/L4/MonthlyForms/FireExtinguisher150m';
import FireExtinguisher151m from './components/Pages/L4/MonthlyForms/FireExtinguisher151m';
import FireExtinguisher152m from './components/Pages/L4/MonthlyForms/FireExtinguisher152m';
import FireExtinguisher153m from './components/Pages/L4/MonthlyForms/FireExtinguisher153m';
import FireExtinguisher154m from './components/Pages/L4/MonthlyForms/FireExtinguisher154m';
import FireExtinguisher155m from './components/Pages/L4/MonthlyForms/FireExtinguisher155m';
import FireExtinguisher156m from './components/Pages/L4/MonthlyForms/FireExtinguisher156m';
import FireExtinguisher157m from './components/Pages/L4/MonthlyForms/FireExtinguisher157m';
import FireExtinguisher158m from './components/Pages/L4/MonthlyForms/FireExtinguisher158m';
import FireExtinguisher159m from './components/Pages/L4/MonthlyForms/FireExtinguisher159m';
import FireExtinguisher160m from './components/Pages/L4/MonthlyForms/FireExtinguisher160m';
import FireExtinguisher161m from './components/Pages/L4/MonthlyForms/FireExtinguisher161m';
import FireExtinguisher162m from './components/Pages/L4/MonthlyForms/FireExtinguisher162m';
import FireExtinguisher163m from './components/Pages/L4/MonthlyForms/FireExtinguisher163m';
import FireExtinguisher164m from './components/Pages/L4/MonthlyForms/FireExtinguisher164m';
import FireExtinguisher165m from './components/Pages/L4/MonthlyForms/FireExtinguisher165m';
import FireExtinguisher166m from './components/Pages/L4/MonthlyForms/FireExtinguisher166m';
import FireExtinguisher167m from './components/Pages/L4/MonthlyForms/FireExtinguisher167m';
import FireExtinguisher168m from './components/Pages/L4/MonthlyForms/FireExtinguisher168m';
import FireExtinguisher169m from './components/Pages/L4/MonthlyForms/FireExtinguisher169m';
import FireExtinguisher170m from './components/Pages/L4/MonthlyForms/FireExtinguisher170m';
import FireExtinguisher171m from './components/Pages/L4/MonthlyForms/FireExtinguisher171m';
import FireExtinguisher172m from './components/Pages/L4/MonthlyForms/FireExtinguisher172m';
import FireExtinguisher173m from './components/Pages/L4/MonthlyForms/FireExtinguisher173m';
import FireExtinguisher174m from './components/Pages/L4/MonthlyForms/FireExtinguisher174m';
import FireExtinguisher175m from './components/Pages/L4/MonthlyForms/FireExtinguisher175m';
import FireExtinguisher176m from './components/Pages/L4/MonthlyForms/FireExtinguisher176m';
import FireExtinguisher177m from './components/Pages/L4/MonthlyForms/FireExtinguisher177m';
import FireExtinguisher178m from './components/Pages/L4/MonthlyForms/FireExtinguisher178m';
import FireExtinguisher179m from './components/Pages/L4/MonthlyForms/FireExtinguisher179m';
import FireExtinguisher180m from './components/Pages/L4/MonthlyForms/FireExtinguisher180m';
import FireExtinguisher181m from './components/Pages/L4/MonthlyForms/FireExtinguisher181m';
import FireExtinguisher182m from './components/Pages/L4/MonthlyForms/FireExtinguisher182m';
import FireExtinguisher183m from './components/Pages/L4/MonthlyForms/FireExtinguisher183m';
import FireExtinguisher184m from './components/Pages/L4/MonthlyForms/FireExtinguisher184m';

import DG10101m from './components/Pages/L4/MonthlyForms/DG10101m';
import DG10102m from './components/Pages/L4/MonthlyForms/DG10102m';
import DG10103m from './components/Pages/L4/MonthlyForms/DG10103m';

import DG5001m from './components/Pages/L4/MonthlyForms/DG5001m';
import DG5002m from './components/Pages/L4/MonthlyForms/DG5002m';

import AirCompressor1m from './components/Pages/L4/MonthlyForms/AirCompressor1m';
import AirCompressor2m from './components/Pages/L4/MonthlyForms/AirCompressor2m';

import AirDryer1m from './components/Pages/L4/MonthlyForms/AirDryer1m';
import AirDryer2m from './components/Pages/L4/MonthlyForms/AirDryer2m';

import WaterChiller1m from './components/Pages/L4/MonthlyForms/WaterChiller1m';
import WaterChiller2m from './components/Pages/L4/MonthlyForms/WaterChiller2m';

import DieselPump1m from './components/Pages/L4/MonthlyForms/DieselPump1m';

import WccWaterMakeup1m from './components/Pages/L4/MonthlyForms/WccWaterMakeup1m';
import WccWaterMakeup2m from './components/Pages/L4/MonthlyForms/WccWaterMakeup2m';

import Pump1m from './components/Pages/L4/MonthlyForms/Pump1m';
import Pump2m from './components/Pages/L4/MonthlyForms/Pump2m';
import Pump3m from './components/Pages/L4/MonthlyForms/Pump3m';
import Pump4m from './components/Pages/L4/MonthlyForms/Pump4m';

import CoolingTower1m from './components/Pages/L4/MonthlyForms/CoolingTower1m';
import CoolingTower2m from './components/Pages/L4/MonthlyForms/CoolingTower2m';

import AHU1m from './components/Pages/L4/MonthlyForms/AHU1m';
import AHU2m from './components/Pages/L4/MonthlyForms/AHU2m';
import AHU3m from './components/Pages/L4/MonthlyForms/AHU3m';
import AHU4m from './components/Pages/L4/MonthlyForms/AHU4m';
import AHU5m from './components/Pages/L4/MonthlyForms/AHU5m';
import AHU6m from './components/Pages/L4/MonthlyForms/AHU6m';
import AHU7m from './components/Pages/L4/MonthlyForms/AHU7m';
import AHU8m from './components/Pages/L4/MonthlyForms/AHU8m';
import AHU9m from './components/Pages/L4/MonthlyForms/AHU9m';
import AHU10m from './components/Pages/L4/MonthlyForms/AHU10m';
import AHU11m from './components/Pages/L4/MonthlyForms/AHU11m';
import AHU12m from './components/Pages/L4/MonthlyForms/AHU12m';
import AHU13m from './components/Pages/L4/MonthlyForms/AHU13m';

import MAU1m from './components/Pages/L4/MonthlyForms/MAU1m';
import MAU2m from './components/Pages/L4/MonthlyForms/MAU2m';
import MAU3m from './components/Pages/L4/MonthlyForms/MAU3m';

import SwagonCompressor1m from './components/Pages/L4/MonthlyForms/SwagonCompressor1m';
import SwagonCompressor2m from './components/Pages/L4/MonthlyForms/SwagonCompressor2m';

import RapidRollingShutter1m from './components/Pages/L4/MonthlyForms/RapidRollingShutter1m';
import RapidRollingShutter2m from './components/Pages/L4/MonthlyForms/RapidRollingShutter2m';
import RapidRollingShutter3m from './components/Pages/L4/MonthlyForms/RapidRollingShutter3m';
import RapidRollingShutter4m from './components/Pages/L4/MonthlyForms/RapidRollingShutter4m';
import RapidRollingShutter5m from './components/Pages/L4/MonthlyForms/RapidRollingShutter5m';
import RapidRollingShutter6m from './components/Pages/L4/MonthlyForms/RapidRollingShutter6m';
import RapidRollingShutter7m from './components/Pages/L4/MonthlyForms/RapidRollingShutter7m';
import RapidRollingShutter8m from './components/Pages/L4/MonthlyForms/RapidRollingShutter8m';
import RapidRollingShutter9m from './components/Pages/L4/MonthlyForms/RapidRollingShutter9m';
import RapidRollingShutter10m from './components/Pages/L4/MonthlyForms/RapidRollingShutter10m';
import RapidRollingShutter11m from './components/Pages/L4/MonthlyForms/RapidRollingShutter11m';
import RapidRollingShutter12m from './components/Pages/L4/MonthlyForms/RapidRollingShutter12m';
import RapidRollingShutter13m from './components/Pages/L4/MonthlyForms/RapidRollingShutter13m';
import RapidRollingShutter14m from './components/Pages/L4/MonthlyForms/RapidRollingShutter14m';

import RapidSlidingGate1m from './components/Pages/L4/MonthlyForms/RapidSlidingGate1m';
import RapidSlidingGate2m from './components/Pages/L4/MonthlyForms/RapidSlidingGate2m';
import RapidSlidingGate3m from './components/Pages/L4/MonthlyForms/RapidSlidingGate3m';
import RapidSlidingGate4m from './components/Pages/L4/MonthlyForms/RapidSlidingGate4m';
import RapidSlidingGate5m from './components/Pages/L4/MonthlyForms/RapidSlidingGate5m';
import RapidSlidingGate6m from './components/Pages/L4/MonthlyForms/RapidSlidingGate6m';

import MotorisedSlidingGate1m from './components/Pages/L4/MonthlyForms/MotorisedSlidingGate1m';
import MotorisedSlidingGate2m from './components/Pages/L4/MonthlyForms/MotorisedSlidingGate2m';
import MotorisedSlidingGate3m from './components/Pages/L4/MonthlyForms/MotorisedSlidingGate3m';

import SplitAC1m from './components/Pages/L4/MonthlyForms/SplitAC1m';
import SplitAC2m from './components/Pages/L4/MonthlyForms/SplitAC2m';
import SplitAC3m from './components/Pages/L4/MonthlyForms/SplitAC3m';
import SplitAC4m from './components/Pages/L4/MonthlyForms/SplitAC4m';
import SplitAC5m from './components/Pages/L4/MonthlyForms/SplitAC5m';
import SplitAC6m from './components/Pages/L4/MonthlyForms/SplitAC6m';

import CassetteAC1m from './components/Pages/L4/MonthlyForms/CassetteAC1m';
import CassetteAC2m from './components/Pages/L4/MonthlyForms/CassetteAC2m';
import CassetteAC3m from './components/Pages/L4/MonthlyForms/CassetteAC3m';
import CassetteAC4m from './components/Pages/L4/MonthlyForms/CassetteAC4m';
import CassetteAC5m from './components/Pages/L4/MonthlyForms/CassetteAC5m';
import CassetteAC6m from './components/Pages/L4/MonthlyForms/CassetteAC6m';
import CassetteAC7m from './components/Pages/L4/MonthlyForms/CassetteAC7m';
import CassetteAC8m from './components/Pages/L4/MonthlyForms/CassetteAC8m';
import CassetteAC9m from './components/Pages/L4/MonthlyForms/CassetteAC9m';
import CassetteAC10m from './components/Pages/L4/MonthlyForms/CassetteAC10m';
import CassetteAC11m from './components/Pages/L4/MonthlyForms/CassetteAC11m';
import CassetteAC12m from './components/Pages/L4/MonthlyForms/CassetteAC12m';
import CassetteAC13m from './components/Pages/L4/MonthlyForms/CassetteAC13m';
import CassetteAC14m from './components/Pages/L4/MonthlyForms/CassetteAC14m';
import CassetteAC15m from './components/Pages/L4/MonthlyForms/CassetteAC15m';
import CassetteAC16m from './components/Pages/L4/MonthlyForms/CassetteAC16m';
import CassetteAC17m from './components/Pages/L4/MonthlyForms/CassetteAC17m';
import CassetteAC18m from './components/Pages/L4/MonthlyForms/CassetteAC18m';
import CassetteAC19m from './components/Pages/L4/MonthlyForms/CassetteAC19m';
import CassetteAC20m from './components/Pages/L4/MonthlyForms/CassetteAC20m';
import CassetteAC21m from './components/Pages/L4/MonthlyForms/CassetteAC21m';
import CassetteAC22m from './components/Pages/L4/MonthlyForms/CassetteAC22m';
import CassetteAC23m from './components/Pages/L4/MonthlyForms/CassetteAC23m';
import CassetteAC24m from './components/Pages/L4/MonthlyForms/CassetteAC24m';

import StreetLight1m from './components/Pages/L4/MonthlyForms/StreetLight1m';
import StreetLight2m from './components/Pages/L4/MonthlyForms/StreetLight2m';
import StreetLight3m from './components/Pages/L4/MonthlyForms/StreetLight3m';
import StreetLight4m from './components/Pages/L4/MonthlyForms/StreetLight4m';
import StreetLight5m from './components/Pages/L4/MonthlyForms/StreetLight5m';
import StreetLight6m from './components/Pages/L4/MonthlyForms/StreetLight6m';
import StreetLight7m from './components/Pages/L4/MonthlyForms/StreetLight7m';

import Canteen1m from './components/Pages/L4/MonthlyForms/Canteen1m';
import Canteen2m from './components/Pages/L4/MonthlyForms/Canteen2m';
import Canteen3m from './components/Pages/L4/MonthlyForms/Canteen3m';
import Canteen4m from './components/Pages/L4/MonthlyForms/Canteen4m';
import Canteen5m from './components/Pages/L4/MonthlyForms/Canteen5m';
import Canteen6m from './components/Pages/L4/MonthlyForms/Canteen6m';
import Canteen7m from './components/Pages/L4/MonthlyForms/Canteen7m';
import Canteen8m from './components/Pages/L4/MonthlyForms/Canteen8m';
import Canteen9m from './components/Pages/L4/MonthlyForms/Canteen9m';
import Canteen10m from './components/Pages/L4/MonthlyForms/Canteen10m';
import Canteen11m from './components/Pages/L4/MonthlyForms/Canteen11m';
import Canteen12m from './components/Pages/L4/MonthlyForms/Canteen12m';
import Canteen13m from './components/Pages/L4/MonthlyForms/Canteen13m';
import Canteen14m from './components/Pages/L4/MonthlyForms/Canteen14m';
import Canteen15m from './components/Pages/L4/MonthlyForms/Canteen15m';
import Canteen16m from './components/Pages/L4/MonthlyForms/Canteen16m';
import Canteen17m from './components/Pages/L4/MonthlyForms/Canteen17m';
import Canteen18m from './components/Pages/L4/MonthlyForms/Canteen18m';
import Canteen19m from './components/Pages/L4/MonthlyForms/Canteen19m';
import Canteen20m from './components/Pages/L4/MonthlyForms/Canteen20m';
import Canteen21m from './components/Pages/L4/MonthlyForms/Canteen21m';
import Canteen22m from './components/Pages/L4/MonthlyForms/Canteen22m';
import Canteen23m from './components/Pages/L4/MonthlyForms/Canteen23m';
import Canteen24m from './components/Pages/L4/MonthlyForms/Canteen24m';
import Canteen25m from './components/Pages/L4/MonthlyForms/Canteen25m';
import Canteen26m from './components/Pages/L4/MonthlyForms/Canteen26m';
import Canteen27m from './components/Pages/L4/MonthlyForms/Canteen27m';
import Canteen28m from './components/Pages/L4/MonthlyForms/Canteen28m';
import Canteen29m from './components/Pages/L4/MonthlyForms/Canteen29m';
import Canteen30m from './components/Pages/L4/MonthlyForms/Canteen30m';
import Canteen31m from './components/Pages/L4/MonthlyForms/Canteen31m';
import Canteen32m from './components/Pages/L4/MonthlyForms/Canteen32m';
import Canteen33m from './components/Pages/L4/MonthlyForms/Canteen33m';
import Canteen34m from './components/Pages/L4/MonthlyForms/Canteen34m';
import Canteen35m from './components/Pages/L4/MonthlyForms/Canteen35m';
import Canteen36m from './components/Pages/L4/MonthlyForms/Canteen36m';
import Canteen37m from './components/Pages/L4/MonthlyForms/Canteen37m';
import Canteen38m from './components/Pages/L4/MonthlyForms/Canteen38m';
import Canteen39m from './components/Pages/L4/MonthlyForms/Canteen39m';
import Canteen40m from './components/Pages/L4/MonthlyForms/Canteen40m';
import Canteen41m from './components/Pages/L4/MonthlyForms/Canteen41m';
import Canteen42m from './components/Pages/L4/MonthlyForms/Canteen42m';
import Canteen43m from './components/Pages/L4/MonthlyForms/Canteen43m';
import Canteen44m from './components/Pages/L4/MonthlyForms/Canteen44m';
import Canteen45m from './components/Pages/L4/MonthlyForms/Canteen45m';
import Canteen46m from './components/Pages/L4/MonthlyForms/Canteen46m';
import Canteen47m from './components/Pages/L4/MonthlyForms/Canteen47m';
import Canteen48m from './components/Pages/L4/MonthlyForms/Canteen48m';
import Canteen49m from './components/Pages/L4/MonthlyForms/Canteen49m';
import Canteen50m from './components/Pages/L4/MonthlyForms/Canteen50m';
import Canteen51m from './components/Pages/L4/MonthlyForms/Canteen51m';
import Canteen52m from './components/Pages/L4/MonthlyForms/Canteen52m';
import Canteen53m from './components/Pages/L4/MonthlyForms/Canteen53m';
import Canteen54m from './components/Pages/L4/MonthlyForms/Canteen54m';
import Canteen55m from './components/Pages/L4/MonthlyForms/Canteen55m';
import Canteen56m from './components/Pages/L4/MonthlyForms/Canteen56m';
import Canteen57m from './components/Pages/L4/MonthlyForms/Canteen57m';
import Canteen58m from './components/Pages/L4/MonthlyForms/Canteen58m';
import Canteen59m from './components/Pages/L4/MonthlyForms/Canteen59m';
import Canteen60m from './components/Pages/L4/MonthlyForms/Canteen60m';
import Canteen61m from './components/Pages/L4/MonthlyForms/Canteen61m';
import Canteen62m from './components/Pages/L4/MonthlyForms/Canteen62m';
import Canteen63m from './components/Pages/L4/MonthlyForms/Canteen63m';
import Canteen64m from './components/Pages/L4/MonthlyForms/Canteen64m';
import Canteen65m from './components/Pages/L4/MonthlyForms/Canteen65m';
import Canteen66m from './components/Pages/L4/MonthlyForms/Canteen66m';
import Canteen67m from './components/Pages/L4/MonthlyForms/Canteen67m';
import Canteen68m from './components/Pages/L4/MonthlyForms/Canteen68m';
import Canteen69m from './components/Pages/L4/MonthlyForms/Canteen69m';
import Canteen70m from './components/Pages/L4/MonthlyForms/Canteen70m';
import Canteen71m from './components/Pages/L4/MonthlyForms/Canteen71m';
import Canteen72m from './components/Pages/L4/MonthlyForms/Canteen72m';
import Canteen73m from './components/Pages/L4/MonthlyForms/Canteen73m';
import Canteen74m from './components/Pages/L4/MonthlyForms/Canteen74m';
import Canteen75m from './components/Pages/L4/MonthlyForms/Canteen75m';
import Canteen76m from './components/Pages/L4/MonthlyForms/Canteen76m';
import Canteen77m from './components/Pages/L4/MonthlyForms/Canteen77m';
import Canteen78m from './components/Pages/L4/MonthlyForms/Canteen78m';
import Canteen79m from './components/Pages/L4/MonthlyForms/Canteen79m';
import Canteen80m from './components/Pages/L4/MonthlyForms/Canteen80m';
import Canteen81m from './components/Pages/L4/MonthlyForms/Canteen81m';
import Canteen82m from './components/Pages/L4/MonthlyForms/Canteen82m';
import Canteen83m from './components/Pages/L4/MonthlyForms/Canteen83m';
import Canteen84m from './components/Pages/L4/MonthlyForms/Canteen84m';
import Canteen85m from './components/Pages/L4/MonthlyForms/Canteen85m';
import Canteen86m from './components/Pages/L4/MonthlyForms/Canteen86m';
import Canteen87m from './components/Pages/L4/MonthlyForms/Canteen87m';
import Canteen88m from './components/Pages/L4/MonthlyForms/Canteen88m';
import Canteen89m from './components/Pages/L4/MonthlyForms/Canteen89m';
import Canteen90m from './components/Pages/L4/MonthlyForms/Canteen90m';
import Canteen91m from './components/Pages/L4/MonthlyForms/Canteen91m';

import EmergencyDoor1m from './components/Pages/L4/MonthlyForms/EmergencyDoor1m';
import EmergencyDoor2m from './components/Pages/L4/MonthlyForms/EmergencyDoor2m';

import SmokeDetector1m from './components/Pages/L4/MonthlyForms/SmokeDetector1m';
import BeamDetector1m from './components/Pages/L4/MonthlyForms/BeamDetector1m';

import WaterLine1m from './components/Pages/L4/MonthlyForms/WaterLine1m';
import WaterLine2m from './components/Pages/L4/MonthlyForms/WaterLine2m';
import WaterLine3m from './components/Pages/L4/MonthlyForms/WaterLine3m';
import WaterLine4m from './components/Pages/L4/MonthlyForms/WaterLine4m';
import WaterLine5m from './components/Pages/L4/MonthlyForms/WaterLine5m';
import WaterLine6m from './components/Pages/L4/MonthlyForms/WaterLine6m';

import AirLine1m from './components/Pages/L4/MonthlyForms/AirLine1m';
import AirLine2m from './components/Pages/L4/MonthlyForms/AirLine2m';
import AirLine3m from './components/Pages/L4/MonthlyForms/AirLine3m';
import AirLine4m from './components/Pages/L4/MonthlyForms/AirLine4m';

import FireWaterLine1m from './components/Pages/L4/MonthlyForms/FireWaterLine1m';
import FireWaterLine2m from './components/Pages/L4/MonthlyForms/FireWaterLine2m';
import FireWaterLine3m from './components/Pages/L4/MonthlyForms/FireWaterLine3m';
import FireWaterLine4m from './components/Pages/L4/MonthlyForms/FireWaterLine4m';
import FireWaterLine5m from './components/Pages/L4/MonthlyForms/FireWaterLine5m';
import FireWaterLine6m from './components/Pages/L4/MonthlyForms/FireWaterLine6m';

import Panel1m from './components/Pages/L4/MonthlyForms/Panel1m';
import Panel2m from './components/Pages/L4/MonthlyForms/Panel2m';
import Panel3m from './components/Pages/L4/MonthlyForms/Panel3m';
import Panel4m from './components/Pages/L4/MonthlyForms/Panel4m';
import Panel5m from './components/Pages/L4/MonthlyForms/Panel5m';
import Panel6m from './components/Pages/L4/MonthlyForms/Panel6m';

import AirChiller1m from './components/Pages/L4/MonthlyForms/AirChiller1m';
import STP1m from './components/Pages/L4/MonthlyForms/STP1m';
import AirRecieverTank1m from './components/Pages/L4/MonthlyForms/AirRecieverTank1m';
import UPS1m from './components/Pages/L4/MonthlyForms/UPS1m';
import SwizerLift1m from './components/Pages/L4/MonthlyForms/SwizerLift1m';
import Stacker1m from './components/Pages/L4/MonthlyForms/Stacker1m';
import StackerBattery1m from './components/Pages/L4/MonthlyForms/StackerBattery1m';
import FireHydrantSystem1m from './components/Pages/L4/MonthlyForms/FireHydrantSystem1m';
import Transformer1m from './components/Pages/L4/MonthlyForms/Transformer1m';
import PanelWoAbc1m from './components/Pages/L4/MonthlyForms/PanelWoAbc1m';
import PanelWithAbc1m from './components/Pages/L4/MonthlyForms/PanelWithAbc1m';
import ShopFLoor1m from './components/Pages/L4/MonthlyForms/ShopFloor1m';
import VCB1m from './components/Pages/L4/MonthlyForms/VCB1m';
import ACB1m from './components/Pages/L4/MonthlyForms/ACB1m';
import HtLtPanel1m from './components/Pages/L4/MonthlyForms/HtLtPanel1m';
import RollingShutter1m from './components/Pages/L4/MonthlyForms/RollingShutter1m';
import SoftenerPlant1m from './components/Pages/L4/MonthlyForms/SoftenerPlant1m';
import PDB1m from './components/Pages/L4/MonthlyForms/PDB1m';
import ELDB1m from './components/Pages/L4/MonthlyForms/ELDB1m';
import UPSDB1m from './components/Pages/L4/MonthlyForms/UPSDB1m';
import LDB1m from './components/Pages/L4/MonthlyForms/LDB1m';
import DDC1m from './components/Pages/L4/MonthlyForms/DDC1m';
import Sprinkler1m from './components/Pages/L4/MonthlyForms/Sprinkler1m';
import ManualCallPt1m from './components/Pages/L4/MonthlyForms/ManualCallPt1m';
import HooterStrobe1m from './components/Pages/L4/MonthlyForms/HooterStrobe1m';
import FireHydrant1m from './components/Pages/L4/MonthlyForms/FireHydrant1m';
import HoseReel1m from './components/Pages/L4/MonthlyForms/HoseReel1m';
import MetalDoubleLeafDoor1m from './components/Pages/L4/MonthlyForms/MetalDoubleLeafDoor1m';
import MetalSingleLeafDoor1m from './components/Pages/L4/MonthlyForms/MetalSingleLeafDoor1m';
import WoodenDoubleLeafDoor1m from './components/Pages/L4/MonthlyForms/WoodenDoubleLeafDoor1m';
import WoodenSingleLeafDoor1m from './components/Pages/L4/MonthlyForms/WoodenSingleLeafDoor1m';
import GlassRoundDoor1m from './components/Pages/L4/MonthlyForms/GlassRoundDoor1m';
import GlassDoubleLeafDoor1m from './components/Pages/L4/MonthlyForms/GlassDoubleLeafDoor1m';
import GlassSingleLeafDoor1m from './components/Pages/L4/MonthlyForms/GlassSingleLeafDoor1m';
import FRPDoor1m from './components/Pages/L4/MonthlyForms/FRPdoor1m';
import AccWaterMakeup1m from './components/Pages/L4/MonthlyForms/AccWaterMakeup1m';
import RetractableGate1m from './components/Pages/L4/MonthlyForms/RetractableGate1m';
import SoftnerMotor1m from './components/Pages/L4/MonthlyForms/SoftnerMotor1m';
import SoftnerPump1m from './components/Pages/L4/MonthlyForms/SoftnerPump1m';
import StpPumpMotor1m from './components/Pages/L4/MonthlyForms/StpPumpMotor1m';
import StpPump1m from './components/Pages/L4/MonthlyForms/StpPump1m';
import GardenPump1m from './components/Pages/L4/MonthlyForms/GardenPump1m';
import StpBlower1m from './components/Pages/L4/MonthlyForms/StpBlower1m';
import WrcAhuUnit1m from './components/Pages/L4/MonthlyForms/WrcAhuUnit1m';





//Quarterly Checksheets
import AirCompressor1q from './components/Pages/L4/quarterlyForms/AirCompressor1q';
import AHU1q from './components/Pages/L4/quarterlyForms/Ahu1q';
import AirChiller1q from './components/Pages/L4/quarterlyForms/AirChiller1q';
import AirChiller2q from './components/Pages/L4/quarterlyForms/AirChiller2q';
import AirDryer1q from './components/Pages/L4/quarterlyForms/AirDryer1q';
import AirrecieverTank1q from './components/Pages/L4/quarterlyForms/AirReceiverTank1q';
import Bms1q from './components/Pages/L4/quarterlyForms/Bms1q';
import DG10101q from './components/Pages/L4/quarterlyForms/Dg10101q';
import DG5001q from './components/Pages/L4/quarterlyForms/Dg5001q';
import WaterChiller1q from './components/Pages/L4/quarterlyForms/WaterChiller1q';
import CoolingTower1q from './components/Pages/L4/quarterlyForms/CoolingTower1q';
import Stp1q from './components/Pages/L4/quarterlyForms/Stp1q';
import StpPump1q from './components/Pages/L4/quarterlyForms/StpPump1q';
import StpPump2q from './components/Pages/L4/quarterlyForms/StpPump2q';
import StpPumpMotor1q from './components/Pages/L4/quarterlyForms/StpPumpMotor1q';
import StpPumpMotor2q from './components/Pages/L4/quarterlyForms/StpPumpMotor2q';
import StpRingBlower1q from './components/Pages/L4/quarterlyForms/StpRingBlower1q';
import StpRingBlower2q from './components/Pages/L4/quarterlyForms/StpRingBlower2q';
import StpRingBlower3q from './components/Pages/L4/quarterlyForms/StpRingBlower3q';
import StpRingBlower4q from './components/Pages/L4/quarterlyForms/StpRingBlower4q';
import Ups1q from './components/Pages/L4/quarterlyForms/Ups1q';
import Ups2q from './components/Pages/L4/quarterlyForms/Ups2q';
import Ups3q from './components/Pages/L4/quarterlyForms/Ups3q';
import Ups4q from './components/Pages/L4/quarterlyForms/Ups4q';
import SwizerLift1q from './components/Pages/L4/quarterlyForms/SwizerLift1q';
import CassetteAC1q from './components/Pages/L4/quarterlyForms/CassetteAc1q';
import CassetteAC2q from './components/Pages/L4/quarterlyForms/CassetteAc2q';
import CassetteAC3q from './components/Pages/L4/quarterlyForms/CassetteAc3q';
import CassetteAC4q from './components/Pages/L4/quarterlyForms/CassetteAc4q';
import CassetteAC5q from './components/Pages/L4/quarterlyForms/CassetteAc5q';
import CassetteAC6q from './components/Pages/L4/quarterlyForms/CassetteAc6q';
import CassetteAC7q from './components/Pages/L4/quarterlyForms/CassetteAc7q';
import CassetteAC8q from './components/Pages/L4/quarterlyForms/CassetteAc8q';
import CassetteAC9q from './components/Pages/L4/quarterlyForms/CassetteAc9q';
import CassetteAC10q from './components/Pages/L4/quarterlyForms/CassetteAc10q';
import CassetteAC11q from './components/Pages/L4/quarterlyForms/CassetteAc11q';
import CassetteAC12q from './components/Pages/L4/quarterlyForms/CassetteAc12q';
import CassetteAC13q from './components/Pages/L4/quarterlyForms/CassetteAc13q';
import CassetteAC14q from './components/Pages/L4/quarterlyForms/CassetteAc14q';
import CassetteAC15q from './components/Pages/L4/quarterlyForms/CassetteAc15q';
import SplitAC1q from './components/Pages/L4/quarterlyForms/SplitAc1q';
import SplitAC2q from './components/Pages/L4/quarterlyForms/SplitAc2q';
import SplitAC3q from './components/Pages/L4/quarterlyForms/SplitAc3q';
import SplitAC4q from './components/Pages/L4/quarterlyForms/SplitAc4q';
import SplitAC5q from './components/Pages/L4/quarterlyForms/SplitAc5q';
import SplitAC6q from './components/Pages/L4/quarterlyForms/SplitAc6q';
import SwagonCompressor1q from './components/Pages/L4/quarterlyForms/SwagonCompressor1q';
import Stacker1q from './components/Pages/L4/quarterlyForms/StackerManual1q';
import StackerBattery1q from './components/Pages/L4/quarterlyForms/StackerBattery1q';
import DisealPump1q from './components/Pages/L4/quarterlyForms/DieselPump1q';
import FireHydrantSystem1q from './components/Pages/L4/quarterlyForms/FireHydrantSystem1q';
import StreetLight1q from './components/Pages/L4/quarterlyForms/StreetLight1q';
import ShopFloorLights1q from './components/Pages/L4/quarterlyForms/ShopFloorLights1q';
import HtLtPanel1q from './components/Pages/L4/quarterlyForms/HtLtPanel1q';
import RapidSlidingGate1q from './components/Pages/L4/quarterlyForms/RapidSlidingGate1q';
import RapidRollingShutter1q from './components/Pages/L4/quarterlyForms/RapidRollingShutter1q';
import RollingShutter1q from './components/Pages/L4/quarterlyForms/RollingShutter1q';
import RollingShutter2q from './components/Pages/L4/quarterlyForms/RollingShutter2q';
import RollingShutter3q from './components/Pages/L4/quarterlyForms/RollingShutter3q';
import RollingShutter4q from './components/Pages/L4/quarterlyForms/RollingShutter4q';
import RollingShutter5q from './components/Pages/L4/quarterlyForms/RollingShutter5q';
import RollingShutter6q from './components/Pages/L4/quarterlyForms/RollingShutter6q';
import RollingShutter7q from './components/Pages/L4/quarterlyForms/RollingShutter7q';
import MotorisedSlidingGate1q from './components/Pages/L4/quarterlyForms/MotorisedSlidingGate1q';
import SoftnerPlant1q from './components/Pages/L4/quarterlyForms/SoftnerPlant1q';
import PdbPanel1q from './components/Pages/L4/quarterlyForms/PdbPabel1q';
import Eldb1q from './components/Pages/L4/quarterlyForms/Eldb1q';
import UpsDb1q from './components/Pages/L4/quarterlyForms/UpsDb1q';
import Ldb1q from './components/Pages/L4/quarterlyForms/Ldb1q';
import DdcPanel1q from './components/Pages/L4/quarterlyForms/DdcPanel1q';
import DdcPanel2q from './components/Pages/L4/quarterlyForms/DdcPanel2q';
import DdcPanel3q from './components/Pages/L4/quarterlyForms/DdcPanel3q';
import DdcPanel4q from './components/Pages/L4/quarterlyForms/DdcPanel4q';
import DdcPanel5q from './components/Pages/L4/quarterlyForms/DdcPanel5q';
import FireExtinguisher1q from './components/Pages/L4/quarterlyForms/FireExtinguisher1q';
import Sprinkler1q from './components/Pages/L4/quarterlyForms/Sprinkler1q';
import SmokeDetector1q from './components/Pages/L4/quarterlyForms/SmokeDetector1q';
import ManualCallPt1q from './components/Pages/L4/quarterlyForms/ManualCallPt1q';
import BeamDetector1q from './components/Pages/L4/quarterlyForms/BeamDetector1q';
import HooterCumStrobe1q from './components/Pages/L4/quarterlyForms/HooterCumStrobe1q';
import FireHydrant1q from './components/Pages/L4/quarterlyForms/FireHydrant1q';
import HoseReel1q from './components/Pages/L4/quarterlyForms/HoseReel1q';
import EmergencyDoor1q from './components/Pages/L4/quarterlyForms/EmergencyDoor1q';
import MetalDoubleLeafDoor1q from './components/Pages/L4/quarterlyForms/MetalDoubleLeafDoor1q';
import MetalSingleLeafDoor1q from './components/Pages/L4/quarterlyForms/MetalSingleLeafDoor1q';
import WoodenDoubleLeafDoor1q from './components/Pages/L4/quarterlyForms/WoodenDoubleLeafDoor1q';
import WoodenSingleLeafDoor1q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor1q';
import GlassRoundDoor1q from './components/Pages/L4/quarterlyForms/GlassRoundDoor1q';
import GlassDoubleLeafDoor1q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor1q';
import GlassSingleLeafDoor1q from './components/Pages/L4/quarterlyForms/GlassSingleLeafDoor1q';
import FrpDoor1q from './components/Pages/L4/quarterlyForms/FrpDoor1q';
import GardenPump1q from './components/Pages/L4/quarterlyForms/GardenPump1q';
import Panel1q from './components/Pages/L4/quarterlyForms/Panel1q';
import Panel2q from './components/Pages/L4/quarterlyForms/Panel2q';
import Panel3q from './components/Pages/L4/quarterlyForms/Panel3q';
import Panel4q from './components/Pages/L4/quarterlyForms/Panel4q';
import Panel5q from './components/Pages/L4/quarterlyForms/Panel5q';
import Panel6q from './components/Pages/L4/quarterlyForms/Panel6q';
import Panel7q from './components/Pages/L4/quarterlyForms/Panel7q';
import Panel8q from './components/Pages/L4/quarterlyForms/Panel8q';
import Panel9q from './components/Pages/L4/quarterlyForms/Panel9q';
import Panel10q from './components/Pages/L4/quarterlyForms/Panel10q';
import Panel11q from './components/Pages/L4/quarterlyForms/Panel11q';
import Panel12q from './components/Pages/L4/quarterlyForms/Panel12q';
import Panel13q from './components/Pages/L4/quarterlyForms/Panel13q';
import Panel14q from './components/Pages/L4/quarterlyForms/Panel14q';
import Panel15q from './components/Pages/L4/quarterlyForms/Panel15q';
import Panel16q from './components/Pages/L4/quarterlyForms/Panel16q';
import Panel17q from './components/Pages/L4/quarterlyForms/Panel17q';
import Panel18q from './components/Pages/L4/quarterlyForms/Panel18q';
import Panel19q from './components/Pages/L4/quarterlyForms/Panel19q';
import Panel20q from './components/Pages/L4/quarterlyForms/Panel20q';
import Panel21q from './components/Pages/L4/quarterlyForms/Panel21q';
import Panel22q from './components/Pages/L4/quarterlyForms/Panel22q';
import Panel23q from './components/Pages/L4/quarterlyForms/Panel23q';
import Panel24q from './components/Pages/L4/quarterlyForms/Panel24q';
import Panel25q from './components/Pages/L4/quarterlyForms/Panel25q';
import Panel26q from './components/Pages/L4/quarterlyForms/Panel26q';
import Panel27q from './components/Pages/L4/quarterlyForms/Panel27q';
import Panel28q from './components/Pages/L4/quarterlyForms/Panel28q';
import Panel29q from './components/Pages/L4/quarterlyForms/Panel29q';
import Panel30q from './components/Pages/L4/quarterlyForms/Panel30q';
import Panel31q from './components/Pages/L4/quarterlyForms/Panel31q';
import PumpSection1q from './components/Pages/L4/quarterlyForms/PumpSection1q';
import PumpSection2q from './components/Pages/L4/quarterlyForms/PumpSection2q';
import PumpSection3q from './components/Pages/L4/quarterlyForms/PumpSection3q';
import PumpSection4q from './components/Pages/L4/quarterlyForms/PumpSection4q';
import Sprinkler2q from './components/Pages/L4/quarterlyForms/Sprinkler2q';
import Sprinkler3q from './components/Pages/L4/quarterlyForms/Sprinkler3q';
import Sprinkler4q from './components/Pages/L4/quarterlyForms/Sprinkler4q';
import Sprinkler5q from './components/Pages/L4/quarterlyForms/Sprinkler5q';
import Sprinkler6q from './components/Pages/L4/quarterlyForms/Sprinkler6q';
import Sprinkler7q from './components/Pages/L4/quarterlyForms/Sprinkler7q';
import Sprinkler8q from './components/Pages/L4/quarterlyForms/Sprinkler8q';
import SmokeDetector2q from './components/Pages/L4/quarterlyForms/SmokeDetector2q';
import SmokeDetector3q from './components/Pages/L4/quarterlyForms/SmokeDetector3q';
import SmokeDetector4q from './components/Pages/L4/quarterlyForms/SmokeDetector4q';
import SmokeDetector5q from './components/Pages/L4/quarterlyForms/SmokeDetector5q';
import ManualCallPt2q from './components/Pages/L4/quarterlyForms/ManualCallPt2q';
import ManualCallPt3q from './components/Pages/L4/quarterlyForms/ManualCallPt3q';
import ManualCallPt4q from './components/Pages/L4/quarterlyForms/ManualCallPt4q';
import ManualCallPt5q from './components/Pages/L4/quarterlyForms/ManualCallPt5q';
import BeamDetector2q from './components/Pages/L4/quarterlyForms/BeamDetector2q';
import BeamDetector3q from './components/Pages/L4/quarterlyForms/BeamDetector3q';
import BeamDetector4q from './components/Pages/L4/quarterlyForms/BeamDetector4q';
import BeamDetector5q from './components/Pages/L4/quarterlyForms/BeamDetector5q';
import BeamDetector6q from './components/Pages/L4/quarterlyForms/BeamDetector6q';
import BeamDetector7q from './components/Pages/L4/quarterlyForms/BeamDetector7q';
import BeamDetector8q from './components/Pages/L4/quarterlyForms/BeamDetector8q';
import HooterCumStrobe2q from './components/Pages/L4/quarterlyForms/HooterCumStrobe2q';
import HooterCumStrobe3q from './components/Pages/L4/quarterlyForms/HooterCumStrobe3q';
import HooterCumStrobe4q from './components/Pages/L4/quarterlyForms/HooterCumStrobe4q';
import HooterCumStrobe5q from './components/Pages/L4/quarterlyForms/HooterCumStrobe5q';
import FireHydrant2q from './components/Pages/L4/quarterlyForms/FireHydrant2q';
import FireHydrant3q from './components/Pages/L4/quarterlyForms/FireHydrant3q';
import FireHydrant4q from './components/Pages/L4/quarterlyForms/FireHydrant4q';
import FireHydrant5q from './components/Pages/L4/quarterlyForms/FireHydrant5q';
import FireHydrant6q from './components/Pages/L4/quarterlyForms/FireHydrant6q';
import FireHydrant7q from './components/Pages/L4/quarterlyForms/FireHydrant7q';
import FireHydrant8q from './components/Pages/L4/quarterlyForms/FireHydrant8q';
import FireHydrant9q from './components/Pages/L4/quarterlyForms/FireHydrant9q';
import FireHydrant10q from './components/Pages/L4/quarterlyForms/FireHydrant10q';
import SoftenerUnitOp1q from './components/Pages/L4/quarterlyForms/SoftenerUnitOp1q';
import StreetLight2q from './components/Pages/L4/quarterlyForms/StreetLight2q';
import StreetLight3q from './components/Pages/L4/quarterlyForms/StreetLight3q';
import StreetLight4q from './components/Pages/L4/quarterlyForms/StreetLight4q';
import StreetLight5q from './components/Pages/L4/quarterlyForms/StreetLight5q';
import InhouseLight1q from './components/Pages/L4/quarterlyForms/InhouseLight1q';
import InhouseLight2q from './components/Pages/L4/quarterlyForms/InhouseLight2q';
import InhouseLight3q from './components/Pages/L4/quarterlyForms/InhouseLight3q';
import InhouseLight4q from './components/Pages/L4/quarterlyForms/InhouseLight4q';
import InhouseLight5q from './components/Pages/L4/quarterlyForms/InhouseLight5q';
import InhouseLight6q from './components/Pages/L4/quarterlyForms/InhouseLight6q';
import InhouseLight7q from './components/Pages/L4/quarterlyForms/InhouseLight7q';
import InhouseLight8q from './components/Pages/L4/quarterlyForms/InhouseLight8q';
import InhouseLight9q from './components/Pages/L4/quarterlyForms/InhouseLight9q';
import InhouseLight10q from './components/Pages/L4/quarterlyForms/InhouseLight10q';
import InhouseLight11q from './components/Pages/L4/quarterlyForms/InhouseLight11q';
import InhouseLight12q from './components/Pages/L4/quarterlyForms/InhouseLight12q';
import InhouseLight13q from './components/Pages/L4/quarterlyForms/InhouseLight13q';
import InhouseLight14q from './components/Pages/L4/quarterlyForms/InhouseLight14q';
import InhouseLight15q from './components/Pages/L4/quarterlyForms/InhouseLight15q';
import InhouseLight16q from './components/Pages/L4/quarterlyForms/InhouseLight16q';
import InhouseLight17q from './components/Pages/L4/quarterlyForms/InhouseLight17q';
import InhouseLight18q from './components/Pages/L4/quarterlyForms/InhouseLight18q';
import InhouseLight19q from './components/Pages/L4/quarterlyForms/InhouseLight19q';
import InhouseLight20q from './components/Pages/L4/quarterlyForms/InhouseLight20q';
import InhouseLight21q from './components/Pages/L4/quarterlyForms/InhouseLight21q';
import InhouseLight22q from './components/Pages/L4/quarterlyForms/InhouseLight22q';
import InhouseLight23q from './components/Pages/L4/quarterlyForms/InhouseLight23q';
import InhouseLight24q from './components/Pages/L4/quarterlyForms/InhouseLight24q';
import InhouseLight25q from './components/Pages/L4/quarterlyForms/InhouseLight25q';
import InhouseLight26q from './components/Pages/L4/quarterlyForms/InhouseLight26q';
import InhouseLight27q from './components/Pages/L4/quarterlyForms/InhouseLight27q';
import InhouseLight28q from './components/Pages/L4/quarterlyForms/InhouseLight28q';
import InhouseLight29q from './components/Pages/L4/quarterlyForms/InhouseLight29q';
import InhouseLight30q from './components/Pages/L4/quarterlyForms/InhouseLight30q';
import InhouseLight31q from './components/Pages/L4/quarterlyForms/InhouseLight31q';
import InhouseLight32q from './components/Pages/L4/quarterlyForms/InhouseLight32q';
import InhouseLight33q from './components/Pages/L4/quarterlyForms/InhouseLight33q';
import InhouseLight34q from './components/Pages/L4/quarterlyForms/InhouseLight34q';
import InhouseLight35q from './components/Pages/L4/quarterlyForms/InhouseLight35q';
import InhouseLight36q from './components/Pages/L4/quarterlyForms/InhouseLight36q';
import InhouseLight37q from './components/Pages/L4/quarterlyForms/InhouseLight37q';
import InhouseLight38q from './components/Pages/L4/quarterlyForms/InhouseLight38q';
import InhouseLight39q from './components/Pages/L4/quarterlyForms/InhouseLight39q';
import InhouseLight40q from './components/Pages/L4/quarterlyForms/InhouseLight40q';
import InhouseLight41q from './components/Pages/L4/quarterlyForms/InhouseLight41q';
import InhouseLight42q from './components/Pages/L4/quarterlyForms/InhouseLight42q';
import InhouseLight43q from './components/Pages/L4/quarterlyForms/InhouseLight43';
import InhouseLight44q from './components/Pages/L4/quarterlyForms/InhouseLight44q';
import InhouseLight45q from './components/Pages/L4/quarterlyForms/InhouseLight45q';
import InhouseLight46q from './components/Pages/L4/quarterlyForms/InhouseLight46q';
import InhouseLight47q from './components/Pages/L4/quarterlyForms/InhouseLight47q';
import InhouseLight48q from './components/Pages/L4/quarterlyForms/InhouseLight48q';
import InhouseLight49q from './components/Pages/L4/quarterlyForms/InhouseLight49q';
import InhouseLight50q from './components/Pages/L4/quarterlyForms/InhouseLight50q';
import InhouseLight51q from './components/Pages/L4/quarterlyForms/InhouseLight51q';
import InhouseLight52q from './components/Pages/L4/quarterlyForms/InhouseLight52q';
import InhouseLight53q from './components/Pages/L4/quarterlyForms/InhouseLight53q';
import InhouseLight54q from './components/Pages/L4/quarterlyForms/InhouseLight54q';
import InhouseLight55q from './components/Pages/L4/quarterlyForms/InhouseLight55q';
import Ldb2q from './components/Pages/L4/quarterlyForms/Ldb2q';
import Eldb2q from './components/Pages/L4/quarterlyForms/Eldb2q';
import Pdb2q from './components/Pages/L4/quarterlyForms/Pdb2q';
import Eldb3q from './components/Pages/L4/quarterlyForms/Eldb3q';
import Ldb3q from './components/Pages/L4/quarterlyForms/Ldb3q';
import Ldb4q from './components/Pages/L4/quarterlyForms/Ldb4q';
import Eldb4q from './components/Pages/L4/quarterlyForms/Eldb4q';
import Pdb3q from './components/Pages/L4/quarterlyForms/Pdb3q';
import Eldb5q from './components/Pages/L4/quarterlyForms/Eldb5q';
import Ldb5q from './components/Pages/L4/quarterlyForms/Ldb5q';
import Ldb6q from './components/Pages/L4/quarterlyForms/Ldb6q';
import Ldb7q from './components/Pages/L4/quarterlyForms/Ldb7q';
import Pdb4q from './components/Pages/L4/quarterlyForms/Pdb4q';
import Ldb8q from './components/Pages/L4/quarterlyForms/Ldb8q';
import Eldb6q from './components/Pages/L4/quarterlyForms/Eldb6q';
import Pdb5q from './components/Pages/L4/quarterlyForms/Pdb5q';
import Ldb9q from './components/Pages/L4/quarterlyForms/Ldb9q';
import Eldb7q from './components/Pages/L4/quarterlyForms/Eldb7q';
import Pdb6q from './components/Pages/L4/quarterlyForms/Pdb6q';
import Ldb10q from './components/Pages/L4/quarterlyForms/Ldb10q';
import Eldb8q from './components/Pages/L4/quarterlyForms/Eldb8q';
import Pdb7q from './components/Pages/L4/quarterlyForms/Pdb7q';
import Ldb11q from './components/Pages/L4/quarterlyForms/Ldb11q';
import Eldb9q from './components/Pages/L4/quarterlyForms/Eldb9q';
import Pdb8q from './components/Pages/L4/quarterlyForms/Pdb8q';
import Eldb10q from './components/Pages/L4/quarterlyForms/Eldb10q';
import Pdb9q from './components/Pages/L4/quarterlyForms/Pdb9q';
import Pdb10q from './components/Pages/L4/quarterlyForms/Pdb10q';
import UpsDb2q from './components/Pages/L4/quarterlyForms/UspDb2q';
import Ldb12q from './components/Pages/L4/quarterlyForms/Ldb12q';
import Ldb13q from './components/Pages/L4/quarterlyForms/Ldb13q';
import Pdb11q from './components/Pages/L4/quarterlyForms/Pdb11q';
import Ldb14q from './components/Pages/L4/quarterlyForms/Ldb14q';
import WoodenDoubleLeafDoor2q from './components/Pages/L4/quarterlyForms/WoodenDoubleLeafDoor2q';
import WoodenSingleLeafDoor2q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor2q';
import WoodenDoubleLeafDoor3q from './components/Pages/L4/quarterlyForms/WoodenDoubleLeafDoor3q';
import WoodenSingleLeafDoor3q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor3q';
import MetalSingleLeafDoor2q from './components/Pages/L4/quarterlyForms/MetalSingleLeafDoor2q';
import MetalDoubleLeafDoor2q from './components/Pages/L4/quarterlyForms/MetalDoubleLeafDoor2q';
import GlassDoubleLeafDoor2q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor2q';
import GlassDoubleLeafDoor3q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor3q';
import GlassSingleLeafDoor2q from './components/Pages/L4/quarterlyForms/GlassSingleLeafDoor2q';
import GlassSingleLeafDoor3q from './components/Pages/L4/quarterlyForms/GlassSingleLeafDoor3q';
import WoodenSingleLeafDoor4q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor4q';
import WoodenSingleLeafDoor5q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor5q';
import WoodenSingleLeafDoor6q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafdoor6q';
import GlassDoubleLeafDoor4q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor4q';
import MetalDoubleLeafDoor3q from './components/Pages/L4/quarterlyForms/MetalDoubleLeafDoor3q';
import MetalDoubleLeafDoor4q from './components/Pages/L4/quarterlyForms/MetalDoubelLeafDoor4q';
import WoodenSingleLeafDoor7q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor7q';
import Panel32q from './components/Pages/L4/quarterlyForms/Panel32q';
import Panel33q from './components/Pages/L4/quarterlyForms/Panel33q';
import Panel34q from './components/Pages/L4/quarterlyForms/Panel34q';
import Panel35q from './components/Pages/L4/quarterlyForms/Panel35q';
import Panel36q from './components/Pages/L4/quarterlyForms/Panel36q';
import Panel37q from './components/Pages/L4/quarterlyForms/Panel37q';
import Panel38q from './components/Pages/L4/quarterlyForms/Panel38q';
import Panel39q from './components/Pages/L4/quarterlyForms/Panel39q';
import Panel40q from './components/Pages/L4/quarterlyForms/Panel40q';
import Panel41q from './components/Pages/L4/quarterlyForms/Panel41q';
import Panel42q from './components/Pages/L4/quarterlyForms/Panel42q';
import Panel43q from './components/Pages/L4/quarterlyForms/Panel43q';
import Panel44q from './components/Pages/L4/quarterlyForms/Panel44q';
import Panel45q from './components/Pages/L4/quarterlyForms/Panel45q';
import InhouseLight56q from './components/Pages/L4/quarterlyForms/InhouseLight56';
import Stacker2q from './components/Pages/L4/quarterlyForms/StackerManual2q';
import Ldb15q from './components/Pages/L4/quarterlyForms/Ldb15q';
import Ldb16q from './components/Pages/L4/quarterlyForms/Ldb16q';
import WoodenSingleLeafDoor8q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor8q';
import WoodenSingleLeafDoor9q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor9q';
import FrpDoor2q from './components/Pages/L4/quarterlyForms/FrpDoor2q';
import FrpDoor3q from './components/Pages/L4/quarterlyForms/FrpDoor3q';
import FrpDoor4q from './components/Pages/L4/quarterlyForms/FrpDoor4q';
import FrpDoor5q from './components/Pages/L4/quarterlyForms/FrpDoor5q';
import FrpDoor6q from './components/Pages/L4/quarterlyForms/FrpDoor6q';
import FrpDoor7q from './components/Pages/L4/quarterlyForms/FrpDoor7q';
import FrpDoor8q from './components/Pages/L4/quarterlyForms/FrpDoor8q';
import FrpDoor9q from './components/Pages/L4/quarterlyForms/FrpDoor9q';
import FrpDoor10q from './components/Pages/L4/quarterlyForms/FrpDoor10q';
import FrpDoor11q from './components/Pages/L4/quarterlyForms/FrpDoor11q';
import InhouseLight57q from './components/Pages/L4/quarterlyForms/InhouseLight57q';
import InhouseLight58q from './components/Pages/L4/quarterlyForms/InhouseLight58q';
import InhouseLight59q from './components/Pages/L4/quarterlyForms/InhouseLight59q';
import FrpDoor12q from './components/Pages/L4/quarterlyForms/FrpDoor12q';
import FrpDoor13q from './components/Pages/L4/quarterlyForms/FrpDoor13q';
import InhouseLight60q from './components/Pages/L4/quarterlyForms/InhouseLight60q';
import InhouseLight61q from './components/Pages/L4/quarterlyForms/InhouseLight61q';
import InhouseLight62q from './components/Pages/L4/quarterlyForms/InhouseLight62q';
import InhouseLight63q from './components/Pages/L4/quarterlyForms/InhouseLight63q';
import InhouseLight64q from './components/Pages/L4/quarterlyForms/InhouseLight64q';
import InhouseLight65q from './components/Pages/L4/quarterlyForms/InhouseLight65q';
import InhouseLight66q from './components/Pages/L4/quarterlyForms/InhouseLight66q';
import InhouseLight67q from './components/Pages/L4/quarterlyForms/InhouseLight67q';
import InhouseLight68q from './components/Pages/L4/quarterlyForms/InhouseLight68q';
import InhouseLight69q from './components/Pages/L4/quarterlyForms/InhouseLight69q';
import InhouseLight70q from './components/Pages/L4/quarterlyForms/InhouseLight70q';
import InhouseLight71q from './components/Pages/L4/quarterlyForms/InhouseLight71q';
import InhouseLight72q from './components/Pages/L4/quarterlyForms/InhouseLight72q';
import InhouseLight73q from './components/Pages/L4/quarterlyForms/InhouseLight73q';
import InhouseLight74q from './components/Pages/L4/quarterlyForms/InhouseLight74q';
import InhouseLight75q from './components/Pages/L4/quarterlyForms/InhouseLight75q';
import InhouseLight76q from './components/Pages/L4/quarterlyForms/InhouseLight76q';
import InhouseLight77q from './components/Pages/L4/quarterlyForms/InhouseLight77q';
import InhouseLight78q from './components/Pages/L4/quarterlyForms/InhouseLight78q';
import CassetteAC16q from './components/Pages/L4/quarterlyForms/CassetteAc16q';
import CassetteAC17q from './components/Pages/L4/quarterlyForms/CassetteAc17q';
import CassetteAC18q from './components/Pages/L4/quarterlyForms/CassetteAc18q';
import CassetteAC19q from './components/Pages/L4/quarterlyForms/CaseetteAc19q';
import CassetteAC20q from './components/Pages/L4/quarterlyForms/CassetteAc20q';
import SplitAC7q from './components/Pages/L4/quarterlyForms/SplitAc7q';
import SplitAC8q from './components/Pages/L4/quarterlyForms/SplitAc8q';
import SplitAC9q from './components/Pages/L4/quarterlyForms/SplitAc9q';
import NitrogenYard1q from './components/Pages/L4/quarterlyForms/NitrogenYard1q';
import CassetteAC21q from './components/Pages/L4/quarterlyForms/CassetteAc21q';
import CassetteAC22q from './components/Pages/L4/quarterlyForms/CassetteAc22q';
import CassetteAC23q from './components/Pages/L4/quarterlyForms/CassetteAc23q';
import CassetteAC24q from './components/Pages/L4/quarterlyForms/CassetteAc24q';
import StackerBattery2q from './components/Pages/L4/quarterlyForms/StackerBattery2q';
import StackerBattery3q from './components/Pages/L4/quarterlyForms/StackerBattery3q';
import StackerBattery4q from './components/Pages/L4/quarterlyForms/StackerBattery4q';
import Mldb1q from './components/Pages/L4/quarterlyForms/Mldb1q';
import Ldb17q from './components/Pages/L4/quarterlyForms/Ldb17q';
import Pdb12q from './components/Pages/L4/quarterlyForms/Pdb12q';
import Eldb11q from './components/Pages/L4/quarterlyForms/Eldb11q';
import Eldb12q from './components/Pages/L4/quarterlyForms/Eldb12q';
import Ldb18q from './components/Pages/L4/quarterlyForms/Ldb18q';
import Pdb13q from './components/Pages/L4/quarterlyForms/Pdb13q';
import Eldb13q from './components/Pages/L4/quarterlyForms/Eldb13q';
import Ldb19q from './components/Pages/L4/quarterlyForms/Ldb19q';
import Ldb20q from './components/Pages/L4/quarterlyForms/Ldb20q';
import SplitAC10q from './components/Pages/L4/quarterlyForms/SplitAc10q';
import SplitAC11q from './components/Pages/L4/quarterlyForms/SplitAc11q';
import SplitAC12q from './components/Pages/L4/quarterlyForms/SplitAc12q';
import SplitAC13q from './components/Pages/L4/quarterlyForms/SplitAc13q';
import DdcPanel6q from './components/Pages/L4/quarterlyForms/DdcPanel6q';
import DdcPanel7q from './components/Pages/L4/quarterlyForms/DdcPanel7q';
import Ups5q from './components/Pages/L4/quarterlyForms/Ups5q';
import Ups6q from './components/Pages/L4/quarterlyForms/Ups6q';
import Ups7q from './components/Pages/L4/quarterlyForms/Ups7q';
import Ups8q from './components/Pages/L4/quarterlyForms/Ups8q';
import Ups9q from './components/Pages/L4/quarterlyForms/Ups9q';
import Ups10q from './components/Pages/L4/quarterlyForms/Ups10q';
import Ups11q from './components/Pages/L4/quarterlyForms/Ups11q';
import Ups12q from './components/Pages/L4/quarterlyForms/Ups12q';
import GlassDoubleLeafDoor5q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor5q';
import Ldb21q from './components/Pages/L4/quarterlyForms/Ldb21q';
import Ldb22q from './components/Pages/L4/quarterlyForms/Ldb22q';
import RollingShutter8q from './components/Pages/L4/quarterlyForms/RollingShutter8q';
import RollingShutter9q from './components/Pages/L4/quarterlyForms/RollingShutter9q';
import RollingShutter10q from './components/Pages/L4/quarterlyForms/RollingShutter10q';
import Ups13q from './components/Pages/L4/quarterlyForms/Ups13q';
import Ups14q from './components/Pages/L4/quarterlyForms/Ups14q';
import RollingShutter11q from './components/Pages/L4/quarterlyForms/RollingShutter11q';
import RollingShutter12q from './components/Pages/L4/quarterlyForms/RollingShutter12q';
import StackerBattery5q from './components/Pages/L4/quarterlyForms/StackerBattery5q';
import CassetteAC25q from './components/Pages/L4/quarterlyForms/CassetteAc25q';
import CassetteAC26q from './components/Pages/L4/quarterlyForms/CassetteAc26q';
import CassetteAC27q from './components/Pages/L4/quarterlyForms/CassetteAc27q';
import CassetteAC28q from './components/Pages/L4/quarterlyForms/CassetteAc28q';
import CassetteAC29q from './components/Pages/L4/quarterlyForms/CassetteAc29q';
import SplitAC14q from './components/Pages/L4/quarterlyForms/SplitAc14q';
import SplitAC15q from './components/Pages/L4/quarterlyForms/SplitAc15q';
import SplitAC16q from './components/Pages/L4/quarterlyForms/SplitAc16q';
import SplitAC17q from './components/Pages/L4/quarterlyForms/SplitAc17q';
import SplitAC18q from './components/Pages/L4/quarterlyForms/SplitAc18q';
import FrpDoor14q from './components/Pages/L4/quarterlyForms/FrpDoor14q';
import FrpDoor15q from './components/Pages/L4/quarterlyForms/FrpDoor15q';
import GlassSingleLeafDoor4q from './components/Pages/L4/quarterlyForms/GlassSingleLeafDoor4q';
import GlassDoubleLeafDoor6q from './components/Pages/L4/quarterlyForms/GlassDoubleLeafDoor6q';
import WoodenDoubleLeafDoor4q from './components/Pages/L4/quarterlyForms/WoodenDoubleLeafDoor4q';
import WoodenSingleLeafDoor10q from './components/Pages/L4/quarterlyForms/WoodenSingleLeafDoor10q';
import Panel46q from './components/Pages/L4/quarterlyForms/Panel46q';
import Panel47q from './components/Pages/L4/quarterlyForms/Panel47q';
import Panel48q from './components/Pages/L4/quarterlyForms/Panel48q';
import WaterChiller2q from './components/Pages/L4/quarterlyForms/WaterChiller2q';
import WaterChiller3q from './components/Pages/L4/quarterlyForms/WaterChiller3q';
import WaterChiller4q from './components/Pages/L4/quarterlyForms/WaterChiller4q';
import WaterChiller5q from './components/Pages/L4/quarterlyForms/WaterChiller5q';
import WaterChiller6q from './components/Pages/L4/quarterlyForms/WaterChiller6q';
import CassetteAC30q from './components/Pages/L4/quarterlyForms/CassetteAc30q';
import CassetteAC31q from './components/Pages/L4/quarterlyForms/CassetteAc31q';
import SplitAC19q from './components/Pages/L4/quarterlyForms/SplitAc19q';
import SplitAC20q from './components/Pages/L4/quarterlyForms/SplitAc20q';
import Ups15q from './components/Pages/L4/quarterlyForms/Ups15q';
import Ups16q from './components/Pages/L4/quarterlyForms/Ups16q';
import Ups17q from './components/Pages/L4/quarterlyForms/Ups17q';
import Ups18q from './components/Pages/L4/quarterlyForms/Ups18q';
import SplitAC21q from './components/Pages/L4/quarterlyForms/SplitAc21q';
import SplitAC22q from './components/Pages/L4/quarterlyForms/SplitAc22q';
import SplitAC23q from './components/Pages/L4/quarterlyForms/SplitAc23q';
import InhouseLight79q from './components/Pages/L4/quarterlyForms/InhouseLights79q';
import InhouseLight80q from './components/Pages/L4/quarterlyForms/InhouseLight80q';
import InhouseLight81q from './components/Pages/L4/quarterlyForms/InhouseLight81q';
import InhouseLight82q from './components/Pages/L4/quarterlyForms/InhouseLight82q';
import InhouseLight83q from './components/Pages/L4/quarterlyForms/InhouseLight83q';
import InhouseLight84q from './components/Pages/L4/quarterlyForms/InhouseLight84q';
import InhouseLight85q from './components/Pages/L4/quarterlyForms/InhouseLight85q';
import InhouseLight86q from './components/Pages/L4/quarterlyForms/InhouseLight86q';
import InhouseLight87q from './components/Pages/L4/quarterlyForms/InhouseLight87q';
import InhouseLight88q from './components/Pages/L4/quarterlyForms/InhouseLight88q';
import InhouseLight89q from './components/Pages/L4/quarterlyForms/InhouseLight89q';
import InhouseLight90q from './components/Pages/L4/quarterlyForms/InhouseLight90q';
import InhouseLight91q from './components/Pages/L4/quarterlyForms/InhouseLight91q';
import InhouseLight92q from './components/Pages/L4/quarterlyForms/InhouseLight92q';
import InhouseLight93q from './components/Pages/L4/quarterlyForms/InhouseLight93q';
import InhouseLight94q from './components/Pages/L4/quarterlyForms/InhouseLight94q';
import InhouseLight95q from './components/Pages/L4/quarterlyForms/InhouseLight95';
import InhouseLight96q from './components/Pages/L4/quarterlyForms/InhouseLight96q';
import InhouseLight97q from './components/Pages/L4/quarterlyForms/InhouseLight97q';
import InhouseLight98q from './components/Pages/L4/quarterlyForms/InhouseLight98q';
import InhouseLight99q from './components/Pages/L4/quarterlyForms/InhouseLight99q';



//Timebased Checksheets
import DG10101tb from './components/Pages/L4/TimeBasedForms/Dg10101tb';
import DG5001tb from './components/Pages/L4/TimeBasedForms/Dg5001tb';
import AirCompressor1tb from './components/Pages/L4/TimeBasedForms/AirCompressor1tb';
import AirCompressor2tb from './components/Pages/L4/TimeBasedForms/AirCompressor2tb';
import AirDryer1tb from './components/Pages/L4/TimeBasedForms/AirDryer1tb';
import AirDryer2tb from './components/Pages/L4/TimeBasedForms/AirDryer2tb';
import DisealPump1tb from './components/Pages/L4/TimeBasedForms/DisealPump1tb';
import WaterChiller1tb from './components/Pages/L4/TimeBasedForms/WaterChiller1tb';
import WaterChiller2tb from './components/Pages/L4/TimeBasedForms/WaterChiller2tb';
import DG10102tb from './components/Pages/L4/TimeBasedForms/Dg10102tb';
import DG10103tb from './components/Pages/L4/TimeBasedForms/Dg10103q';
import DG5002tb from './components/Pages/L4/TimeBasedForms/Dg5002tb';





//Daily Dashboard
import HTLTdash1d from './components/Pages/L1/Dailydashboards/HTLTdash1d';
import HTLTdash2d from './components/Pages/L1/Dailydashboards/HTLTdash2d';
import HTLTdash3d from './components/Pages/L1/Dailydashboards/HTLTdash3d';
import HTLTdash4d from './components/Pages/L1/Dailydashboards/HTLTdash4d';
import HTLTdash5d from './components/Pages/L1/Dailydashboards/HTLTdash5d';
import HTLTdash6d from './components/Pages/L1/Dailydashboards/HTLTdash6d';
import HTLTdash7d from './components/Pages/L1/Dailydashboards/HTLTdash7d';
import HTLTdash8d from './components/Pages/L1/Dailydashboards/HTLTdash8d';
import HTLTdash9d from './components/Pages/L1/Dailydashboards/HTLTdash9d';

import TransformerDash1d from './components/Pages/L1/Dailydashboards/TransformerDash1d';
import TransformerDash2d from './components/Pages/L1/Dailydashboards/TransformerDash2d';
import TransformerDash3d from './components/Pages/L1/Dailydashboards/TransformerDash3d';
import TransformerDash4d from './components/Pages/L1/Dailydashboards/TransformerDash4d';
import TransformerDash5d from './components/Pages/L1/Dailydashboards/TransformerDash5d';
import TransformerDash6d from './components/Pages/L1/Dailydashboards/TransformerDash6d';
import TransformerDash7d from './components/Pages/L1/Dailydashboards/TransformerDash7d';
import TransformerDash8d from './components/Pages/L1/Dailydashboards/TransformerDash8d';

import DG500Dash1d from './components/Pages/L1/Dailydashboards/DG500Dash1d';
import DG500Dash2d from './components/Pages/L1/Dailydashboards/DG500Dash2d';
import DG500Dash3d from './components/Pages/L1/Dailydashboards/DG500Dash3d';

import DG1010Dash1d from './components/Pages/L1/Dailydashboards/DG1010Dash1d';
import DG1010Dash2d from './components/Pages/L1/Dailydashboards/DG1010Dash2d';
import DG1010Dash3d from './components/Pages/L1/Dailydashboards/DG1010Dash3d';
import DG1010Dash4d from './components/Pages/L1/Dailydashboards/DG1010Dash4d';

import VCBDash1d from './components/Pages/L1/Dailydashboards/VCBDash1d';
import VCBDash2d from './components/Pages/L1/Dailydashboards/VCBDash2d';
import VCBDash3d from './components/Pages/L1/Dailydashboards/VCBDash3d';
import VCBDash4d from './components/Pages/L1/Dailydashboards/VCBDash4d';
import VCBDash5d from './components/Pages/L1/Dailydashboards/VCBDash5d';
import VCBDash6d from './components/Pages/L1/Dailydashboards/VCBDash6d';
import VCBDash7d from './components/Pages/L1/Dailydashboards/VCBDash7d';
import VCBDash8d from './components/Pages/L1/Dailydashboards/VCBDash8d';
import VCBDash9d from './components/Pages/L1/Dailydashboards/VCBDash9d';
import VCBDash10d from './components/Pages/L1/Dailydashboards/VCBDash10d';

import AHUDash1d from './components/Pages/L1/Dailydashboards/AHUDash1d';
import AHUDash2d from './components/Pages/L1/Dailydashboards/AHUDash2d';
import AHUDash3d from './components/Pages/L1/Dailydashboards/AHUDash3d';
import AHUDash4d from './components/Pages/L1/Dailydashboards/AHUDash4d';
import AHUDash5d from './components/Pages/L1/Dailydashboards/AHUDash5d';
import AHUDash6d from './components/Pages/L1/Dailydashboards/AHUDash6d';
import AHUDash7d from './components/Pages/L1/Dailydashboards/AHUDash7d';
import AHUDash8d from './components/Pages/L1/Dailydashboards/AHUDash8d';
import AHUDash9d from './components/Pages/L1/Dailydashboards/AHUDash9d';
import AHUDash10d from './components/Pages/L1/Dailydashboards/AHUDash10d';
import AHUDash11d from './components/Pages/L1/Dailydashboards/AHUDash11d';
import AHUDash12d from './components/Pages/L1/Dailydashboards/AHUDash12d';
import AHUDash13d from './components/Pages/L1/Dailydashboards/AHUDash13d';
import AHUDash14d from './components/Pages/L1/Dailydashboards/AHUDash14d';

import PanelDash1d from './components/Pages/L1/Dailydashboards/PanelDash1d';
import PanelDash2d from './components/Pages/L1/Dailydashboards/PanelDash2d';
import PanelDash3d from './components/Pages/L1/Dailydashboards/PanelDash3d';
import PanelDash4d from './components/Pages/L1/Dailydashboards/PanelDash4d';
import PanelDash5d from './components/Pages/L1/Dailydashboards/PanelDash5d';
import PanelDash6d from './components/Pages/L1/Dailydashboards/PanelDash6d';
import PanelDash7d from './components/Pages/L1/Dailydashboards/PanelDash7d';
import PanelDash8d from './components/Pages/L1/Dailydashboards/PanelDash8d';
import PanelDash9d from './components/Pages/L1/Dailydashboards/PanelDash9d';
import PanelDash10d from './components/Pages/L1/Dailydashboards/PanelDash10d';
import PanelDash11d from './components/Pages/L1/Dailydashboards/PanelDash11d';
import PanelDash12d from './components/Pages/L1/Dailydashboards/PanelDash12d';
import PanelDash13d from './components/Pages/L1/Dailydashboards/PanelDash13d';
import PanelDash14d from './components/Pages/L1/Dailydashboards/PanelDash14d';
import PanelDash15d from './components/Pages/L1/Dailydashboards/PanelDash15d';
import PanelDash16d from './components/Pages/L1/Dailydashboards/PanelDash16d';
import PanelDash17d from './components/Pages/L1/Dailydashboards/PanelDash17d';
import PanelDash18d from './components/Pages/L1/Dailydashboards/PanelDash18d';
import PanelDash19d from './components/Pages/L1/Dailydashboards/PanelDash19d';
import PanelDash20d from './components/Pages/L1/Dailydashboards/PanelDash20d';
import PanelDash21d from './components/Pages/L1/Dailydashboards/PanelDash21d';
import PanelDash22d from './components/Pages/L1/Dailydashboards/PanelDash22d';
import PanelDash23d from './components/Pages/L1/Dailydashboards/PanelDash23d';
import PanelDash24d from './components/Pages/L1/Dailydashboards/PanelDash24d';
import PanelDash25d from './components/Pages/L1/Dailydashboards/PanelDash25d';
import PanelDash26d from './components/Pages/L1/Dailydashboards/PanelDash26d';
import PanelDash27d from './components/Pages/L1/Dailydashboards/PanelDash27d';
import PanelDash28d from './components/Pages/L1/Dailydashboards/PanelDash28d';
import PanelDash29d from './components/Pages/L1/Dailydashboards/PanelDash29d';
import PanelDash30d from './components/Pages/L1/Dailydashboards/PanelDash30d';
import PanelDash31d from './components/Pages/L1/Dailydashboards/PanelDash31d';
import PanelDash32d from './components/Pages/L1/Dailydashboards/PanelDash32d';
import PanelDash33d from './components/Pages/L1/Dailydashboards/PanelDash33d';
import PanelDash34d from './components/Pages/L1/Dailydashboards/PanelDash34d';
import PanelDash35d from './components/Pages/L1/Dailydashboards/PanelDash35d';
import PanelDash36d from './components/Pages/L1/Dailydashboards/PanelDash36d';

import ACBDash1d from './components/Pages/L1/Dailydashboards/ACBDash1d';
import ACBDash2d from './components/Pages/L1/Dailydashboards/ACBDash2d';
import ACBDash3d from './components/Pages/L1/Dailydashboards/ACBDash3d';
import ACBDash4d from './components/Pages/L1/Dailydashboards/ACBDash4d';
import ACBDash5d from './components/Pages/L1/Dailydashboards/ACBDash5d';
import ACBDash6d from './components/Pages/L1/Dailydashboards/ACBDash6d';
import ACBDash7d from './components/Pages/L1/Dailydashboards/ACBDash7d';
import ACBDash8d from './components/Pages/L1/Dailydashboards/ACBDash8d';
import ACBDash9d from './components/Pages/L1/Dailydashboards/ACBDash9d';
import ACBDash10d from './components/Pages/L1/Dailydashboards/ACBDash10d';
import ACBDash11d from './components/Pages/L1/Dailydashboards/ACBDash11d';
import ACBDash12d from './components/Pages/L1/Dailydashboards/ACBDash12d';
import ACBDash13d from './components/Pages/L1/Dailydashboards/ACBDash13d';
import ACBDash14d from './components/Pages/L1/Dailydashboards/ACBDash14d';
import ACBDash15d from './components/Pages/L1/Dailydashboards/ACBDash15d';
import ACBDash16d from './components/Pages/L1/Dailydashboards/ACBDash16d';
import ACBDash17d from './components/Pages/L1/Dailydashboards/ACBDash17d';
import ACBDash18d from './components/Pages/L1/Dailydashboards/ACBDash18d';
import ACBDash19d from './components/Pages/L1/Dailydashboards/ACBDash19d';
import ACBDash20d from './components/Pages/L1/Dailydashboards/ACBDash20d';
import ACBDash21d from './components/Pages/L1/Dailydashboards/ACBDash21d';
import ACBDash22d from './components/Pages/L1/Dailydashboards/ACBDash22d';
import ACBDash23d from './components/Pages/L1/Dailydashboards/ACBDash23d';
import ACBDash24d from './components/Pages/L1/Dailydashboards/ACBDash24d';
import ACBDash25d from './components/Pages/L1/Dailydashboards/ACBDash25d';
import ACBDash26d from './components/Pages/L1/Dailydashboards/ACBDash26d';
import ACBDash27d from './components/Pages/L1/Dailydashboards/ACBDash27d';
import ACBDash28d from './components/Pages/L1/Dailydashboards/ACBDash28d';
import ACBDash29d from './components/Pages/L1/Dailydashboards/ACBDash29d';
import ACBDash30d from './components/Pages/L1/Dailydashboards/ACBDash30d';
import ACBDash31d from './components/Pages/L1/Dailydashboards/ACBDash31d';
import ACBDash32d from './components/Pages/L1/Dailydashboards/ACBDash32d';
import ACBDash33d from './components/Pages/L1/Dailydashboards/ACBDash33d';
import ACBDash34d from './components/Pages/L1/Dailydashboards/ACBDash34d';
import ACBDash35d from './components/Pages/L1/Dailydashboards/ACBDash35d';
import ACBDash36d from './components/Pages/L1/Dailydashboards/ACBDash36d';
import ACBDash37d from './components/Pages/L1/Dailydashboards/ACBDash37d';
import ACBDash38d from './components/Pages/L1/Dailydashboards/ACBDash38d';
import ACBDash39d from './components/Pages/L1/Dailydashboards/ACBDash39d';
import ACBDash40d from './components/Pages/L1/Dailydashboards/ACBDash40d';
import ACBDash41d from './components/Pages/L1/Dailydashboards/ACBDash41d';
import ACBDash42d from './components/Pages/L1/Dailydashboards/ACBDash42d';
import ACBDash43d from './components/Pages/L1/Dailydashboards/ACBDash43d';
import ACBDash44d from './components/Pages/L1/Dailydashboards/ACBDash44d';
import ACBDash45d from './components/Pages/L1/Dailydashboards/ACBDash45d';
import ACBDash46d from './components/Pages/L1/Dailydashboards/ACBDash46d';
import ACBDash47d from './components/Pages/L1/Dailydashboards/ACBDash47d';
import ACBDash48d from './components/Pages/L1/Dailydashboards/ACBDash48d';
import ACBDash49d from './components/Pages/L1/Dailydashboards/ACBDash49d';
import ACBDash50d from './components/Pages/L1/Dailydashboards/ACBDash50d';
import ACBDash51d from './components/Pages/L1/Dailydashboards/ACBDash51d';
import ACBDash52d from './components/Pages/L1/Dailydashboards/ACBDash52d';
import ACBDash53d from './components/Pages/L1/Dailydashboards/ACBDash53d';
import ACBDash54d from './components/Pages/L1/Dailydashboards/ACBDash54d';
import ACBDash55d from './components/Pages/L1/Dailydashboards/ACBDash55d';
import ACBDash56d from './components/Pages/L1/Dailydashboards/ACBDash56d';
import ACBDash57d from './components/Pages/L1/Dailydashboards/ACBDash57d';
import ACBDash58d from './components/Pages/L1/Dailydashboards/ACBDash58d';
import ACBDash59d from './components/Pages/L1/Dailydashboards/ACBDash59d';
import ACBDash60d from './components/Pages/L1/Dailydashboards/ACBDash60d';

import SwagonCompresorDash1d from './components/Pages/L1/Dailydashboards/SwagonCompresorDash1d';
import SwagonCompresorDash2d from './components/Pages/L1/Dailydashboards/SwagonCompresorDash2d';
import SwagonCompresorDash3d from './components/Pages/L1/Dailydashboards/SwagonCompresorDash3d';
import SwagonCompresorDash4d from './components/Pages/L1/Dailydashboards/SwagonCompresorDash4d';

import UPSDash1d from './components/Pages/L1/Dailydashboards/UPSDash1d';
import UPSDash2d from './components/Pages/L1/Dailydashboards/UPSDash2d';
import UPSDash3d from './components/Pages/L1/Dailydashboards/UPSDash3d';
import UPSDash4d from './components/Pages/L1/Dailydashboards/UPSDash4d';
import UPSDash5d from './components/Pages/L1/Dailydashboards/UPSDash5d';
import UPSDash6d from './components/Pages/L1/Dailydashboards/UPSDash6d';

import AirCompressorDash1d from './components/Pages/L1/Dailydashboards/AirCompressorDash1d';
import AirCompressorDash2d from './components/Pages/L1/Dailydashboards/AirCompressorDash2d';

import AirDryerDash1d from './components/Pages/L1/Dailydashboards/AirDryerDash1d';
import AirDryerDash2d from './components/Pages/L1/Dailydashboards/AirDryerDash2d';

import WaterChillerDash1d from './components/Pages/L1/Dailydashboards/WaterChillerDash1d';
import WaterChillerDash2d from './components/Pages/L1/Dailydashboards/WaterChillerDash2d';

import AirChillerDash1d from './components/Pages/L1/Dailydashboards/AirChillerDash1d';
import AirChillerDash2d from './components/Pages/L1/Dailydashboards/AirChillerDash2d';

import CoolingTowerDash1d from './components/Pages/L1/Dailydashboards/CoolingTowerDash1d';
import CoolingTowerDash2d from './components/Pages/L1/Dailydashboards/CoolingTowerDash2d';

import AirReservoirTankDash1d from './components/Pages/L1/Dailydashboards/AirReservoirTankDash1d';
import AirReservoirTankDash2d from './components/Pages/L1/Dailydashboards/AirReservoirTankDash2d';

import UPSDBDash1d from './components/Pages/L1/Dailydashboards/UPSDBDash1d';

import FireHydrantSystemDash1d from './components/Pages/L1/Dailydashboards/FireHydrantSystemDash1d';
import SoftenerUnitDash1d from './components/Pages/L1/Dailydashboards/SoftenerUnitDash1d';
import STPDash1d from './components/Pages/L1/Dailydashboards/STPDash1d';
import NitrogenYardDash1d from './components/Pages/L1/Dailydashboards/NitrogenYardDash1d';
import ELDBPanelDash1d from './components/Pages/L1/Dailydashboards/ELDBPanelDash1d';
import MLDBPanelDash1d from './components/Pages/L1/Dailydashboards/MLDBPanelDash1d';




//Monthly Dashboards
import FireExtinguisherDash1m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash1m';
import FireExtinguisherDash2m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash2m';
import FireExtinguisherDash3m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash3m';
import FireExtinguisherDash4m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash4m';
import FireExtinguisherDash5m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash5m';
import FireExtinguisherDash6m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash6m';
import FireExtinguisherDash7m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash7m';
import FireExtinguisherDash8m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash8m';
import FireExtinguisherDash9m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash9m';
import FireExtinguisherDash10m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash10m';
import FireExtinguisherDash11m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash11m';
import FireExtinguisherDash12m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash12m';
import FireExtinguisherDash13m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash13m';
import FireExtinguisherDash14m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash14m';
import FireExtinguisherDash15m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash15m';
import FireExtinguisherDash16m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash16m';
import FireExtinguisherDash17m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash17m';
import FireExtinguisherDash18m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash18m';
import FireExtinguisherDash19m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash19m';
import FireExtinguisherDash20m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash20m';
import FireExtinguisherDash21m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash21m';
import FireExtinguisherDash22m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash22m';
import FireExtinguisherDash23m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash23m';
import FireExtinguisherDash24m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash24m';
import FireExtinguisherDash25m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash25m';
import FireExtinguisherDash26m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash26m';
import FireExtinguisherDash27m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash27m';
import FireExtinguisherDash28m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash28m';
import FireExtinguisherDash29m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash29m';
import FireExtinguisherDash30m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash30m';
import FireExtinguisherDash31m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash31m';
import FireExtinguisherDash32m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash32m';
import FireExtinguisherDash33m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash33m';
import FireExtinguisherDash34m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash34m';
import FireExtinguisherDash35m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash35m';
import FireExtinguisherDash36m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash36m';
import FireExtinguisherDash37m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash37m';
import FireExtinguisherDash38m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash38m';
import FireExtinguisherDash39m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash39m';
import FireExtinguisherDash40m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash40m';
import FireExtinguisherDash41m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash41m';
import FireExtinguisherDash42m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash42m';
import FireExtinguisherDash43m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash43m';
import FireExtinguisherDash44m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash44m';
import FireExtinguisherDash45m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash45m';
import FireExtinguisherDash46m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash46m';
import FireExtinguisherDash47m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash47m';
import FireExtinguisherDash48m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash48m';
import FireExtinguisherDash49m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash49m';
import FireExtinguisherDash50m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash50m';
import FireExtinguisherDash51m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash51m';
import FireExtinguisherDash52m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash52m';
import FireExtinguisherDash53m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash53m';
import FireExtinguisherDash54m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash54m';
import FireExtinguisherDash55m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash55m';
import FireExtinguisherDash56m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash56m';
import FireExtinguisherDash57m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash57m';
import FireExtinguisherDash58m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash58m';
import FireExtinguisherDash59m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash59m';
import FireExtinguisherDash60m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash60m';
import FireExtinguisherDash61m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash61m';
import FireExtinguisherDash62m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash62m';
import FireExtinguisherDash63m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash63m';
import FireExtinguisherDash64m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash64m';
import FireExtinguisherDash65m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash65m';
import FireExtinguisherDash66m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash66m';
import FireExtinguisherDash67m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash67m';
import FireExtinguisherDash68m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash68m';
import FireExtinguisherDash69m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash69m';
import FireExtinguisherDash70m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash70m';
import FireExtinguisherDash71m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash71m';
import FireExtinguisherDash72m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash72m';
import FireExtinguisherDash73m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash73m';
import FireExtinguisherDash74m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash74m';
import FireExtinguisherDash75m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash75m';
import FireExtinguisherDash76m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash76m';
import FireExtinguisherDash77m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash77m';
import FireExtinguisherDash78m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash78m';
import FireExtinguisherDash79m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash79m';
import FireExtinguisherDash80m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash80m';
import FireExtinguisherDash81m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash81m';
import FireExtinguisherDash82m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash82m';
import FireExtinguisherDash83m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash83m';
import FireExtinguisherDash84m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash84m';
import FireExtinguisherDash85m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash85m';
import FireExtinguisherDash86m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash86m';
import FireExtinguisherDash87m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash87m';
import FireExtinguisherDash88m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash88m';
import FireExtinguisherDash89m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash89m';
import FireExtinguisherDash90m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash90m';
import FireExtinguisherDash91m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash91m';
import FireExtinguisherDash92m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash92m';
import FireExtinguisherDash93m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash93m';
import FireExtinguisherDash94m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash94m';
import FireExtinguisherDash95m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash95m';
import FireExtinguisherDash96m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash96m';
import FireExtinguisherDash97m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash97m';
import FireExtinguisherDash98m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash98m';
import FireExtinguisherDash99m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash99m';
import FireExtinguisherDash100m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash100m';
import FireExtinguisherDash101m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash101m';
import FireExtinguisherDash102m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash102m';
import FireExtinguisherDash103m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash103m';
import FireExtinguisherDash104m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash104m';
import FireExtinguisherDash105m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash105m';
import FireExtinguisherDash106m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash106m';
import FireExtinguisherDash107m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash107m';
import FireExtinguisherDash108m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash108m';
import FireExtinguisherDash109m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash109m';
import FireExtinguisherDash110m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash110m';
import FireExtinguisherDash111m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash111m';
import FireExtinguisherDash112m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash112m';
import FireExtinguisherDash113m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash113m';
import FireExtinguisherDash114m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash114m';
import FireExtinguisherDash115m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash115m';
import FireExtinguisherDash116m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash116m';
import FireExtinguisherDash117m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash117m';
import FireExtinguisherDash118m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash118m';
import FireExtinguisherDash119m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash119m';
import FireExtinguisherDash120m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash120m';
import FireExtinguisherDash121m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash121m';
import FireExtinguisherDash122m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash122m';
import FireExtinguisherDash123m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash123m';
import FireExtinguisherDash124m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash124m';
import FireExtinguisherDash125m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash125m';
import FireExtinguisherDash126m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash126m';
import FireExtinguisherDash127m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash127m';
import FireExtinguisherDash128m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash128m';
import FireExtinguisherDash129m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash129m';
import FireExtinguisherDash130m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash130m';
import FireExtinguisherDash131m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash131m';
import FireExtinguisherDash132m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash132m';
import FireExtinguisherDash133m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash133m';
import FireExtinguisherDash134m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash134m';
import FireExtinguisherDash135m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash135m';
import FireExtinguisherDash136m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash136m';
import FireExtinguisherDash137m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash137m';
import FireExtinguisherDash138m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash138m';
import FireExtinguisherDash139m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash139m';
import FireExtinguisherDash140m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash140m';
import FireExtinguisherDash141m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash141m';
import FireExtinguisherDash142m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash142m';
import FireExtinguisherDash143m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash143m';
import FireExtinguisherDash144m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash144m';
import FireExtinguisherDash145m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash145m';
import FireExtinguisherDash146m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash146m';
import FireExtinguisherDash147m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash147m';
import FireExtinguisherDash148m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash148m';
import FireExtinguisherDash149m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash149m';
import FireExtinguisherDash150m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash150m';
import FireExtinguisherDash151m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash151m';
import FireExtinguisherDash152m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash152m';
import FireExtinguisherDash153m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash153m';
import FireExtinguisherDash154m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash154m';
import FireExtinguisherDash155m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash155m';
import FireExtinguisherDash156m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash156m';
import FireExtinguisherDash157m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash157m';
import FireExtinguisherDash158m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash158m';
import FireExtinguisherDash159m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash159m';
import FireExtinguisherDash160m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash160m';
import FireExtinguisherDash161m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash161m';
import FireExtinguisherDash162m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash162m';
import FireExtinguisherDash163m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash163m';
import FireExtinguisherDash164m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash164m';
import FireExtinguisherDash165m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash165m';
import FireExtinguisherDash166m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash166m';
import FireExtinguisherDash167m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash167m';
import FireExtinguisherDash168m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash168m';
import FireExtinguisherDash169m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash169m';
import FireExtinguisherDash170m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash170m';
import FireExtinguisherDash171m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash171m';
import FireExtinguisherDash172m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash172m';
import FireExtinguisherDash173m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash173m';
import FireExtinguisherDash174m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash174m';
import FireExtinguisherDash175m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash175m';
import FireExtinguisherDash176m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash176m';
import FireExtinguisherDash177m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash177m';
import FireExtinguisherDash178m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash178m';
import FireExtinguisherDash179m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash179m';
import FireExtinguisherDash180m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash180m';
import FireExtinguisherDash181m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash181m';
import FireExtinguisherDash182m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash182m';
import FireExtinguisherDash183m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash183m';
import FireExtinguisherDash184m from './components/Pages/L1/MonthlyDashboard/FireExtinguisherDash184m';

import DG500Dash1m from './components/Pages/L1/MonthlyDashboard/DG500Dash1m';
import DG500Dash2m from './components/Pages/L1/MonthlyDashboard/DG500Dash2m';
import DG1010Dash1m from './components/Pages/L1/MonthlyDashboard/DG1010Dash1m';
import DG1010Dash2m from './components/Pages/L1/MonthlyDashboard/DG1010Dash2m';
import DG1010Dash3m from './components/Pages/L1/MonthlyDashboard/DG1010Dash3m';

import AirCompressorDash1m from './components/Pages/L1/MonthlyDashboard/AirCompressorDash1m';
import AirCompressorDash2m from './components/Pages/L1/MonthlyDashboard/AirCompressorDash2m';

const root = createRoot(document.getElementById('root'));

root.render(
    <SnackbarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/0/dashboard" element={<AdminDashboard />} />
          <Route path="/1/dashboard" element={<Dashboard1 />} />
          <Route path="/2/dashboard" element={<Dashboard2 />} />
          <Route path="/3/dashboard" element={<Dashboard3 />} />
          <Route path="/4/dashboard" element={<Dashboard4 />} />

          {/* Breakdown */}
          <Route path="/4/breakdown" element={<Breakdown />} />


          {/* Daily Checksheets */}          
          <Route path="/dg_500_1_d" element={<DG5001d />} />
          <Route path="/dg_500_2_d" element={<DG5002d />} />
          <Route path="/dg_500_3_d" element={<DG5003d />} />
          <Route path="/dg_1010_1_d" element={<DG10101d />} />
          <Route path="/dg_1010_2_d" element={<DG10102d />} />
          <Route path="/dg_1010_3_d" element={<DG10103d />} />
          <Route path="/dg_1010_4_d" element={<DG10104d />} />
          
          <Route path="/vcb_1_d" element={<VCB1d />} />
          <Route path="/vcb_2_d" element={<VCB2d />} />
          <Route path="/vcb_3_d" element={<VCB3d />} />
          <Route path="/vcb_4_d" element={<VCB4d />} />
          <Route path="/vcb_5_d" element={<VCB5d />} />
          <Route path="/vcb_6_d" element={<VCB6d />} />
          <Route path="/vcb_7_d" element={<VCB7d />} />
          <Route path="/vcb_8_d" element={<VCB8d />} />
          <Route path="/vcb_9_d" element={<VCB9d />} />
          <Route path="/vcb_10_d" element={<VCB10d />} />

          <Route path="/transformer_1_d" element={<Transformer1d />} />
          <Route path="/transformer_2_d" element={<Transformer2d />} />
          <Route path="/transformer_3_d" element={<Transformer3d />} />
          <Route path="/transformer_4_d" element={<Transformer4d />} />
          <Route path="/transformer_5_d" element={<Transformer5d />} />
          <Route path="/transformer_6_d" element={<Transformer6d />} />
          <Route path="/transformer_7_d" element={<Transformer7d />} />
          <Route path="/transformer_8_d" element={<Transformer8d />} />
          
          <Route path="/ht_lt_panel_1_d" element={<HTLTpanel1d />} />
          <Route path="/ht_lt_panel_2_d" element={<HTLTpanel2d />} />
          <Route path="/ht_lt_panel_3_d" element={<HTLTpanel3d />} />
          <Route path="/ht_lt_panel_4_d" element={<HTLTpanel4d />} />
          <Route path="/ht_lt_panel_5_d" element={<HTLTpanel5d />} />
          <Route path="/ht_lt_panel_6_d" element={<HTLTpanel6d />} />
          <Route path="/ht_lt_panel_7_d" element={<HTLTpanel7d />} />
          <Route path="/ht_lt_panel_8_d" element={<HTLTpanel8d />} />
          <Route path="/ht_lt_panel_9_d" element={<HTLTpanel9d />} />

          <Route path="/fire_hydrant_system_1_d" element={<FireHydrantSystem1d />} />
          <Route path="/softener_unit_1_d" element={<SoftenerUnit1d />} />
          <Route path="/stp_1_d" element={<STP1d />} />

          <Route path="/air_compressor_1_d" element={<AirCompressor1d />} />
          <Route path="/air_compressor_2_d" element={<AirCompressor2d />} />

          <Route path="/air_dryer_1_d" element={<AirDryer1d />} />
          <Route path="/air_dryer_2_d" element={<AirDryer2d />} />

          <Route path="/swagon_compressor_1_d" element={<SwagonCompressor1d />} />
          <Route path="/swagon_compressor_2_d" element={<SwagonCompressor2d />} />
          <Route path="/swagon_compressor_3_d" element={<SwagonCompressor3d />} />
          <Route path="/swagon_compressor_4_d" element={<SwagonCompressor4d />} />

          <Route path="/water_chiller_1_d" element={<WaterChiller1d />} />
          <Route path="/water_chiller_2_d" element={<WaterChiller2d />} />

          <Route path="/air_chiller_1_d" element={<AirChiller1d />} />
          <Route path="/air_chiller_2_d" element={<AirChiller2d />} />

          <Route path="/cooling_tower_1_d" element={<CoolingTower1d />} />
          <Route path="/cooling_tower_2_d" element={<CoolingTower2d />} />

          <Route path="/ahu_1_d" element={<AHU1d />} />
          <Route path="/ahu_2_d" element={<AHU2d />} />
          <Route path="/ahu_3_d" element={<AHU3d />} />
          <Route path="/ahu_4_d" element={<AHU4d />} />
          <Route path="/ahu_5_d" element={<AHU5d />} />
          <Route path="/ahu_6_d" element={<AHU6d />} />
          <Route path="/ahu_7_d" element={<AHU7d />} />
          <Route path="/ahu_8_d" element={<AHU8d />} />
          <Route path="/ahu_9_d" element={<AHU9d />} />
          <Route path="/ahu_10_d" element={<AHU10d />} />
          <Route path="/ahu_11_d" element={<AHU11d />} />
          <Route path="/ahu_12_d" element={<AHU12d />} />
          <Route path="/ahu_13_d" element={<AHU13d />} />
          <Route path="/ahu_14_d" element={<AHU14d />} />

          <Route path="/ups_1_d" element={<UPS1d />} />
          <Route path="/ups_2_d" element={<UPS2d />} />
          <Route path="/ups_3_d" element={<UPS3d />} />
          <Route path="/ups_4_d" element={<UPS4d />} />
          <Route path="/ups_5_d" element={<UPS5d />} />
          <Route path="/ups_6_d" element={<UPS6d />} />

          <Route path="/upsdb_panel_1_d" element={<UPSDBpanel1d />} />

          <Route path="/air_reservoir_tank_1_d" element={<AirReservoirTank1d />} />
          <Route path="/air_reservoir_tank_2_d" element={<AirReservoirTank2d />} />

          <Route path="/rapid_sliding_shutter_1_d" element={<RapidSlidingShutter1d />} />
          <Route path="/rapid_rolling_shutter_1_d" element={<RapidRollingShutter1d />} />
          <Route path="/rolling_shutter_1_d" element={<RollingShutter1d />} />
          <Route path="/motorised_sliding_gate_1_d" element={<MotorisedSlidingGate1d />} />
          <Route path="/eldb_panel_1_d" element={<ELDBpanel1d />} />
          <Route path="/pdb_panel_1_d" element={<PDBpanel1d />} />
          <Route path="/ldb_panel_1_d" element={<LDBpanel1d />} />
          <Route path="/ddc_panel_1_d" element={<DDCpanel1d />} />
          <Route path="/fire_extinguisher_1_d" element={<FireExtinguisher1d />} />
          <Route path="/nitrogen_yard_1_d" element={<NitrogenYard1d />} />
          <Route path="/wrc_room_ahu_1_d" element={<WRCroomAHU1d />} />
          <Route path="/swizer_lift_1_d" element={<SwizerLift1d />} />
          <Route path="/cassette_ac_1_d" element={<CassetteAC1d />} />
          <Route path="/split_ac_1_d" element={<SplitAC1d />} />
          <Route path="/stacker_1_d" element={<Stacker1d />} />
          <Route path="/fire_pump_house_1_d" element={<FirePumpHouse1d />} />
          <Route path="/bms_1_d" element={<BMS1d />} />
          <Route path="/street_lights_1_d" element={<StreetLights1d />} />
          <Route path="/shop_floor_lights_1_d" element={<ShopFloorLights1d />} />

          <Route path="/panel_1_d" element={<Panel1d />} />
          <Route path="/panel_2_d" element={<Panel2d />} />
          <Route path="/panel_3_d" element={<Panel3d />} />
          <Route path="/panel_4_d" element={<Panel4d />} />
          <Route path="/panel_5_d" element={<Panel5d />} />
          <Route path="/panel_6_d" element={<Panel6d />} />
          <Route path="/panel_7_d" element={<Panel7d />} />
          <Route path="/panel_8_d" element={<Panel8d />} />
          <Route path="/panel_9_d" element={<Panel9d />} />
          <Route path="/panel_10_d" element={<Panel10d />} />
          <Route path="/panel_11_d" element={<Panel11d />} />
          <Route path="/panel_12_d" element={<Panel12d />} />
          <Route path="/panel_13_d" element={<Panel13d />} />
          <Route path="/panel_14_d" element={<Panel14d />} />
          <Route path="/panel_15_d" element={<Panel15d />} />
          <Route path="/panel_16_d" element={<Panel16d />} />
          <Route path="/panel_17_d" element={<Panel17d />} />
          <Route path="/panel_18_d" element={<Panel18d />} />
          <Route path="/panel_19_d" element={<Panel19d />} />
          <Route path="/panel_20_d" element={<Panel20d />} />
          <Route path="/panel_21_d" element={<Panel21d />} />
          <Route path="/panel_22_d" element={<Panel22d />} />
          <Route path="/panel_23_d" element={<Panel23d />} />
          <Route path="/panel_24_d" element={<Panel24d />} />
          <Route path="/panel_25_d" element={<Panel25d />} />
          <Route path="/panel_26_d" element={<Panel26d />} />
          <Route path="/panel_27_d" element={<Panel27d />} />
          <Route path="/panel_28_d" element={<Panel28d />} />
          <Route path="/panel_29_d" element={<Panel29d />} />
          <Route path="/panel_30_d" element={<Panel30d />} />
          <Route path="/panel_31_d" element={<Panel31d />} />
          <Route path="/panel_32_d" element={<Panel32d />} />
          <Route path="/panel_33_d" element={<Panel33d />} />
          <Route path="/panel_34_d" element={<Panel34d />} />
          <Route path="/panel_35_d" element={<Panel35d />} />
          <Route path="/panel_36_d" element={<Panel36d />} />

          <Route path="/acb_1_d" element={<ACB1d />} />
          <Route path="/acb_2_d" element={<ACB2d />} />
          <Route path="/acb_3_d" element={<ACB3d />} />
          <Route path="/acb_4_d" element={<ACB4d />} />
          <Route path="/acb_5_d" element={<ACB5d />} />
          <Route path="/acb_6_d" element={<ACB6d />} />
          <Route path="/acb_7_d" element={<ACB7d />} />
          <Route path="/acb_8_d" element={<ACB8d />} />
          <Route path="/acb_9_d" element={<ACB9d />} />
          <Route path="/acb_10_d" element={<ACB10d />} />
          <Route path="/acb_11_d" element={<ACB11d />} />
          <Route path="/acb_12_d" element={<ACB12d />} />
          <Route path="/acb_13_d" element={<ACB13d />} />
          <Route path="/acb_14_d" element={<ACB14d />} />
          <Route path="/acb_15_d" element={<ACB15d />} />
          <Route path="/acb_16_d" element={<ACB16d />} />
          <Route path="/acb_17_d" element={<ACB17d />} />
          <Route path="/acb_18_d" element={<ACB18d />} />
          <Route path="/acb_19_d" element={<ACB19d />} />
          <Route path="/acb_20_d" element={<ACB20d />} />
          <Route path="/acb_21_d" element={<ACB21d />} />
          <Route path="/acb_22_d" element={<ACB22d />} />
          <Route path="/acb_23_d" element={<ACB23d />} />
          <Route path="/acb_24_d" element={<ACB24d />} />
          <Route path="/acb_25_d" element={<ACB25d />} />
          <Route path="/acb_26_d" element={<ACB26d />} />
          <Route path="/acb_27_d" element={<ACB27d />} />
          <Route path="/acb_28_d" element={<ACB28d />} />
          <Route path="/acb_29_d" element={<ACB29d />} />
          <Route path="/acb_30_d" element={<ACB30d />} />
          <Route path="/acb_31_d" element={<ACB31d />} />
          <Route path="/acb_32_d" element={<ACB32d />} />
          <Route path="/acb_33_d" element={<ACB33d />} />
          <Route path="/acb_34_d" element={<ACB34d />} />
          <Route path="/acb_35_d" element={<ACB35d />} />
          <Route path="/acb_36_d" element={<ACB36d />} />
          <Route path="/acb_37_d" element={<ACB37d />} />
          <Route path="/acb_38_d" element={<ACB38d />} />
          <Route path="/acb_39_d" element={<ACB39d />} />
          <Route path="/acb_40_d" element={<ACB40d />} />
          <Route path="/acb_41_d" element={<ACB41d />} />
          <Route path="/acb_42_d" element={<ACB42d />} />
          <Route path="/acb_43_d" element={<ACB43d />} />
          <Route path="/acb_44_d" element={<ACB44d />} />
          <Route path="/acb_45_d" element={<ACB45d />} />
          <Route path="/acb_46_d" element={<ACB46d />} />
          <Route path="/acb_47_d" element={<ACB47d />} />
          <Route path="/acb_48_d" element={<ACB48d />} />
          <Route path="/acb_49_d" element={<ACB49d />} />
          <Route path="/acb_50_d" element={<ACB50d />} />
          <Route path="/acb_51_d" element={<ACB51d />} />
          <Route path="/acb_52_d" element={<ACB52d />} />
          <Route path="/acb_53_d" element={<ACB53d />} />
          <Route path="/acb_54_d" element={<ACB54d />} />
          <Route path="/acb_55_d" element={<ACB55d />} />
          <Route path="/acb_56_d" element={<ACB56d />} />
          <Route path="/acb_57_d" element={<ACB57d />} />
          <Route path="/acb_58_d" element={<ACB58d />} />
          <Route path="/acb_59_d" element={<ACB59d />} />
          <Route path="/acb_60_d" element={<ACB60d />} />




          {/* Monthly Checksheets */}
          <Route path="/fire_extinguisher_1_m" element={<FireExtinguisher1m/>} />
          <Route path="/fire_extinguisher_2_m" element={<FireExtinguisher2m/>} />
          <Route path="/fire_extinguisher_3_m" element={<FireExtinguisher3m/>} />
          <Route path="/fire_extinguisher_4_m" element={<FireExtinguisher4m/>} />
          <Route path="/fire_extinguisher_5_m" element={<FireExtinguisher5m/>} />
          <Route path="/fire_extinguisher_6_m" element={<FireExtinguisher6m/>} />
          <Route path="/fire_extinguisher_7_m" element={<FireExtinguisher7m/>} />
          <Route path="/fire_extinguisher_8_m" element={<FireExtinguisher8m/>} />
          <Route path="/fire_extinguisher_9_m" element={<FireExtinguisher9m/>} />
          <Route path="/fire_extinguisher_10_m" element={<FireExtinguisher10m/>} />
          <Route path="/fire_extinguisher_11_m" element={<FireExtinguisher11m/>} />
          <Route path="/fire_extinguisher_12_m" element={<FireExtinguisher12m/>} />
          <Route path="/fire_extinguisher_13_m" element={<FireExtinguisher13m/>} />
          <Route path="/fire_extinguisher_14_m" element={<FireExtinguisher14m/>} />
          <Route path="/fire_extinguisher_15_m" element={<FireExtinguisher15m/>} />
          <Route path="/fire_extinguisher_16_m" element={<FireExtinguisher16m/>} />
          <Route path="/fire_extinguisher_17_m" element={<FireExtinguisher17m/>} />
          <Route path="/fire_extinguisher_18_m" element={<FireExtinguisher18m/>} />
          <Route path="/fire_extinguisher_19_m" element={<FireExtinguisher19m/>} />
          <Route path="/fire_extinguisher_20_m" element={<FireExtinguisher20m/>} />
          <Route path="/fire_extinguisher_21_m" element={<FireExtinguisher21m/>} />
          <Route path="/fire_extinguisher_22_m" element={<FireExtinguisher22m/>} />
          <Route path="/fire_extinguisher_23_m" element={<FireExtinguisher23m/>} />
          <Route path="/fire_extinguisher_24_m" element={<FireExtinguisher24m/>} />
          <Route path="/fire_extinguisher_25_m" element={<FireExtinguisher25m/>} />
          <Route path="/fire_extinguisher_26_m" element={<FireExtinguisher26m/>} />
          <Route path="/fire_extinguisher_27_m" element={<FireExtinguisher27m/>} />
          <Route path="/fire_extinguisher_28_m" element={<FireExtinguisher28m/>} />
          <Route path="/fire_extinguisher_29_m" element={<FireExtinguisher29m/>} />
          <Route path="/fire_extinguisher_30_m" element={<FireExtinguisher30m/>} />
          <Route path="/fire_extinguisher_31_m" element={<FireExtinguisher31m/>} />
          <Route path="/fire_extinguisher_32_m" element={<FireExtinguisher32m/>} />
          <Route path="/fire_extinguisher_33_m" element={<FireExtinguisher33m/>} />
          <Route path="/fire_extinguisher_34_m" element={<FireExtinguisher34m/>} />
          <Route path="/fire_extinguisher_35_m" element={<FireExtinguisher35m/>} />
          <Route path="/fire_extinguisher_36_m" element={<FireExtinguisher36m/>} />
          <Route path="/fire_extinguisher_37_m" element={<FireExtinguisher37m/>} />
          <Route path="/fire_extinguisher_38_m" element={<FireExtinguisher38m/>} />
          <Route path="/fire_extinguisher_39_m" element={<FireExtinguisher39m/>} />
          <Route path="/fire_extinguisher_40_m" element={<FireExtinguisher40m/>} />
          <Route path="/fire_extinguisher_41_m" element={<FireExtinguisher41m/>} />
          <Route path="/fire_extinguisher_42_m" element={<FireExtinguisher42m/>} />
          <Route path="/fire_extinguisher_43_m" element={<FireExtinguisher43m/>} />
          <Route path="/fire_extinguisher_44_m" element={<FireExtinguisher44m/>} />
          <Route path="/fire_extinguisher_45_m" element={<FireExtinguisher45m/>} />
          <Route path="/fire_extinguisher_46_m" element={<FireExtinguisher46m/>} />
          <Route path="/fire_extinguisher_47_m" element={<FireExtinguisher47m/>} />
          <Route path="/fire_extinguisher_48_m" element={<FireExtinguisher48m/>} />
          <Route path="/fire_extinguisher_49_m" element={<FireExtinguisher49m/>} />
          <Route path="/fire_extinguisher_50_m" element={<FireExtinguisher50m/>} />
          <Route path="/fire_extinguisher_51_m" element={<FireExtinguisher51m/>} />
          <Route path="/fire_extinguisher_52_m" element={<FireExtinguisher52m/>} />
          <Route path="/fire_extinguisher_53_m" element={<FireExtinguisher53m/>} />
          <Route path="/fire_extinguisher_54_m" element={<FireExtinguisher54m/>} />
          <Route path="/fire_extinguisher_55_m" element={<FireExtinguisher55m/>} />
          <Route path="/fire_extinguisher_56_m" element={<FireExtinguisher56m/>} />
          <Route path="/fire_extinguisher_57_m" element={<FireExtinguisher57m/>} />
          <Route path="/fire_extinguisher_58_m" element={<FireExtinguisher58m/>} />
          <Route path="/fire_extinguisher_59_m" element={<FireExtinguisher59m/>} />
          <Route path="/fire_extinguisher_60_m" element={<FireExtinguisher60m/>} />
          <Route path="/fire_extinguisher_61_m" element={<FireExtinguisher61m/>} />
          <Route path="/fire_extinguisher_62_m" element={<FireExtinguisher62m/>} />
          <Route path="/fire_extinguisher_63_m" element={<FireExtinguisher63m/>} />
          <Route path="/fire_extinguisher_64_m" element={<FireExtinguisher64m/>} />
          <Route path="/fire_extinguisher_65_m" element={<FireExtinguisher65m/>} />
          <Route path="/fire_extinguisher_66_m" element={<FireExtinguisher66m/>} />
          <Route path="/fire_extinguisher_67_m" element={<FireExtinguisher67m/>} />
          <Route path="/fire_extinguisher_68_m" element={<FireExtinguisher68m/>} />
          <Route path="/fire_extinguisher_69_m" element={<FireExtinguisher69m/>} />
          <Route path="/fire_extinguisher_70_m" element={<FireExtinguisher70m/>} />
          <Route path="/fire_extinguisher_71_m" element={<FireExtinguisher71m/>} />
          <Route path="/fire_extinguisher_72_m" element={<FireExtinguisher72m/>} />
          <Route path="/fire_extinguisher_73_m" element={<FireExtinguisher73m/>} />
          <Route path="/fire_extinguisher_74_m" element={<FireExtinguisher74m/>} />
          <Route path="/fire_extinguisher_75_m" element={<FireExtinguisher75m/>} />
          <Route path="/fire_extinguisher_76_m" element={<FireExtinguisher76m/>} />
          <Route path="/fire_extinguisher_77_m" element={<FireExtinguisher77m/>} />
          <Route path="/fire_extinguisher_78_m" element={<FireExtinguisher78m/>} />
          <Route path="/fire_extinguisher_79_m" element={<FireExtinguisher79m/>} />
          <Route path="/fire_extinguisher_80_m" element={<FireExtinguisher80m/>} />
          <Route path="/fire_extinguisher_81_m" element={<FireExtinguisher81m/>} />
          <Route path="/fire_extinguisher_82_m" element={<FireExtinguisher82m/>} />
          <Route path="/fire_extinguisher_83_m" element={<FireExtinguisher83m/>} />
          <Route path="/fire_extinguisher_84_m" element={<FireExtinguisher84m/>} />
          <Route path="/fire_extinguisher_85_m" element={<FireExtinguisher85m/>} />
          <Route path="/fire_extinguisher_86_m" element={<FireExtinguisher86m/>} />
          <Route path="/fire_extinguisher_87_m" element={<FireExtinguisher87m/>} />
          <Route path="/fire_extinguisher_88_m" element={<FireExtinguisher88m/>} />
          <Route path="/fire_extinguisher_89_m" element={<FireExtinguisher89m/>} />
          <Route path="/fire_extinguisher_90_m" element={<FireExtinguisher90m/>} />
          <Route path="/fire_extinguisher_91_m" element={<FireExtinguisher91m/>} />
          <Route path="/fire_extinguisher_92_m" element={<FireExtinguisher92m/>} />
          <Route path="/fire_extinguisher_93_m" element={<FireExtinguisher93m/>} />
          <Route path="/fire_extinguisher_94_m" element={<FireExtinguisher94m/>} />
          <Route path="/fire_extinguisher_95_m" element={<FireExtinguisher95m/>} />
          <Route path="/fire_extinguisher_96_m" element={<FireExtinguisher96m/>} />
          <Route path="/fire_extinguisher_97_m" element={<FireExtinguisher97m/>} />
          <Route path="/fire_extinguisher_98_m" element={<FireExtinguisher98m/>} />
          <Route path="/fire_extinguisher_99_m" element={<FireExtinguisher99m/>} />
          <Route path="/fire_extinguisher_100_m" element={<FireExtinguisher100m/>} />
          <Route path="/fire_extinguisher_101_m" element={<FireExtinguisher101m/>} />
          <Route path="/fire_extinguisher_102_m" element={<FireExtinguisher102m/>} />
          <Route path="/fire_extinguisher_103_m" element={<FireExtinguisher103m/>} />
          <Route path="/fire_extinguisher_104_m" element={<FireExtinguisher104m/>} />
          <Route path="/fire_extinguisher_105_m" element={<FireExtinguisher105m/>} />
          <Route path="/fire_extinguisher_106_m" element={<FireExtinguisher106m/>} />
          <Route path="/fire_extinguisher_107_m" element={<FireExtinguisher107m/>} />
          <Route path="/fire_extinguisher_108_m" element={<FireExtinguisher108m/>} />
          <Route path="/fire_extinguisher_109_m" element={<FireExtinguisher109m/>} />
          <Route path="/fire_extinguisher_110_m" element={<FireExtinguisher110m/>} />
          <Route path="/fire_extinguisher_111_m" element={<FireExtinguisher111m/>} />
          <Route path="/fire_extinguisher_112_m" element={<FireExtinguisher112m/>} />
          <Route path="/fire_extinguisher_113_m" element={<FireExtinguisher113m/>} />
          <Route path="/fire_extinguisher_114_m" element={<FireExtinguisher114m/>} />
          <Route path="/fire_extinguisher_115_m" element={<FireExtinguisher115m/>} />
          <Route path="/fire_extinguisher_116_m" element={<FireExtinguisher116m/>} />
          <Route path="/fire_extinguisher_117_m" element={<FireExtinguisher117m/>} />
          <Route path="/fire_extinguisher_118_m" element={<FireExtinguisher118m/>} />
          <Route path="/fire_extinguisher_119_m" element={<FireExtinguisher119m/>} />
          <Route path="/fire_extinguisher_120_m" element={<FireExtinguisher120m/>} />
          <Route path="/fire_extinguisher_121_m" element={<FireExtinguisher121m/>} />
          <Route path="/fire_extinguisher_122_m" element={<FireExtinguisher122m/>} />
          <Route path="/fire_extinguisher_123_m" element={<FireExtinguisher123m/>} />
          <Route path="/fire_extinguisher_124_m" element={<FireExtinguisher124m/>} />
          <Route path="/fire_extinguisher_125_m" element={<FireExtinguisher125m/>} />
          <Route path="/fire_extinguisher_126_m" element={<FireExtinguisher126m/>} />
          <Route path="/fire_extinguisher_127_m" element={<FireExtinguisher127m/>} />
          <Route path="/fire_extinguisher_128_m" element={<FireExtinguisher128m/>} />
          <Route path="/fire_extinguisher_129_m" element={<FireExtinguisher129m/>} />
          <Route path="/fire_extinguisher_130_m" element={<FireExtinguisher130m/>} />
          <Route path="/fire_extinguisher_131_m" element={<FireExtinguisher131m/>} />
          <Route path="/fire_extinguisher_132_m" element={<FireExtinguisher132m/>} />
          <Route path="/fire_extinguisher_133_m" element={<FireExtinguisher133m/>} />
          <Route path="/fire_extinguisher_134_m" element={<FireExtinguisher134m/>} />
          <Route path="/fire_extinguisher_135_m" element={<FireExtinguisher135m/>} />
          <Route path="/fire_extinguisher_136_m" element={<FireExtinguisher136m/>} />
          <Route path="/fire_extinguisher_137_m" element={<FireExtinguisher137m/>} />
          <Route path="/fire_extinguisher_138_m" element={<FireExtinguisher138m/>} />
          <Route path="/fire_extinguisher_139_m" element={<FireExtinguisher139m/>} />
          <Route path="/fire_extinguisher_140_m" element={<FireExtinguisher140m/>} />
          <Route path="/fire_extinguisher_141_m" element={<FireExtinguisher141m/>} />
          <Route path="/fire_extinguisher_142_m" element={<FireExtinguisher142m/>} />
          <Route path="/fire_extinguisher_143_m" element={<FireExtinguisher143m/>} />
          <Route path="/fire_extinguisher_144_m" element={<FireExtinguisher144m/>} />
          <Route path="/fire_extinguisher_145_m" element={<FireExtinguisher145m/>} />
          <Route path="/fire_extinguisher_146_m" element={<FireExtinguisher146m/>} />
          <Route path="/fire_extinguisher_147_m" element={<FireExtinguisher147m/>} />
          <Route path="/fire_extinguisher_148_m" element={<FireExtinguisher148m/>} />
          <Route path="/fire_extinguisher_149_m" element={<FireExtinguisher149m/>} />
          <Route path="/fire_extinguisher_150_m" element={<FireExtinguisher150m/>} />
          <Route path="/fire_extinguisher_151_m" element={<FireExtinguisher151m/>} />
          <Route path="/fire_extinguisher_152_m" element={<FireExtinguisher152m/>} />
          <Route path="/fire_extinguisher_153_m" element={<FireExtinguisher153m/>} />
          <Route path="/fire_extinguisher_154_m" element={<FireExtinguisher154m/>} />
          <Route path="/fire_extinguisher_155_m" element={<FireExtinguisher155m/>} />
          <Route path="/fire_extinguisher_156_m" element={<FireExtinguisher156m/>} />
          <Route path="/fire_extinguisher_157_m" element={<FireExtinguisher157m/>} />
          <Route path="/fire_extinguisher_158_m" element={<FireExtinguisher158m/>} />
          <Route path="/fire_extinguisher_159_m" element={<FireExtinguisher159m/>} />
          <Route path="/fire_extinguisher_160_m" element={<FireExtinguisher160m/>} />
          <Route path="/fire_extinguisher_161_m" element={<FireExtinguisher161m/>} />
          <Route path="/fire_extinguisher_162_m" element={<FireExtinguisher162m/>} />
          <Route path="/fire_extinguisher_163_m" element={<FireExtinguisher163m/>} />
          <Route path="/fire_extinguisher_164_m" element={<FireExtinguisher164m/>} />
          <Route path="/fire_extinguisher_165_m" element={<FireExtinguisher165m/>} />
          <Route path="/fire_extinguisher_166_m" element={<FireExtinguisher166m/>} />
          <Route path="/fire_extinguisher_167_m" element={<FireExtinguisher167m/>} />
          <Route path="/fire_extinguisher_168_m" element={<FireExtinguisher168m/>} />
          <Route path="/fire_extinguisher_169_m" element={<FireExtinguisher169m/>} />
          <Route path="/fire_extinguisher_170_m" element={<FireExtinguisher170m/>} />
          <Route path="/fire_extinguisher_171_m" element={<FireExtinguisher171m/>} />
          <Route path="/fire_extinguisher_172_m" element={<FireExtinguisher172m/>} />
          <Route path="/fire_extinguisher_173_m" element={<FireExtinguisher173m/>} />
          <Route path="/fire_extinguisher_174_m" element={<FireExtinguisher174m/>} />
          <Route path="/fire_extinguisher_175_m" element={<FireExtinguisher175m/>} />
          <Route path="/fire_extinguisher_176_m" element={<FireExtinguisher176m/>} />
          <Route path="/fire_extinguisher_177_m" element={<FireExtinguisher177m/>} />
          <Route path="/fire_extinguisher_178_m" element={<FireExtinguisher178m/>} />
          <Route path="/fire_extinguisher_179_m" element={<FireExtinguisher179m/>} />
          <Route path="/fire_extinguisher_180_m" element={<FireExtinguisher180m/>} />
          <Route path="/fire_extinguisher_181_m" element={<FireExtinguisher181m/>} />
          <Route path="/fire_extinguisher_182_m" element={<FireExtinguisher182m/>} />
          <Route path="/fire_extinguisher_183_m" element={<FireExtinguisher183m/>} />
          <Route path="/fire_extinguisher_184_m" element={<FireExtinguisher184m/>} />

          <Route path="/dg_1010_1_m" element={<DG10101m />} />
          <Route path="/dg_1010_2_m" element={<DG10102m />} />
          <Route path="/dg_1010_3_m" element={<DG10103m />} />
          <Route path="/dg_500_1_m" element={<DG5001m />} />
          <Route path="/dg_500_2_m" element={<DG5002m />} />

          <Route path="/air_compressor_1_m" element={<AirCompressor1m />} />
          <Route path="/air_compressor_2_m" element={<AirCompressor2m />} />

          <Route path="/air_dryer_1_m" element={<AirDryer1m />} />
          <Route path="/air_dryer_2_m" element={<AirDryer2m />} />

          <Route path="/water_cooled_chiller_1_m" element={<WaterChiller1m />} />
          <Route path="/water_cooled_chiller_2_m" element={<WaterChiller2m />} />

          <Route path="/diesel_pump_1_m" element={<DieselPump1m/>} /> 

          <Route path="/water_makeup_unit_wcc_1_m" element={<WccWaterMakeup1m/>} />
          <Route path="/water_makeup_unit_wcc_2_m" element={<WccWaterMakeup2m/>} />

          <Route path="/pump_1_m" element={<Pump1m/>} />   
          <Route path="/pump_2_m" element={<Pump2m/>} />   
          <Route path="/pump_3_m" element={<Pump3m/>} /> 
          <Route path="/pump_4_m" element={<Pump4m/>} /> 

          <Route path="/cooling_tower_1_m" element={<CoolingTower1m />} />
          <Route path="/cooling_tower_2_m" element={<CoolingTower2m />} />

          <Route path="/ahu_1_m" element={<AHU1m />} />
          <Route path="/ahu_2_m" element={<AHU2m />} />
          <Route path="/ahu_3_m" element={<AHU3m />} />
          <Route path="/ahu_4_m" element={<AHU4m />} />
          <Route path="/ahu_5_m" element={<AHU5m />} />
          <Route path="/ahu_6_m" element={<AHU6m />} />
          <Route path="/ahu_7_m" element={<AHU7m />} />
          <Route path="/ahu_8_m" element={<AHU8m />} />
          <Route path="/ahu_9_m" element={<AHU9m />} />
          <Route path="/ahu_10_m" element={<AHU10m />} />
          <Route path="/ahu_11_m" element={<AHU11m />} />
          <Route path="/ahu_12_m" element={<AHU12m />} />
          <Route path="/ahu_13_m" element={<AHU13m />} />

          <Route path="/mau_1_m" element={<MAU1m />} />
          <Route path="/mau_2_m" element={<MAU2m />} />
          <Route path="/mau_3_m" element={<MAU3m />} />

          <Route path="/swagon_compressor_1_m" element={<SwagonCompressor1m />} />
          <Route path="/swagon_compressor_2_m" element={<SwagonCompressor2m />} />

          <Route path="/rapid_rolling_shutter_1_m" element={<RapidRollingShutter1m/>} /> 
          <Route path="/rapid_rolling_shutter_2_m" element={<RapidRollingShutter2m/>} /> 
          <Route path="/rapid_rolling_shutter_3_m" element={<RapidRollingShutter3m/>} /> 
          <Route path="/rapid_rolling_shutter_4_m" element={<RapidRollingShutter4m/>} /> 
          <Route path="/rapid_rolling_shutter_5_m" element={<RapidRollingShutter5m/>} /> 
          <Route path="/rapid_rolling_shutter_6_m" element={<RapidRollingShutter6m/>} /> 
          <Route path="/rapid_rolling_shutter_7_m" element={<RapidRollingShutter7m/>} /> 
          <Route path="/rapid_rolling_shutter_8_m" element={<RapidRollingShutter8m/>} /> 
          <Route path="/rapid_rolling_shutter_9_m" element={<RapidRollingShutter9m/>} /> 
          <Route path="/rapid_rolling_shutter_10_m" element={<RapidRollingShutter10m/>} /> 
          <Route path="/rapid_rolling_shutter_11_m" element={<RapidRollingShutter11m/>} /> 
          <Route path="/rapid_rolling_shutter_12_m" element={<RapidRollingShutter12m/>} /> 
          <Route path="/rapid_rolling_shutter_13_m" element={<RapidRollingShutter13m/>} /> 
          <Route path="/rapid_rolling_shutter_14_m" element={<RapidRollingShutter14m/>} /> 

          <Route path="/rapid_sliding_gate_1_m" element={<RapidSlidingGate1m/>} />
          <Route path="/rapid_sliding_gate_2_m" element={<RapidSlidingGate2m/>} />
          <Route path="/rapid_sliding_gate_3_m" element={<RapidSlidingGate3m/>} />
          <Route path="/rapid_sliding_gate_4_m" element={<RapidSlidingGate4m/>} />
          <Route path="/rapid_sliding_gate_5_m" element={<RapidSlidingGate5m/>} />
          <Route path="/rapid_sliding_gate_6_m" element={<RapidSlidingGate6m/>} />

          <Route path="/motorised_sliding_gate_1_m" element={<MotorisedSlidingGate1m/>} />
          <Route path="/motorised_sliding_gate_2_m" element={<MotorisedSlidingGate2m/>} />
          <Route path="/motorised_sliding_gate_3_m" element={<MotorisedSlidingGate3m/>} />

          <Route path="/split_ac_1_m" element={<SplitAC1m />} /> 
          <Route path="/split_ac_2_m" element={<SplitAC2m />} /> 
          <Route path="/split_ac_3_m" element={<SplitAC3m />} /> 
          <Route path="/split_ac_4_m" element={<SplitAC4m />} /> 
          <Route path="/split_ac_5_m" element={<SplitAC5m />} /> 
          <Route path="/split_ac_6_m" element={<SplitAC6m />} /> 

          <Route path="/cassette_ac_1_m" element={<CassetteAC1m />} />
          <Route path="/cassette_ac_2_m" element={<CassetteAC2m />} />
          <Route path="/cassette_ac_3_m" element={<CassetteAC3m />} />
          <Route path="/cassette_ac_4_m" element={<CassetteAC4m />} />
          <Route path="/cassette_ac_5_m" element={<CassetteAC5m />} />
          <Route path="/cassette_ac_6_m" element={<CassetteAC6m />} />
          <Route path="/cassette_ac_7_m" element={<CassetteAC7m />} />
          <Route path="/cassette_ac_8_m" element={<CassetteAC8m />} />
          <Route path="/cassette_ac_9_m" element={<CassetteAC9m />} />
          <Route path="/cassette_ac_10_m" element={<CassetteAC10m />} />
          <Route path="/cassette_ac_11_m" element={<CassetteAC11m />} />
          <Route path="/cassette_ac_12_m" element={<CassetteAC12m />} />
          <Route path="/cassette_ac_13_m" element={<CassetteAC13m />} />
          <Route path="/cassette_ac_14_m" element={<CassetteAC14m />} />
          <Route path="/cassette_ac_15_m" element={<CassetteAC15m />} />
          <Route path="/cassette_ac_16_m" element={<CassetteAC16m />} />
          <Route path="/cassette_ac_17_m" element={<CassetteAC17m />} />
          <Route path="/cassette_ac_18_m" element={<CassetteAC18m />} />
          <Route path="/cassette_ac_19_m" element={<CassetteAC19m />} />
          <Route path="/cassette_ac_20_m" element={<CassetteAC20m />} />
          <Route path="/cassette_ac_21_m" element={<CassetteAC21m />} />
          <Route path="/cassette_ac_22_m" element={<CassetteAC22m />} />
          <Route path="/cassette_ac_23_m" element={<CassetteAC23m />} />
          <Route path="/cassette_ac_24_m" element={<CassetteAC24m />} />

          <Route path="/street_lights_1_m" element={<StreetLight1m/>} />
          <Route path="/street_lights_2_m" element={<StreetLight2m/>} />
          <Route path="/street_lights_3_m" element={<StreetLight3m/>} />
          <Route path="/street_lights_4_m" element={<StreetLight4m/>} />
          <Route path="/street_lights_5_m" element={<StreetLight5m/>} />
          <Route path="/street_lights_6_m" element={<StreetLight6m/>} />
          <Route path="/street_lights_7_m" element={<StreetLight7m/>} />

          <Route path="/canteen_led_lights_1_m" element={<Canteen1m />} />
          <Route path="/canteen_led_lights_2_m" element={<Canteen2m />} />
          <Route path="/canteen_led_lights_3_m" element={<Canteen3m />} />
          <Route path="/canteen_led_lights_4_m" element={<Canteen4m />} />
          <Route path="/canteen_led_lights_5_m" element={<Canteen5m />} />
          <Route path="/canteen_led_lights_6_m" element={<Canteen6m />} />
          <Route path="/canteen_led_lights_7_m" element={<Canteen7m />} />
          <Route path="/canteen_led_lights_8_m" element={<Canteen8m />} />
          <Route path="/canteen_led_lights_9_m" element={<Canteen9m />} />
          <Route path="/canteen_led_lights_10_m" element={<Canteen10m />} />
          <Route path="/canteen_led_lights_11_m" element={<Canteen11m />} />
          <Route path="/canteen_led_lights_12_m" element={<Canteen12m />} />
          <Route path="/canteen_led_lights_13_m" element={<Canteen13m />} />
          <Route path="/canteen_led_lights_14_m" element={<Canteen14m />} />
          <Route path="/canteen_led_lights_15_m" element={<Canteen15m />} />
          <Route path="/canteen_led_lights_16_m" element={<Canteen16m />} />
          <Route path="/canteen_led_lights_17_m" element={<Canteen17m />} />
          <Route path="/canteen_led_lights_18_m" element={<Canteen18m />} />
          <Route path="/canteen_led_lights_19_m" element={<Canteen19m />} />
          <Route path="/canteen_led_lights_20_m" element={<Canteen20m />} />
          <Route path="/canteen_led_lights_21_m" element={<Canteen21m />} />
          <Route path="/canteen_led_lights_22_m" element={<Canteen22m />} />
          <Route path="/canteen_led_lights_23_m" element={<Canteen23m />} />
          <Route path="/canteen_led_lights_24_m" element={<Canteen24m />} />
          <Route path="/canteen_led_lights_25_m" element={<Canteen25m />} />
          <Route path="/canteen_led_lights_26_m" element={<Canteen26m />} />
          <Route path="/canteen_led_lights_27_m" element={<Canteen27m />} />
          <Route path="/canteen_led_lights_28_m" element={<Canteen28m />} />
          <Route path="/canteen_led_lights_29_m" element={<Canteen29m />} />
          <Route path="/canteen_led_lights_30_m" element={<Canteen30m />} />
          <Route path="/canteen_led_lights_31_m" element={<Canteen31m />} />
          <Route path="/canteen_led_lights_32_m" element={<Canteen32m />} />
          <Route path="/canteen_led_lights_33_m" element={<Canteen33m />} />
          <Route path="/canteen_led_lights_34_m" element={<Canteen34m />} />
          <Route path="/canteen_led_lights_35_m" element={<Canteen35m />} />
          <Route path="/canteen_led_lights_36_m" element={<Canteen36m />} />
          <Route path="/canteen_led_lights_37_m" element={<Canteen37m />} />
          <Route path="/canteen_led_lights_38_m" element={<Canteen38m />} />
          <Route path="/canteen_led_lights_39_m" element={<Canteen39m />} />
          <Route path="/canteen_led_lights_40_m" element={<Canteen40m />} />
          <Route path="/canteen_led_lights_41_m" element={<Canteen41m />} />
          <Route path="/canteen_led_lights_42_m" element={<Canteen42m />} />
          <Route path="/canteen_led_lights_43_m" element={<Canteen43m />} />
          <Route path="/canteen_led_lights_44_m" element={<Canteen44m />} />
          <Route path="/canteen_led_lights_45_m" element={<Canteen45m />} />
          <Route path="/canteen_led_lights_46_m" element={<Canteen46m />} />
          <Route path="/canteen_led_lights_47_m" element={<Canteen47m />} />
          <Route path="/canteen_led_lights_48_m" element={<Canteen48m />} />
          <Route path="/canteen_led_lights_49_m" element={<Canteen49m />} />
          <Route path="/canteen_led_lights_50_m" element={<Canteen50m />} />
          <Route path="/canteen_led_lights_51_m" element={<Canteen51m />} />
          <Route path="/canteen_led_lights_52_m" element={<Canteen52m />} />
          <Route path="/canteen_led_lights_53_m" element={<Canteen53m />} />
          <Route path="/canteen_led_lights_54_m" element={<Canteen54m />} />
          <Route path="/canteen_led_lights_55_m" element={<Canteen55m />} />
          <Route path="/canteen_led_lights_56_m" element={<Canteen56m />} />
          <Route path="/canteen_led_lights_57_m" element={<Canteen57m />} />
          <Route path="/canteen_led_lights_58_m" element={<Canteen58m />} />
          <Route path="/canteen_led_lights_59_m" element={<Canteen59m />} />
          <Route path="/canteen_led_lights_60_m" element={<Canteen60m />} />
          <Route path="/canteen_led_lights_61_m" element={<Canteen61m />} />
          <Route path="/canteen_led_lights_62_m" element={<Canteen62m />} />
          <Route path="/canteen_led_lights_63_m" element={<Canteen63m />} />
          <Route path="/canteen_led_lights_64_m" element={<Canteen64m />} />
          <Route path="/canteen_led_lights_65_m" element={<Canteen65m />} />
          <Route path="/canteen_led_lights_66_m" element={<Canteen66m />} />
          <Route path="/canteen_led_lights_67_m" element={<Canteen67m />} />
          <Route path="/canteen_led_lights_68_m" element={<Canteen68m />} />
          <Route path="/canteen_led_lights_69_m" element={<Canteen69m />} />
          <Route path="/canteen_led_lights_70_m" element={<Canteen70m />} />
          <Route path="/canteen_led_lights_71_m" element={<Canteen71m />} />
          <Route path="/canteen_led_lights_72_m" element={<Canteen72m />} />
          <Route path="/canteen_led_lights_73_m" element={<Canteen73m />} />
          <Route path="/canteen_led_lights_74_m" element={<Canteen74m />} />
          <Route path="/canteen_led_lights_75_m" element={<Canteen75m />} />
          <Route path="/canteen_led_lights_76_m" element={<Canteen76m />} />
          <Route path="/canteen_led_lights_77_m" element={<Canteen77m />} />
          <Route path="/canteen_led_lights_78_m" element={<Canteen78m />} />
          <Route path="/canteen_led_lights_79_m" element={<Canteen79m />} />
          <Route path="/canteen_led_lights_80_m" element={<Canteen80m />} />
          <Route path="/canteen_led_lights_81_m" element={<Canteen81m />} />
          <Route path="/canteen_led_lights_82_m" element={<Canteen82m />} />
          <Route path="/canteen_led_lights_83_m" element={<Canteen83m />} />
          <Route path="/canteen_led_lights_84_m" element={<Canteen84m />} />
          <Route path="/canteen_led_lights_85_m" element={<Canteen85m />} />
          <Route path="/canteen_led_lights_86_m" element={<Canteen86m />} />
          <Route path="/canteen_led_lights_87_m" element={<Canteen87m />} />
          <Route path="/canteen_led_lights_88_m" element={<Canteen88m />} />
          <Route path="/canteen_led_lights_89_m" element={<Canteen89m />} />
          <Route path="/canteen_led_lights_90_m" element={<Canteen90m />} />
          <Route path="/canteen_led_lights_91_m" element={<Canteen91m />} />

          <Route path="/emergency_door_1_m" element={<EmergencyDoor1m/>} /> 
          <Route path="/emergency_door_2_m" element={<EmergencyDoor2m/>} /> 

          <Route path="/smoke_detector_1_m" element={<SmokeDetector1m/>} /> 
          <Route path="/beam_detector_1_m" element={<BeamDetector1m/>} /> 

          <Route path="/water_line_1_m" element={<WaterLine1m/>} /> 
          <Route path="/water_line_2_m" element={<WaterLine2m/>} /> 
          <Route path="/water_line_3_m" element={<WaterLine3m/>} /> 
          <Route path="/water_line_4_m" element={<WaterLine4m/>} /> 
          <Route path="/water_line_5_m" element={<WaterLine5m/>} /> 
          <Route path="/water_line_6_m" element={<WaterLine6m/>} /> 

          <Route path="/air_line_1_m" element={<AirLine1m/>} /> 
          <Route path="/air_line_2_m" element={<AirLine2m/>} /> 
          <Route path="/air_line_3_m" element={<AirLine3m/>} /> 
          <Route path="/air_line_4_m" element={<AirLine4m/>} /> 

          <Route path="/fire_water_line_1_m" element={<FireWaterLine1m/>} /> 
          <Route path="/fire_water_line_2_m" element={<FireWaterLine2m/>} /> 
          <Route path="/fire_water_line_3_m" element={<FireWaterLine3m/>} /> 
          <Route path="/fire_water_line_4_m" element={<FireWaterLine4m/>} /> 
          <Route path="/fire_water_line_5_m" element={<FireWaterLine5m/>} /> 
          <Route path="/fire_water_line_6_m" element={<FireWaterLine6m/>} /> 
          
          <Route path="/panel_1_m" element={<Panel1m/>} /> 
          <Route path="/panel_2_m" element={<Panel2m/>} /> 
          <Route path="/panel_3_m" element={<Panel3m/>} /> 
          <Route path="/panel_4_m" element={<Panel4m/>} /> 
          <Route path="/panel_5_m" element={<Panel5m/>} /> 
          <Route path="/panel_6_m" element={<Panel6m/>} /> 

          <Route path="/air_chiller_1_m" element={<AirChiller1m />} />
          <Route path="/stp_1_m" element={<STP1m />} />
          <Route path="/air_receiver_1_m" element={<AirRecieverTank1m />} /> 
          <Route path="/ups_1_m" element={<UPS1m />} /> 
          <Route path="/swizer_lift_1_m" element={<SwizerLift1m />} /> 
          <Route path="/stacker_manual_1_m" element={<Stacker1m/>} /> 
          <Route path="/stacker_battery_1_m" element={<StackerBattery1m/>} /> 
          <Route path="/fire_hydrant_system_1_m" element={<FireHydrantSystem1m/>} /> 
          <Route path="/transformer_1_m" element={<Transformer1m/>} /> 
          <Route path="/panel_wo_acb_1_m" element={<PanelWoAbc1m/>} /> 
          <Route path="/panel_with_acb_1_m" element={<PanelWithAbc1m/>} /> 
          <Route path="/shop_floor_tubelights_1_m" element={<ShopFLoor1m/>} /> 
          <Route path="/vaccum_circuit_breaker_vcb_1_m" element={<VCB1m/>} /> 
          <Route path="/air_circuit_breaker_acb_1_m" element={<ACB1m/>} /> 
          <Route path="/ht_lt_panel_1_m" element={<HtLtPanel1m/>} /> 
          <Route path="/rolling_shutter_1_m" element={<RollingShutter1m/>} /> 
          <Route path="/softener_plant_1_m" element={<SoftenerPlant1m/>} /> 
          <Route path="/pdb_panel_1_m" element={<PDB1m/>} /> 
          <Route path="/eldm_1_m" element={<ELDB1m/>} /> 
          <Route path="/upsdb_panel_1_m" element={<UPSDB1m/>} /> 
          <Route path="/ldb_1_m" element={<LDB1m/>} /> 
          <Route path="/ddc_panel_1_m" element={<DDC1m/>} /> 
          <Route path="/spinkler_1_m" element={<Sprinkler1m/>} /> 
          <Route path="/manual_call_point_1_m" element={<ManualCallPt1m/>} /> 
          <Route path="/hooter_cum_strobe_1_m" element={<HooterStrobe1m/>} /> 
          <Route path="/fire_hydrant_1_m" element={<FireHydrant1m/>} /> 
          <Route path="/hose_reel_1_m" element={<HoseReel1m/>} /> 
          <Route path="/metal_double_leaf_door_1_m" element={<MetalDoubleLeafDoor1m/>} />   
          <Route path="/metal_single_leaf_door_1_m" element={<MetalSingleLeafDoor1m/>} />   
          <Route path="/wooden_double_leaf_door_1_m" element={<WoodenDoubleLeafDoor1m/>} />   
          <Route path="/wooden_single_leaf_door_1_m" element={<WoodenSingleLeafDoor1m/>} />   
          <Route path="/glass_round_door_1_m" element={<GlassRoundDoor1m/>} />   
          <Route path="/glass_double_leaf_door_1_m" element={<GlassDoubleLeafDoor1m/>} />   
          <Route path="/glass_single_leaf_door_1_m" element={<GlassSingleLeafDoor1m/>} />   
          <Route path="/frp_door_1_m" element={<FRPDoor1m/>} />   
          <Route path="/water_makeup_unit_acc_1_m" element={<AccWaterMakeup1m/>} />   
          <Route path="/retractable_gate_1_m" element={<RetractableGate1m/>} />   
          <Route path="/softener_motor_1_m" element={<SoftnerMotor1m/>} />   
          <Route path="/softener_pump_1_m" element={<SoftnerPump1m/>} />   
          <Route path="/stp_pump_motor_1_m" element={<StpPumpMotor1m/>} />   
          <Route path="/stp_pump_1_m" element={<StpPump1m/>} />   
          <Route path="/garden_pump_1_m" element={<GardenPump1m/>} />   
          <Route path="/stp_blower_1_m" element={<StpBlower1m/>} />   
          <Route path="/wrc_room_ahu_1_m" element={<WrcAhuUnit1m/>} />   


          {/* Quaterly Checksheets */}        
          <Route path="/air_compressor_1_q" element={<AirCompressor1q/>} />
          <Route path="/dg_1010_1_q" element={<DG10101q/>} />
          <Route path="/dg_500_1_q" element={<DG5001q/>} />
          <Route path="/ahu_1_1_q" element={<AHU1q/>} />

          <Route path="/air_chiller_1_q" element={<AirChiller1q/>} />
          <Route path="/air_chiller_2_q" element={<AirChiller2q/>} />
          
          <Route path="/water_chiller_1_q" element={<WaterChiller1q/>} />
          <Route path="/water_chiller_2_q" element={<WaterChiller2q/>} />
          <Route path="/water_chiller_3_q" element={<WaterChiller3q/>} />
          <Route path="/water_chiller_4_q" element={<WaterChiller4q/>} />
          <Route path="/water_chiller_5_q" element={<WaterChiller5q/>} />
          <Route path="/water_chiller_6_q" element={<WaterChiller6q/>} />

          <Route path="/cooling_tower_1_q" element={<CoolingTower1q/>} />
          <Route path="/stp_1_q" element={<Stp1q/>} />
          <Route path="/air_dryer_1_q" element={<AirDryer1q/>} />
          <Route path="/air_receiver_tank_1_q" element={<AirrecieverTank1q/>} />

          <Route path="/ups_1_q" element={<Ups1q/>} />
          <Route path="/ups_2_q" element={<Ups2q/>} />
          <Route path="/ups_3_q" element={<Ups3q/>} />
          <Route path="/ups_4_q" element={<Ups4q/>} />
          <Route path="/ups_5_q" element={<Ups5q/>} />
          <Route path="/ups_6_q" element={<Ups6q/>} />
          <Route path="/ups_7_q" element={<Ups7q/>} />
          <Route path="/ups_8_q" element={<Ups8q/>} />
          <Route path="/ups_9_q" element={<Ups9q/>} />
          <Route path="/ups_10_q" element={<Ups10q/>} />
          <Route path="/ups_11_q" element={<Ups11q/>} />
          <Route path="/ups_12_q" element={<Ups12q/>} />
          <Route path="/ups_13_q" element={<Ups13q/>} />
          <Route path="/ups_14_q" element={<Ups14q/>} />
          <Route path="/ups_15_q" element={<Ups15q/>} />
          <Route path="/ups_16_q" element={<Ups16q/>} />
          <Route path="/ups_17_q" element={<Ups17q/>} />
          <Route path="/ups_18_q" element={<Ups18q/>} />


          <Route path="/swizer_lift_1_q" element={<SwizerLift1q/>} />

          <Route path="/cassette_ac_1_q" element={<CassetteAC1q/>} />
          <Route path="/cassette_ac_2_q" element={<CassetteAC2q/>} />
          <Route path="/cassette_ac_3_q" element={<CassetteAC3q/>} />
          <Route path="/cassette_ac_4_q" element={<CassetteAC4q/>} />
          <Route path="/cassette_ac_5_q" element={<CassetteAC5q/>} />
          <Route path="/cassette_ac_6_q" element={<CassetteAC6q/>} />
          <Route path="/cassette_ac_7_q" element={<CassetteAC7q/>} />
          <Route path="/cassette_ac_8_q" element={<CassetteAC8q/>} />
          <Route path="/cassette_ac_9_q" element={<CassetteAC9q/>} />
          <Route path="/cassette_ac_10_q" element={<CassetteAC10q/>} />
          <Route path="/cassette_ac_11_q" element={<CassetteAC11q/>} />
          <Route path="/cassette_ac_12_q" element={<CassetteAC12q/>} />
          <Route path="/cassette_ac_13_q" element={<CassetteAC13q/>} />
          <Route path="/cassette_ac_14_q" element={<CassetteAC14q/>} />
          <Route path="/cassette_ac_15_q" element={<CassetteAC15q/>} />
          <Route path="/cassette_ac_16_q" element={<CassetteAC16q/>} />
          <Route path="/cassette_ac_17_q" element={<CassetteAC17q/>} />
          <Route path="/cassette_ac_18_q" element={<CassetteAC18q/>} />
          <Route path="/cassette_ac_19_q" element={<CassetteAC19q/>} />
          <Route path="/cassette_ac_20_q" element={<CassetteAC20q/>} />
          <Route path="/cassette_ac_21_q" element={<CassetteAC21q/>} />
          <Route path="/cassette_ac_22_q" element={<CassetteAC22q/>} />
          <Route path="/cassette_ac_23_q" element={<CassetteAC23q/>} />
          <Route path="/cassette_ac_24_q" element={<CassetteAC24q/>} />
          <Route path="/cassette_ac_25_q" element={<CassetteAC25q/>} />
          <Route path="/cassette_ac_26_q" element={<CassetteAC26q/>} />
          <Route path="/cassette_ac_27_q" element={<CassetteAC27q/>} />
          <Route path="/cassette_ac_28_q" element={<CassetteAC28q/>} />
          <Route path="/cassette_ac_29_q" element={<CassetteAC29q/>} />
          <Route path="/cassette_ac_30_q" element={<CassetteAC30q/>} />
          <Route path="/cassette_ac_31_q" element={<CassetteAC31q/>} />

          <Route path="/split_ac_1_q" element={<SplitAC1q/>} />
          <Route path="/split_ac_2_q" element={<SplitAC2q/>} />
          <Route path="/split_ac_3_q" element={<SplitAC3q/>} />
          <Route path="/split_ac_4_q" element={<SplitAC4q/>} />
          <Route path="/split_ac_5_q" element={<SplitAC5q/>} />
          <Route path="/split_ac_6_q" element={<SplitAC6q/>} />
          <Route path="/split_ac_7_q" element={<SplitAC7q/>} />
          <Route path="/split_ac_8_q" element={<SplitAC8q/>} />
          <Route path="/split_ac_9_q" element={<SplitAC9q/>} />
          <Route path="/split_ac_10_q" element={<SplitAC10q/>} />
          <Route path="/split_ac_11_q" element={<SplitAC11q/>} />
          <Route path="/split_ac_12_q" element={<SplitAC12q/>} />
          <Route path="/split_ac_13_q" element={<SplitAC13q/>} />
          <Route path="/split_ac_14_q" element={<SplitAC14q/>} />
          <Route path="/split_ac_15_q" element={<SplitAC15q/>} />
          <Route path="/split_ac_16_q" element={<SplitAC16q/>} />
          <Route path="/split_ac_17_q" element={<SplitAC17q/>} />
          <Route path="/split_ac_18_q" element={<SplitAC18q/>} />
          <Route path="/split_ac_19_q" element={<SplitAC19q/>} />
          <Route path="/split_ac_20_q" element={<SplitAC20q/>} />
          <Route path="/split_ac_21_q" element={<SplitAC21q/>} />
          <Route path="/split_ac_22_q" element={<SplitAC22q/>} />
          <Route path="/split_ac_23_q" element={<SplitAC23q/>} />

          <Route path="/swegon_compressor_1_q" element={<SwagonCompressor1q/>} />

          <Route path="/stacker_manual_1_q" element={<Stacker1q/>} />
          <Route path="/stacker_manual_2_q" element={<Stacker2q/>} />

          <Route path="/stacker_battery_1_q" element={<StackerBattery1q/>} />
          <Route path="/stacker_battery_2_q" element={<StackerBattery2q/>} />
          <Route path="/stacker_battery_3_q" element={<StackerBattery3q/>} />
          <Route path="/stacker_battery_4_q" element={<StackerBattery4q/>} />
          <Route path="/stacker_battery_5_q" element={<StackerBattery5q/>} />

          <Route path="/diesel_pump_1_q" element={<DisealPump1q/>} />
          <Route path="/fire_hydrant_system_1_q" element={<FireHydrantSystem1q/>} />

          <Route path="/street_lights_1_q" element={<StreetLight1q/>} />
          <Route path="/street_lights_2_q" element={<StreetLight2q/>} />
          <Route path="/street_lights_3_q" element={<StreetLight3q/>} />
          <Route path="/street_lights_4_q" element={<StreetLight4q/>} />
          <Route path="/street_lights_5_q" element={<StreetLight5q/>} />

          <Route path="/inhouse_lights_1_q" element={<InhouseLight1q/>} />
          <Route path="/inhouse_lights_2_q" element={<InhouseLight2q/>} />
          <Route path="/inhouse_lights_3_q" element={<InhouseLight3q/>} />
          <Route path="/inhouse_lights_4_q" element={<InhouseLight4q/>} />
          <Route path="/inhouse_lights_5_q" element={<InhouseLight5q/>} />
          <Route path="/inhouse_lights_6_q" element={<InhouseLight6q/>} />
          <Route path="/inhouse_lights_7_q" element={<InhouseLight7q/>} />
          <Route path="/inhouse_lights_8_q" element={<InhouseLight8q/>} />
          <Route path="/inhouse_lights_9_q" element={<InhouseLight9q/>} />
          <Route path="/inhouse_lights_10_q" element={<InhouseLight10q/>} />
          <Route path="/inhouse_lights_11_q" element={<InhouseLight11q/>} />
          <Route path="/inhouse_lights_12_q" element={<InhouseLight12q/>} />
          <Route path="/inhouse_lights_13_q" element={<InhouseLight13q/>} />
          <Route path="/inhouse_lights_14_q" element={<InhouseLight14q/>} />
          <Route path="/inhouse_lights_15_q" element={<InhouseLight15q/>} />
          <Route path="/inhouse_lights_16_q" element={<InhouseLight16q/>} />
          <Route path="/inhouse_lights_17_q" element={<InhouseLight17q/>} />
          <Route path="/inhouse_lights_18_q" element={<InhouseLight18q/>} />
          <Route path="/inhouse_lights_19_q" element={<InhouseLight19q/>} />
          <Route path="/inhouse_lights_20_q" element={<InhouseLight20q/>} />
          <Route path="/inhouse_lights_21_q" element={<InhouseLight21q/>} />
          <Route path="/inhouse_lights_22_q" element={<InhouseLight22q/>} />
          <Route path="/inhouse_lights_23_q" element={<InhouseLight23q/>} />
          <Route path="/inhouse_lights_24_q" element={<InhouseLight24q/>} />
          <Route path="/inhouse_lights_25_q" element={<InhouseLight25q/>} />
          <Route path="/inhouse_lights_26_q" element={<InhouseLight26q/>} />
          <Route path="/inhouse_lights_27_q" element={<InhouseLight27q/>} />
          <Route path="/inhouse_lights_28_q" element={<InhouseLight28q/>} />
          <Route path="/inhouse_lights_29_q" element={<InhouseLight29q/>} />
          <Route path="/inhouse_lights_30_q" element={<InhouseLight30q/>} />
          <Route path="/inhouse_lights_31_q" element={<InhouseLight31q/>} />
          <Route path="/inhouse_lights_32_q" element={<InhouseLight32q/>} />
          <Route path="/inhouse_lights_33_q" element={<InhouseLight33q/>} />
          <Route path="/inhouse_lights_34_q" element={<InhouseLight34q/>} />
          <Route path="/inhouse_lights_35_q" element={<InhouseLight35q/>} />
          <Route path="/inhouse_lights_36_q" element={<InhouseLight36q/>} />
          <Route path="/inhouse_lights_37_q" element={<InhouseLight37q/>} />
          <Route path="/inhouse_lights_38_q" element={<InhouseLight38q/>} />
          <Route path="/inhouse_lights_39_q" element={<InhouseLight39q/>} />
          <Route path="/inhouse_lights_40_q" element={<InhouseLight40q/>} />
          <Route path="/inhouse_lights_41_q" element={<InhouseLight41q/>} />
          <Route path="/inhouse_lights_42_q" element={<InhouseLight42q/>} />
          <Route path="/inhouse_lights_43_q" element={<InhouseLight43q/>} />
          <Route path="/inhouse_lights_44_q" element={<InhouseLight44q/>} />
          <Route path="/inhouse_lights_45_q" element={<InhouseLight45q/>} />
          <Route path="/inhouse_lights_46_q" element={<InhouseLight46q/>} />
          <Route path="/inhouse_lights_47_q" element={<InhouseLight47q/>} />
          <Route path="/inhouse_lights_48_q" element={<InhouseLight48q/>} />
          <Route path="/inhouse_lights_49_q" element={<InhouseLight49q/>} />
          <Route path="/inhouse_lights_50_q" element={<InhouseLight50q/>} />
          <Route path="/inhouse_lights_51_q" element={<InhouseLight51q/>} />
          <Route path="/inhouse_lights_52_q" element={<InhouseLight52q/>} />
          <Route path="/inhouse_lights_53_q" element={<InhouseLight53q/>} />
          <Route path="/inhouse_lights_54_q" element={<InhouseLight54q/>} />
          <Route path="/inhouse_lights_55_q" element={<InhouseLight55q/>} />
          <Route path="/inhouse_lights_56_q" element={<InhouseLight56q/>} />
          <Route path="/inhouse_lights_57_q" element={<InhouseLight57q/>} />
          <Route path="/inhouse_lights_58_q" element={<InhouseLight58q/>} />
          <Route path="/inhouse_lights_59_q" element={<InhouseLight59q/>} />
          <Route path="/inhouse_lights_60_q" element={<InhouseLight60q/>} />
          <Route path="/inhouse_lights_61_q" element={<InhouseLight61q/>} />
          <Route path="/inhouse_lights_62_q" element={<InhouseLight62q/>} />
          <Route path="/inhouse_lights_63_q" element={<InhouseLight63q/>} />
          <Route path="/inhouse_lights_64_q" element={<InhouseLight64q/>} />
          <Route path="/inhouse_lights_65_q" element={<InhouseLight65q/>} />
          <Route path="/inhouse_lights_66_q" element={<InhouseLight66q/>} />
          <Route path="/inhouse_lights_67_q" element={<InhouseLight67q/>} />
          <Route path="/inhouse_lights_68_q" element={<InhouseLight68q/>} />
          <Route path="/inhouse_lights_69_q" element={<InhouseLight69q/>} />
          <Route path="/inhouse_lights_70_q" element={<InhouseLight70q/>} />
          <Route path="/inhouse_lights_71_q" element={<InhouseLight71q/>} />
          <Route path="/inhouse_lights_72_q" element={<InhouseLight72q/>} />
          <Route path="/inhouse_lights_73_q" element={<InhouseLight73q/>} />
          <Route path="/inhouse_lights_74_q" element={<InhouseLight74q/>} />
          <Route path="/inhouse_lights_75_q" element={<InhouseLight75q/>} />
          <Route path="/inhouse_lights_76_q" element={<InhouseLight76q/>} />
          <Route path="/inhouse_lights_77_q" element={<InhouseLight77q/>} />
          <Route path="/inhouse_lights_78_q" element={<InhouseLight78q/>} />
          <Route path="/inhouse_lights_79_q" element={<InhouseLight79q/>} />
          <Route path="/inhouse_lights_80_q" element={<InhouseLight80q/>} />
          <Route path="/inhouse_lights_81_q" element={<InhouseLight81q/>} />
          <Route path="/inhouse_lights_82_q" element={<InhouseLight82q/>} />
          <Route path="/inhouse_lights_83_q" element={<InhouseLight83q/>} />
          <Route path="/inhouse_lights_84_q" element={<InhouseLight84q/>} />
          <Route path="/inhouse_lights_85_q" element={<InhouseLight85q/>} />
          <Route path="/inhouse_lights_86_q" element={<InhouseLight86q/>} />
          <Route path="/inhouse_lights_87_q" element={<InhouseLight87q/>} />
          <Route path="/inhouse_lights_88_q" element={<InhouseLight88q/>} />
          <Route path="/inhouse_lights_89_q" element={<InhouseLight89q/>} />
          <Route path="/inhouse_lights_90_q" element={<InhouseLight90q/>} />
          <Route path="/inhouse_lights_91_q" element={<InhouseLight91q/>} />
          <Route path="/inhouse_lights_92_q" element={<InhouseLight92q/>} />
          <Route path="/inhouse_lights_93_q" element={<InhouseLight93q/>} />
          <Route path="/inhouse_lights_94_q" element={<InhouseLight94q/>} />
          <Route path="/inhouse_lights_95_q" element={<InhouseLight95q/>} />
          <Route path="/inhouse_lights_96_q" element={<InhouseLight96q/>} />
          <Route path="/inhouse_lights_97_q" element={<InhouseLight97q/>} />
          <Route path="/inhouse_lights_98_q" element={<InhouseLight98q/>} />
          <Route path="/inhouse_lights_99_q" element={<InhouseLight99q/>} />


          <Route path="/shop_floor_lights_1_q" element={<ShopFloorLights1q/>} />
          <Route path="/ht_lt_panel_1_q" element={<HtLtPanel1q/>} />
          <Route path="/motorised_sliding_gate_1_q" element={<MotorisedSlidingGate1q/>} />
          <Route path="/rapid_sliding_gate_1_q" element={<RapidSlidingGate1q/>} />
          <Route path="/rapid_rolling_shutter_1_q" element={<RapidRollingShutter1q/>} />

          <Route path="/rolling_shutter_1_q" element={<RollingShutter1q/>} />
          <Route path="/rolling_shutter_2_q" element={<RollingShutter2q/>} />
          <Route path="/rolling_shutter_3_q" element={<RollingShutter3q/>} />
          <Route path="/rolling_shutter_4_q" element={<RollingShutter4q/>} />
          <Route path="/rolling_shutter_5_q" element={<RollingShutter5q/>} />
          <Route path="/rolling_shutter_6_q" element={<RollingShutter6q/>} />
          <Route path="/rolling_shutter_7_q" element={<RollingShutter7q/>} />
          <Route path="/rolling_shutter_8_q" element={<RollingShutter8q/>} />
          <Route path="/rolling_shutter_9_q" element={<RollingShutter9q/>} />
          <Route path="/rolling_shutter_10_q" element={<RollingShutter10q/>} />
          <Route path="/rolling_shutter_11_q" element={<RollingShutter11q/>} />
          <Route path="/rolling_shutter_12_q" element={<RollingShutter12q/>} />

          <Route path="/softener_plant_1_q" element={<SoftnerPlant1q/>} />
          <Route path="/softener_unit_outlet_pump_1_q" element={<SoftenerUnitOp1q/>} />

          <Route path="/eldb_1_q" element={<Eldb1q/>} />
          <Route path="/eldb_2_q" element={<Eldb2q/>} />
          <Route path="/eldb_3_q" element={<Eldb3q/>} />
          <Route path="/eldb_4_q" element={<Eldb4q/>} />
          <Route path="/eldb_5_q" element={<Eldb5q/>} />
          <Route path="/eldb_6_q" element={<Eldb6q/>} />
          <Route path="/eldb_7_q" element={<Eldb7q/>} />
          <Route path="/eldb_8_q" element={<Eldb8q/>} />
          <Route path="/eldb_9_q" element={<Eldb9q/>} />
          <Route path="/eldb_10_q" element={<Eldb10q/>} />
          <Route path="/eldb_11_q" element={<Eldb11q/>} />
          <Route path="/eldb_12_q" element={<Eldb12q/>} />
          <Route path="/eldb_13_q" element={<Eldb13q/>} />


          <Route path="/ldb_1_q" element={<Ldb1q/>} />
          <Route path="/ldb_2_q" element={<Ldb2q/>} />
          <Route path="/ldb_3_q" element={<Ldb3q/>} />
          <Route path="/ldb_4_q" element={<Ldb4q/>} />
          <Route path="/ldb_5_q" element={<Ldb5q/>} />
          <Route path="/ldb_6_q" element={<Ldb6q/>} />
          <Route path="/ldb_7_q" element={<Ldb7q/>} />
          <Route path="/ldb_8_q" element={<Ldb8q/>} />
          <Route path="/ldb_9_q" element={<Ldb9q/>} />
          <Route path="/ldb_10_q" element={<Ldb10q/>} />
          <Route path="/ldb_11_q" element={<Ldb11q/>} />
          <Route path="/ldb_12_q" element={<Ldb12q/>} />
          <Route path="/ldb_13_q" element={<Ldb13q/>} />
          <Route path="/ldb_14_q" element={<Ldb14q/>} />
          <Route path="/ldb_15_q" element={<Ldb15q/>} />
          <Route path="/ldb_16_q" element={<Ldb16q/>} />
          <Route path="/ldb_17_q" element={<Ldb17q/>} />
          <Route path="/ldb_18_q" element={<Ldb18q/>} />
          <Route path="/ldb_19_q" element={<Ldb19q/>} />
          <Route path="/ldb_20_q" element={<Ldb20q/>} />
          <Route path="/ldb_21_q" element={<Ldb21q/>} />
          <Route path="/ldb_22_q" element={<Ldb22q/>} />

          <Route path="/pdb_1_q" element={<PdbPanel1q/>} />
          <Route path="/pdb_2_q" element={<Pdb2q/>} />
          <Route path="/pdb_3_q" element={<Pdb3q/>} />
          <Route path="/pdb_4_q" element={<Pdb4q/>} />
          <Route path="/pdb_5_q" element={<Pdb5q/>} />
          <Route path="/pdb_6_q" element={<Pdb6q/>} />
          <Route path="/pdb_7_q" element={<Pdb7q/>} />
          <Route path="/pdb_8_q" element={<Pdb8q/>} />
          <Route path="/pdb_9_q" element={<Pdb9q/>} />
          <Route path="/pdb_10_q" element={<Pdb10q/>} />
          <Route path="/pdb_11_q" element={<Pdb11q/>} />
          <Route path="/pdb_12_q" element={<Pdb12q/>} />
          <Route path="/pdb_13_q" element={<Pdb13q/>} />

          <Route path="/mldb_1_q" element={<Mldb1q/>} />


          <Route path="/upsdb_1_q" element={<UpsDb1q/>} />
          <Route path="/upsdb_2_q" element={<UpsDb2q/>} />

          <Route path="/ddc_panel_1_q" element={<DdcPanel1q/>} />
          <Route path="/ddc_panel_2_q" element={<DdcPanel2q/>} />
          <Route path="/ddc_panel_3_q" element={<DdcPanel3q/>} />
          <Route path="/ddc_panel_4_q" element={<DdcPanel4q/>} />
          <Route path="/ddc_panel_5_q" element={<DdcPanel5q/>} />
          <Route path="/ddc_panel_6_q" element={<DdcPanel6q/>} />
          <Route path="/ddc_panel_7_q" element={<DdcPanel7q/>} />

          <Route path="/fire_extinguisher_1_q" element={<FireExtinguisher1q/>} />

          <Route path="/sprinkler_1_q" element={<Sprinkler1q/>} />
          <Route path="/sprinkler_2_q" element={<Sprinkler2q/>} />
          <Route path="/sprinkler_3_q" element={<Sprinkler3q/>} />
          <Route path="/sprinkler_4_q" element={<Sprinkler4q/>} />
          <Route path="/sprinkler_5_q" element={<Sprinkler5q/>} />
          <Route path="/sprinkler_6_q" element={<Sprinkler6q/>} />
          <Route path="/sprinkler_7_q" element={<Sprinkler7q/>} />
          <Route path="/sprinkler_8_q" element={<Sprinkler8q/>} />

          <Route path="/smoke_detector_1_q" element={<SmokeDetector1q/>} />
          <Route path="/smoke_detector_2_q" element={<SmokeDetector2q/>} />
          <Route path="/smoke_detector_3_q" element={<SmokeDetector3q/>} />
          <Route path="/smoke_detector_4_q" element={<SmokeDetector4q/>} />
          <Route path="/smoke_detector_5_q" element={<SmokeDetector5q/>} />

          <Route path="/manual_call_point_1_q" element={<ManualCallPt1q/>} />
          <Route path="/manual_call_point_2_q" element={<ManualCallPt2q/>} />
          <Route path="/manual_call_point_3_q" element={<ManualCallPt3q/>} />
          <Route path="/manual_call_point_4_q" element={<ManualCallPt4q/>} />
          <Route path="/manual_call_point_5_q" element={<ManualCallPt5q/>} />
          
          <Route path="/beam_detector_1_q" element={<BeamDetector1q/>} />
          <Route path="/beam_detector_2_q" element={<BeamDetector2q/>} />
          <Route path="/beam_detector_3_q" element={<BeamDetector3q/>} />
          <Route path="/beam_detector_4_q" element={<BeamDetector4q/>} />
          <Route path="/beam_detector_5_q" element={<BeamDetector5q/>} />
          <Route path="/beam_detector_6_q" element={<BeamDetector6q/>} />
          <Route path="/beam_detector_7_q" element={<BeamDetector7q/>} />
          <Route path="/beam_detector_8_q" element={<BeamDetector8q/>} />

          <Route path="/hooter_cum_strobe_1_q" element={<HooterCumStrobe1q/>} />
          <Route path="/hooter_cum_strobe_2_q" element={<HooterCumStrobe2q/>} />
          <Route path="/hooter_cum_strobe_3_q" element={<HooterCumStrobe3q/>} />
          <Route path="/hooter_cum_strobe_4_q" element={<HooterCumStrobe4q/>} />
          <Route path="/hooter_cum_strobe_5_q" element={<HooterCumStrobe5q/>} />

          <Route path="/fire_hydrant_1_q" element={<FireHydrant1q/>} />
          <Route path="/fire_hydrant_2_q" element={<FireHydrant2q/>} />
          <Route path="/fire_hydrant_3_q" element={<FireHydrant3q/>} />
          <Route path="/fire_hydrant_4_q" element={<FireHydrant4q/>} />
          <Route path="/fire_hydrant_5_q" element={<FireHydrant5q/>} />
          <Route path="/fire_hydrant_6_q" element={<FireHydrant6q/>} />
          <Route path="/fire_hydrant_7_q" element={<FireHydrant7q/>} />
          <Route path="/fire_hydrant_8_q" element={<FireHydrant8q/>} />
          <Route path="/fire_hydrant_9_q" element={<FireHydrant9q/>} />
          <Route path="/fire_hydrant_10_q" element={<FireHydrant10q/>} />

          <Route path="/hose_reel_1_q" element={<HoseReel1q/>} />
          <Route path="/emergency_door_1_q" element={<EmergencyDoor1q/>} />
          <Route path="/glass_round_door_1_q" element={<GlassRoundDoor1q/>} />

          <Route path="/glass_single_leaf_door_1_q" element={<GlassSingleLeafDoor1q/>} />
          <Route path="/glass_single_leaf_door_2_q" element={<GlassSingleLeafDoor2q/>} />
          <Route path="/glass_single_leaf_door_3_q" element={<GlassSingleLeafDoor3q/>} />
          <Route path="/glass_single_leaf_door_4_q" element={<GlassSingleLeafDoor4q/>} />

          <Route path="/glass_double_leaf_door_1_q" element={<GlassDoubleLeafDoor1q/>} />
          <Route path="/glass_double_leaf_door_2_q" element={<GlassDoubleLeafDoor2q/>} />
          <Route path="/glass_double_leaf_door_3_q" element={<GlassDoubleLeafDoor3q/>} />
          <Route path="/glass_double_leaf_door_4_q" element={<GlassDoubleLeafDoor4q/>} />
          <Route path="/glass_double_leaf_door_5_q" element={<GlassDoubleLeafDoor5q/>} />
          <Route path="/glass_double_leaf_door_6_q" element={<GlassDoubleLeafDoor6q/>} />

          <Route path="/wooden_single_leaf_door_1_q" element={<WoodenSingleLeafDoor1q/>} />
          <Route path="/wooden_single_leaf_door_2_q" element={<WoodenSingleLeafDoor2q/>} />
          <Route path="/wooden_single_leaf_door_3_q" element={<WoodenSingleLeafDoor3q/>} />
          <Route path="/wooden_single_leaf_door_4_q" element={<WoodenSingleLeafDoor4q/>} />
          <Route path="/wooden_single_leaf_door_5_q" element={<WoodenSingleLeafDoor5q/>} />
          <Route path="/wooden_single_leaf_door_6_q" element={<WoodenSingleLeafDoor6q/>} />
          <Route path="/wooden_single_leaf_door_7_q" element={<WoodenSingleLeafDoor7q/>} />
          <Route path="/wooden_single_leaf_door_8_q" element={<WoodenSingleLeafDoor8q/>} />
          <Route path="/wooden_single_leaf_door_9_q" element={<WoodenSingleLeafDoor9q/>} />
          <Route path="/wooden_single_leaf_door_10_q" element={<WoodenSingleLeafDoor10q/>} />

          <Route path="/wooden_double_leaf_door_1_q" element={<WoodenDoubleLeafDoor1q/>} />
          <Route path="/wooden_double_leaf_door_2_q" element={<WoodenDoubleLeafDoor2q/>} />
          <Route path="/wooden_double_leaf_door_3_q" element={<WoodenDoubleLeafDoor3q/>} />
          <Route path="/wooden_double_leaf_door_4_q" element={<WoodenDoubleLeafDoor4q/>} />

          <Route path="/metal_single_leaf_door_1_q" element={<MetalSingleLeafDoor1q/>} />
          <Route path="/metal_single_leaf_door_2_q" element={<MetalSingleLeafDoor2q/>} />

          <Route path="/metal_double_leaf_door_1_q" element={<MetalDoubleLeafDoor1q/>} />
          <Route path="/metal_double_leaf_door_2_q" element={<MetalDoubleLeafDoor2q/>} />
          <Route path="/metal_double_leaf_door_3_q" element={<MetalDoubleLeafDoor3q/>} />
          <Route path="/metal_double_leaf_door_4_q" element={<MetalDoubleLeafDoor4q/>} />

        

          <Route path="/frp_door_1_q" element={<FrpDoor1q/>} />
          <Route path="/frp_door_2_q" element={<FrpDoor2q/>} />
          <Route path="/frp_door_3_q" element={<FrpDoor3q/>} />
          <Route path="/frp_door_4_q" element={<FrpDoor4q/>} />
          <Route path="/frp_door_5_q" element={<FrpDoor5q/>} />
          <Route path="/frp_door_6_q" element={<FrpDoor6q/>} />
          <Route path="/frp_door_7_q" element={<FrpDoor7q/>} />
          <Route path="/frp_door_8_q" element={<FrpDoor8q/>} />
          <Route path="/frp_door_9_q" element={<FrpDoor9q/>} />
          <Route path="/frp_door_10_q" element={<FrpDoor10q/>} />
          <Route path="/frp_door_11_q" element={<FrpDoor11q/>} />
          <Route path="/frp_door_12_q" element={<FrpDoor12q/>} />
          <Route path="/frp_door_13_q" element={<FrpDoor13q/>} />
          <Route path="/frp_door_14_q" element={<FrpDoor14q/>} />
          <Route path="/frp_door_15_q" element={<FrpDoor15q/>} />
          
          <Route path="/garden_pump_1_q" element={<GardenPump1q/>} />
          <Route path="/stp_pump_1_q" element={<StpPump1q/>} />
          <Route path="/stp_pump_2_q" element={<StpPump2q/>} />
          <Route path="/stp_pump_motor_1_q" element={<StpPumpMotor1q/>} />
          <Route path="/stp_pump_motor_2_q" element={<StpPumpMotor2q/>} />
          <Route path="/stp_ring_blower_1_q" element={<StpRingBlower1q/>} />
          <Route path="/stp_ring_blower_2_q" element={<StpRingBlower2q/>} />
          <Route path="/stp_ring_blower_3_q" element={<StpRingBlower3q/>} />
          <Route path="/stp_ring_blower_4_q" element={<StpRingBlower4q/>} />

          <Route path="/panel_1_q" element={<Panel1q/>} />
          <Route path="/panel_2_q" element={<Panel2q/>} />
          <Route path="/panel_3_q" element={<Panel3q/>} />
          <Route path="/panel_4_q" element={<Panel4q/>} />
          <Route path="/panel_5_q" element={<Panel5q/>} />
          <Route path="/panel_6_q" element={<Panel6q/>} />
          <Route path="/panel_7_q" element={<Panel7q/>} />
          <Route path="/panel_8_q" element={<Panel8q/>} />
          <Route path="/panel_9_q" element={<Panel9q/>} />
          <Route path="/panel_10_q" element={<Panel10q/>} />
          <Route path="/panel_11_q" element={<Panel11q/>} />
          <Route path="/panel_12_q" element={<Panel12q/>} />
          <Route path="/panel_13_q" element={<Panel13q/>} />
          <Route path="/panel_14_q" element={<Panel14q/>} />
          <Route path="/panel_15_q" element={<Panel15q/>} />
          <Route path="/panel_16_q" element={<Panel16q/>} />
          <Route path="/panel_17_q" element={<Panel17q/>} />
          <Route path="/panel_18_q" element={<Panel18q/>} />
          <Route path="/panel_19_q" element={<Panel19q/>} />
          <Route path="/panel_20_q" element={<Panel20q/>} />
          <Route path="/panel_21_q" element={<Panel21q/>} />
          <Route path="/panel_22_q" element={<Panel22q/>} />
          <Route path="/panel_23_q" element={<Panel23q/>} />
          <Route path="/panel_24_q" element={<Panel24q/>} />
          <Route path="/panel_25_q" element={<Panel25q/>} />
          <Route path="/panel_26_q" element={<Panel26q/>} />
          <Route path="/panel_27_q" element={<Panel27q/>} />
          <Route path="/panel_28_q" element={<Panel28q/>} />
          <Route path="/panel_29_q" element={<Panel29q/>} />
          <Route path="/panel_30_q" element={<Panel30q/>} />
          <Route path="/panel_31_q" element={<Panel31q/>} />
          <Route path="/panel_32_q" element={<Panel32q/>} />
          <Route path="/panel_33_q" element={<Panel33q/>} />
          <Route path="/panel_34_q" element={<Panel34q/>} />
          <Route path="/panel_35_q" element={<Panel35q/>} />
          <Route path="/panel_36_q" element={<Panel36q/>} />
          <Route path="/panel_37_q" element={<Panel37q/>} />
          <Route path="/panel_38_q" element={<Panel38q/>} />
          <Route path="/panel_39_q" element={<Panel39q/>} />
          <Route path="/panel_40_q" element={<Panel40q/>} />
          <Route path="/panel_41_q" element={<Panel41q/>} />
          <Route path="/panel_42_q" element={<Panel42q/>} />
          <Route path="/panel_43_q" element={<Panel43q/>} />
          <Route path="/panel_44_q" element={<Panel44q/>} />
          <Route path="/panel_45_q" element={<Panel45q/>} />
          <Route path="/panel_46_q" element={<Panel46q/>} />
          <Route path="/panel_47_q" element={<Panel47q/>} />
          <Route path="/panel_48_q" element={<Panel48q/>} />

          <Route path="/bms_1_q" element={<Bms1q/>} />

          <Route path="/pump_section_1_q" element={<PumpSection1q/>} />
          <Route path="/pump_section_2_q" element={<PumpSection2q/>} />
          <Route path="/pump_section_3_q" element={<PumpSection3q/>} />
          <Route path="/pump_section_4_q" element={<PumpSection4q/>} />

          <Route path="/nitrogen_yard_1_q" element={<NitrogenYard1q/>} />



          {/* Time Based Checksheets */}
          <Route path="/dg_1010_1_tb" element={<DG10101tb />} /> 
          <Route path="/dg_1010_2_tb" element={<DG10102tb />} /> 
          <Route path="/dg_1010_3_tb" element={<DG10103tb />} /> 

          <Route path="/dg_500_1_tb" element={<DG5001tb />} /> 
          <Route path="/dg_500_2_tb" element={<DG5002tb />} /> 

          <Route path="/air_compressor_1_tb" element={<AirCompressor1tb/>} /> 
          <Route path="/air_compressor_2_tb" element={<AirCompressor2tb/>} /> 
          <Route path="/air_dryer_1_tb" element={<AirDryer1tb/>} /> 
          <Route path="/air_dryer_2_tb" element={<AirDryer2tb/>} /> 
          <Route path="/diesel_pump_1_tb" element={<DisealPump1tb/>} /> 
          <Route path="/water_chiller_1_tb" element={<WaterChiller1tb/>} /> 
          <Route path="/water_chiller_2_tb" element={<WaterChiller2tb/>} /> 




          {/* Daily Dashboard */}
          <Route path="/ht_lt_panel_1_d_dashboard" element={<HTLTdash1d />} />
          <Route path="/ht_lt_panel_2_d_dashboard" element={<HTLTdash2d />} />
          <Route path="/ht_lt_panel_3_d_dashboard" element={<HTLTdash3d />} />
          <Route path="/ht_lt_panel_4_d_dashboard" element={<HTLTdash4d />} />
          <Route path="/ht_lt_panel_5_d_dashboard" element={<HTLTdash5d />} />
          <Route path="/ht_lt_panel_6_d_dashboard" element={<HTLTdash6d />} />
          <Route path="/ht_lt_panel_7_d_dashboard" element={<HTLTdash7d />} />
          <Route path="/ht_lt_panel_8_d_dashboard" element={<HTLTdash8d />} />
          <Route path="/ht_lt_panel_9_d_dashboard" element={<HTLTdash9d />} />

          <Route path="/transformer_1_d_dashboard" element={<TransformerDash1d />} />
          <Route path="/transformer_2_d_dashboard" element={<TransformerDash2d />} />
          <Route path="/transformer_3_d_dashboard" element={<TransformerDash3d />} />
          <Route path="/transformer_4_d_dashboard" element={<TransformerDash4d />} />
          <Route path="/transformer_5_d_dashboard" element={<TransformerDash5d />} />
          <Route path="/transformer_6_d_dashboard" element={<TransformerDash6d />} />
          <Route path="/transformer_7_d_dashboard" element={<TransformerDash7d />} />
          <Route path="/transformer_8_d_dashboard" element={<TransformerDash8d />} />

          <Route path="/dg_500_1_d_dashboard" element={<DG500Dash1d />} />
          <Route path="/dg_500_2_d_dashboard" element={<DG500Dash2d />} />
          <Route path="/dg_500_3_d_dashboard" element={<DG500Dash3d />} />

          <Route path="/dg_1010_1_d_dashboard" element={<DG1010Dash1d />} />
          <Route path="/dg_1010_2_d_dashboard" element={<DG1010Dash2d />} />
          <Route path="/dg_1010_3_d_dashboard" element={<DG1010Dash3d />} />
          <Route path="/dg_1010_4_d_dashboard" element={<DG1010Dash4d />} />

          <Route path="/vcb_1_d_dashboard" element={<VCBDash1d />} />
          <Route path="/vcb_2_d_dashboard" element={<VCBDash2d />} />
          <Route path="/vcb_3_d_dashboard" element={<VCBDash3d />} />
          <Route path="/vcb_4_d_dashboard" element={<VCBDash4d />} />
          <Route path="/vcb_5_d_dashboard" element={<VCBDash5d />} />
          <Route path="/vcb_6_d_dashboard" element={<VCBDash6d />} />
          <Route path="/vcb_7_d_dashboard" element={<VCBDash7d />} />
          <Route path="/vcb_8_d_dashboard" element={<VCBDash8d />} />
          <Route path="/vcb_9_d_dashboard" element={<VCBDash9d />} />
          <Route path="/vcb_10_d_dashboard" element={<VCBDash10d />} />

          <Route path="/ahu_1_d_dashboard" element={<AHUDash1d />} />
          <Route path="/ahu_2_d_dashboard" element={<AHUDash2d />} />
          <Route path="/ahu_3_d_dashboard" element={<AHUDash3d />} />
          <Route path="/ahu_4_d_dashboard" element={<AHUDash4d />} />
          <Route path="/ahu_5_d_dashboard" element={<AHUDash5d />} />
          <Route path="/ahu_6_d_dashboard" element={<AHUDash6d />} />
          <Route path="/ahu_7_d_dashboard" element={<AHUDash7d />} />
          <Route path="/ahu_8_d_dashboard" element={<AHUDash8d />} />
          <Route path="/ahu_9_d_dashboard" element={<AHUDash9d />} />
          <Route path="/ahu_10_d_dashboard" element={<AHUDash10d />} />
          <Route path="/ahu_11_d_dashboard" element={<AHUDash11d />} />
          <Route path="/ahu_12_d_dashboard" element={<AHUDash12d />} />
          <Route path="/ahu_13_d_dashboard" element={<AHUDash13d />} />
          <Route path="/ahu_14_d_dashboard" element={<AHUDash14d />} />

          <Route path="/panel_1_d_dashboard" element={<PanelDash1d />} />
          <Route path="/panel_2_d_dashboard" element={<PanelDash2d />} />
          <Route path="/panel_3_d_dashboard" element={<PanelDash3d />} />
          <Route path="/panel_4_d_dashboard" element={<PanelDash4d />} />
          <Route path="/panel_5_d_dashboard" element={<PanelDash5d />} />
          <Route path="/panel_6_d_dashboard" element={<PanelDash6d />} />
          <Route path="/panel_7_d_dashboard" element={<PanelDash7d />} />
          <Route path="/panel_8_d_dashboard" element={<PanelDash8d />} />
          <Route path="/panel_9_d_dashboard" element={<PanelDash9d />} />
          <Route path="/panel_10_d_dashboard" element={<PanelDash10d />} />
          <Route path="/panel_11_d_dashboard" element={<PanelDash11d />} />
          <Route path="/panel_12_d_dashboard" element={<PanelDash12d />} />
          <Route path="/panel_13_d_dashboard" element={<PanelDash13d />} />
          <Route path="/panel_14_d_dashboard" element={<PanelDash14d />} />
          <Route path="/panel_15_d_dashboard" element={<PanelDash15d />} />
          <Route path="/panel_16_d_dashboard" element={<PanelDash16d />} />
          <Route path="/panel_17_d_dashboard" element={<PanelDash17d />} />
          <Route path="/panel_18_d_dashboard" element={<PanelDash18d />} />
          <Route path="/panel_19_d_dashboard" element={<PanelDash19d />} />
          <Route path="/panel_20_d_dashboard" element={<PanelDash20d />} />
          <Route path="/panel_21_d_dashboard" element={<PanelDash21d />} />
          <Route path="/panel_22_d_dashboard" element={<PanelDash22d />} />
          <Route path="/panel_23_d_dashboard" element={<PanelDash23d />} />
          <Route path="/panel_24_d_dashboard" element={<PanelDash24d />} />
          <Route path="/panel_25_d_dashboard" element={<PanelDash25d />} />
          <Route path="/panel_26_d_dashboard" element={<PanelDash26d />} />
          <Route path="/panel_27_d_dashboard" element={<PanelDash27d />} />
          <Route path="/panel_28_d_dashboard" element={<PanelDash28d />} />
          <Route path="/panel_29_d_dashboard" element={<PanelDash29d />} />
          <Route path="/panel_30_d_dashboard" element={<PanelDash30d />} />
          <Route path="/panel_31_d_dashboard" element={<PanelDash31d />} />
          <Route path="/panel_32_d_dashboard" element={<PanelDash32d />} />
          <Route path="/panel_33_d_dashboard" element={<PanelDash33d />} />
          <Route path="/panel_34_d_dashboard" element={<PanelDash34d />} />
          <Route path="/panel_35_d_dashboard" element={<PanelDash35d />} />
          <Route path="/panel_36_d_dashboard" element={<PanelDash36d />} />

          <Route path="/acb_1_d_dashboard" element={<ACBDash1d />} />
          <Route path="/acb_2_d_dashboard" element={<ACBDash2d />} />
          <Route path="/acb_3_d_dashboard" element={<ACBDash3d />} />
          <Route path="/acb_4_d_dashboard" element={<ACBDash4d />} />
          <Route path="/acb_5_d_dashboard" element={<ACBDash5d />} />
          <Route path="/acb_6_d_dashboard" element={<ACBDash6d />} />
          <Route path="/acb_7_d_dashboard" element={<ACBDash7d />} />
          <Route path="/acb_8_d_dashboard" element={<ACBDash8d />} />
          <Route path="/acb_9_d_dashboard" element={<ACBDash9d />} />
          <Route path="/acb_10_d_dashboard" element={<ACBDash10d />} />
          <Route path="/acb_11_d_dashboard" element={<ACBDash11d />} />
          <Route path="/acb_12_d_dashboard" element={<ACBDash12d />} />
          <Route path="/acb_13_d_dashboard" element={<ACBDash13d />} />
          <Route path="/acb_14_d_dashboard" element={<ACBDash14d />} />
          <Route path="/acb_15_d_dashboard" element={<ACBDash15d />} />
          <Route path="/acb_16_d_dashboard" element={<ACBDash16d />} />
          <Route path="/acb_17_d_dashboard" element={<ACBDash17d />} />
          <Route path="/acb_18_d_dashboard" element={<ACBDash18d />} />
          <Route path="/acb_19_d_dashboard" element={<ACBDash19d />} />
          <Route path="/acb_20_d_dashboard" element={<ACBDash20d />} />
          <Route path="/acb_21_d_dashboard" element={<ACBDash21d />} />
          <Route path="/acb_22_d_dashboard" element={<ACBDash22d />} />
          <Route path="/acb_23_d_dashboard" element={<ACBDash23d />} />
          <Route path="/acb_24_d_dashboard" element={<ACBDash24d />} />
          <Route path="/acb_25_d_dashboard" element={<ACBDash25d />} />
          <Route path="/acb_26_d_dashboard" element={<ACBDash26d />} />
          <Route path="/acb_27_d_dashboard" element={<ACBDash27d />} />
          <Route path="/acb_28_d_dashboard" element={<ACBDash28d />} />
          <Route path="/acb_29_d_dashboard" element={<ACBDash29d />} />
          <Route path="/acb_30_d_dashboard" element={<ACBDash30d />} />
          <Route path="/acb_31_d_dashboard" element={<ACBDash31d />} />
          <Route path="/acb_32_d_dashboard" element={<ACBDash32d />} />
          <Route path="/acb_33_d_dashboard" element={<ACBDash33d />} />
          <Route path="/acb_34_d_dashboard" element={<ACBDash34d />} />
          <Route path="/acb_35_d_dashboard" element={<ACBDash35d />} />
          <Route path="/acb_36_d_dashboard" element={<ACBDash36d />} />
          <Route path="/acb_37_d_dashboard" element={<ACBDash37d />} />
          <Route path="/acb_38_d_dashboard" element={<ACBDash38d />} />
          <Route path="/acb_39_d_dashboard" element={<ACBDash39d />} />
          <Route path="/acb_40_d_dashboard" element={<ACBDash40d />} />
          <Route path="/acb_41_d_dashboard" element={<ACBDash41d />} />
          <Route path="/acb_42_d_dashboard" element={<ACBDash42d />} />
          <Route path="/acb_43_d_dashboard" element={<ACBDash43d />} />
          <Route path="/acb_44_d_dashboard" element={<ACBDash44d />} />
          <Route path="/acb_45_d_dashboard" element={<ACBDash45d />} />
          <Route path="/acb_46_d_dashboard" element={<ACBDash46d />} />
          <Route path="/acb_47_d_dashboard" element={<ACBDash47d />} />
          <Route path="/acb_48_d_dashboard" element={<ACBDash48d />} />
          <Route path="/acb_49_d_dashboard" element={<ACBDash49d />} />
          <Route path="/acb_50_d_dashboard" element={<ACBDash50d />} />
          <Route path="/acb_51_d_dashboard" element={<ACBDash51d />} />
          <Route path="/acb_52_d_dashboard" element={<ACBDash52d />} />
          <Route path="/acb_53_d_dashboard" element={<ACBDash53d />} />
          <Route path="/acb_54_d_dashboard" element={<ACBDash54d />} />
          <Route path="/acb_55_d_dashboard" element={<ACBDash55d />} />
          <Route path="/acb_56_d_dashboard" element={<ACBDash56d />} />
          <Route path="/acb_57_d_dashboard" element={<ACBDash57d />} />
          <Route path="/acb_58_d_dashboard" element={<ACBDash58d />} />
          <Route path="/acb_59_d_dashboard" element={<ACBDash59d />} />
          <Route path="/acb_60_d_dashboard" element={<ACBDash60d />} />

          <Route path="/swagon_compressor_1_d_dashboard" element={<SwagonCompresorDash1d />} />
          <Route path="/swagon_compressor_2_d_dashboard" element={<SwagonCompresorDash2d />} />
          <Route path="/swagon_compressor_3_d_dashboard" element={<SwagonCompresorDash3d />} />
          <Route path="/swagon_compressor_4_d_dashboard" element={<SwagonCompresorDash4d />} />

          <Route path="/ups_1_d_dashboard" element={<UPSDash1d />} />
          <Route path="/ups_2_d_dashboard" element={<UPSDash2d />} />
          <Route path="/ups_3_d_dashboard" element={<UPSDash3d />} />
          <Route path="/ups_4_d_dashboard" element={<UPSDash4d />} />
          <Route path="/ups_5_d_dashboard" element={<UPSDash5d />} />
          <Route path="/ups_6_d_dashboard" element={<UPSDash6d />} />

          <Route path="/air_compressor_1_d_dashboard" element={<AirCompressorDash1d />} />
          <Route path="/air_compressor_2_d_dashboard" element={<AirCompressorDash2d />} />

          <Route path="/air_dryer_1_d_dashboard" element={<AirDryerDash1d />} />
          <Route path="/air_dryer_2_d_dashboard" element={<AirDryerDash2d />} />

          <Route path="/water_chiller_1_d_dashboard" element={<WaterChillerDash1d />} />
          <Route path="/water_chiller_2_d_dashboard" element={<WaterChillerDash2d />} />

          <Route path="/air_chiller_1_d_dashboard" element={<AirChillerDash1d />} />
          <Route path="/air_chiller_2_d_dashboard" element={<AirChillerDash2d />} />

          <Route path="/cooling_tower_1_d_dashboard" element={<CoolingTowerDash1d />} />
          <Route path="/cooling_tower_2_d_dashboard" element={<CoolingTowerDash2d />} />

          <Route path="/air_reservoir_tank_1_d_dashboard" element={<AirReservoirTankDash1d />} />
          <Route path="/air_reservoir_tank_2_d_dashboard" element={<AirReservoirTankDash2d />} />

          <Route path="/upsdb_panel_1_d_dashboard" element={<UPSDBDash1d />} />
          <Route path="/fire_hydrant_system_1_d_dashboard" element={<FireHydrantSystemDash1d />} />
          <Route path="/softener_unit_1_d_dashboard" element={<SoftenerUnitDash1d />} />
          <Route path="/stp_1_d_dashboard" element={<STPDash1d />} />
          <Route path="/nitrogen_yard_1_d_dashboard" element={<NitrogenYardDash1d />} />
          <Route path="/eldb_panel_1_d_dashboard" element={<ELDBPanelDash1d />} />
          <Route path="/mldb_panel_1_d_dashboard" element={<MLDBPanelDash1d />} />



          {/* Monthly Dashboard */}
          <Route path="/fire_extinguisher_1_m_dashboard" element={<FireExtinguisherDash1m />} />
          <Route path="/fire_extinguisher_1_m_dashboard" element={<FireExtinguisherDash1m />} />
          <Route path="/fire_extinguisher_2_m_dashboard" element={<FireExtinguisherDash2m />} />
          <Route path="/fire_extinguisher_3_m_dashboard" element={<FireExtinguisherDash3m />} />
          <Route path="/fire_extinguisher_4_m_dashboard" element={<FireExtinguisherDash4m />} />
          <Route path="/fire_extinguisher_5_m_dashboard" element={<FireExtinguisherDash5m />} />
          <Route path="/fire_extinguisher_6_m_dashboard" element={<FireExtinguisherDash6m />} />
          <Route path="/fire_extinguisher_7_m_dashboard" element={<FireExtinguisherDash7m />} />
          <Route path="/fire_extinguisher_8_m_dashboard" element={<FireExtinguisherDash8m />} />
          <Route path="/fire_extinguisher_9_m_dashboard" element={<FireExtinguisherDash9m />} />
          <Route path="/fire_extinguisher_10_m_dashboard" element={<FireExtinguisherDash10m />} />
          <Route path="/fire_extinguisher_11_m_dashboard" element={<FireExtinguisherDash11m />} />
          <Route path="/fire_extinguisher_12_m_dashboard" element={<FireExtinguisherDash12m />} />
          <Route path="/fire_extinguisher_13_m_dashboard" element={<FireExtinguisherDash13m />} />
          <Route path="/fire_extinguisher_14_m_dashboard" element={<FireExtinguisherDash14m />} />
          <Route path="/fire_extinguisher_15_m_dashboard" element={<FireExtinguisherDash15m />} />
          <Route path="/fire_extinguisher_16_m_dashboard" element={<FireExtinguisherDash16m />} />
          <Route path="/fire_extinguisher_17_m_dashboard" element={<FireExtinguisherDash17m />} />
          <Route path="/fire_extinguisher_18_m_dashboard" element={<FireExtinguisherDash18m />} />
          <Route path="/fire_extinguisher_19_m_dashboard" element={<FireExtinguisherDash19m />} />
          <Route path="/fire_extinguisher_20_m_dashboard" element={<FireExtinguisherDash20m />} />
          <Route path="/fire_extinguisher_21_m_dashboard" element={<FireExtinguisherDash21m />} />
          <Route path="/fire_extinguisher_22_m_dashboard" element={<FireExtinguisherDash22m />} />
          <Route path="/fire_extinguisher_23_m_dashboard" element={<FireExtinguisherDash23m />} />
          <Route path="/fire_extinguisher_24_m_dashboard" element={<FireExtinguisherDash24m />} />
          <Route path="/fire_extinguisher_25_m_dashboard" element={<FireExtinguisherDash25m />} />
          <Route path="/fire_extinguisher_26_m_dashboard" element={<FireExtinguisherDash26m />} />
          <Route path="/fire_extinguisher_27_m_dashboard" element={<FireExtinguisherDash27m />} />
          <Route path="/fire_extinguisher_28_m_dashboard" element={<FireExtinguisherDash28m />} />
          <Route path="/fire_extinguisher_29_m_dashboard" element={<FireExtinguisherDash29m />} />
          <Route path="/fire_extinguisher_30_m_dashboard" element={<FireExtinguisherDash30m />} />
          <Route path="/fire_extinguisher_31_m_dashboard" element={<FireExtinguisherDash31m />} />
          <Route path="/fire_extinguisher_32_m_dashboard" element={<FireExtinguisherDash32m />} />
          <Route path="/fire_extinguisher_33_m_dashboard" element={<FireExtinguisherDash33m />} />
          <Route path="/fire_extinguisher_34_m_dashboard" element={<FireExtinguisherDash34m />} />
          <Route path="/fire_extinguisher_35_m_dashboard" element={<FireExtinguisherDash35m />} />
          <Route path="/fire_extinguisher_36_m_dashboard" element={<FireExtinguisherDash36m />} />
          <Route path="/fire_extinguisher_37_m_dashboard" element={<FireExtinguisherDash37m />} />
          <Route path="/fire_extinguisher_38_m_dashboard" element={<FireExtinguisherDash38m />} />
          <Route path="/fire_extinguisher_39_m_dashboard" element={<FireExtinguisherDash39m />} />
          <Route path="/fire_extinguisher_40_m_dashboard" element={<FireExtinguisherDash40m />} />
          <Route path="/fire_extinguisher_41_m_dashboard" element={<FireExtinguisherDash41m />} />
          <Route path="/fire_extinguisher_42_m_dashboard" element={<FireExtinguisherDash42m />} />
          <Route path="/fire_extinguisher_43_m_dashboard" element={<FireExtinguisherDash43m />} />
          <Route path="/fire_extinguisher_44_m_dashboard" element={<FireExtinguisherDash44m />} />
          <Route path="/fire_extinguisher_45_m_dashboard" element={<FireExtinguisherDash45m />} />
          <Route path="/fire_extinguisher_46_m_dashboard" element={<FireExtinguisherDash46m />} />
          <Route path="/fire_extinguisher_47_m_dashboard" element={<FireExtinguisherDash47m />} />
          <Route path="/fire_extinguisher_48_m_dashboard" element={<FireExtinguisherDash48m />} />
          <Route path="/fire_extinguisher_49_m_dashboard" element={<FireExtinguisherDash49m />} />
          <Route path="/fire_extinguisher_50_m_dashboard" element={<FireExtinguisherDash50m />} />
          <Route path="/fire_extinguisher_51_m_dashboard" element={<FireExtinguisherDash51m />} />
          <Route path="/fire_extinguisher_52_m_dashboard" element={<FireExtinguisherDash52m />} />
          <Route path="/fire_extinguisher_53_m_dashboard" element={<FireExtinguisherDash53m />} />
          <Route path="/fire_extinguisher_54_m_dashboard" element={<FireExtinguisherDash54m />} />
          <Route path="/fire_extinguisher_55_m_dashboard" element={<FireExtinguisherDash55m />} />
          <Route path="/fire_extinguisher_56_m_dashboard" element={<FireExtinguisherDash56m />} />
          <Route path="/fire_extinguisher_57_m_dashboard" element={<FireExtinguisherDash57m />} />
          <Route path="/fire_extinguisher_58_m_dashboard" element={<FireExtinguisherDash58m />} />
          <Route path="/fire_extinguisher_59_m_dashboard" element={<FireExtinguisherDash59m />} />
          <Route path="/fire_extinguisher_60_m_dashboard" element={<FireExtinguisherDash60m />} />
          <Route path="/fire_extinguisher_61_m_dashboard" element={<FireExtinguisherDash61m />} />
          <Route path="/fire_extinguisher_62_m_dashboard" element={<FireExtinguisherDash62m />} />
          <Route path="/fire_extinguisher_63_m_dashboard" element={<FireExtinguisherDash63m />} />
          <Route path="/fire_extinguisher_64_m_dashboard" element={<FireExtinguisherDash64m />} />
          <Route path="/fire_extinguisher_65_m_dashboard" element={<FireExtinguisherDash65m />} />
          <Route path="/fire_extinguisher_66_m_dashboard" element={<FireExtinguisherDash66m />} />
          <Route path="/fire_extinguisher_67_m_dashboard" element={<FireExtinguisherDash67m />} />
          <Route path="/fire_extinguisher_68_m_dashboard" element={<FireExtinguisherDash68m />} />
          <Route path="/fire_extinguisher_69_m_dashboard" element={<FireExtinguisherDash69m />} />
          <Route path="/fire_extinguisher_70_m_dashboard" element={<FireExtinguisherDash70m />} />
          <Route path="/fire_extinguisher_71_m_dashboard" element={<FireExtinguisherDash71m />} />
          <Route path="/fire_extinguisher_72_m_dashboard" element={<FireExtinguisherDash72m />} />
          <Route path="/fire_extinguisher_73_m_dashboard" element={<FireExtinguisherDash73m />} />
          <Route path="/fire_extinguisher_74_m_dashboard" element={<FireExtinguisherDash74m />} />
          <Route path="/fire_extinguisher_75_m_dashboard" element={<FireExtinguisherDash75m />} />
          <Route path="/fire_extinguisher_76_m_dashboard" element={<FireExtinguisherDash76m />} />
          <Route path="/fire_extinguisher_77_m_dashboard" element={<FireExtinguisherDash77m />} />
          <Route path="/fire_extinguisher_78_m_dashboard" element={<FireExtinguisherDash78m />} />
          <Route path="/fire_extinguisher_79_m_dashboard" element={<FireExtinguisherDash79m />} />
          <Route path="/fire_extinguisher_80_m_dashboard" element={<FireExtinguisherDash80m />} />
          <Route path="/fire_extinguisher_81_m_dashboard" element={<FireExtinguisherDash81m />} />
          <Route path="/fire_extinguisher_82_m_dashboard" element={<FireExtinguisherDash82m />} />
          <Route path="/fire_extinguisher_83_m_dashboard" element={<FireExtinguisherDash83m />} />
          <Route path="/fire_extinguisher_84_m_dashboard" element={<FireExtinguisherDash84m />} />
          <Route path="/fire_extinguisher_85_m_dashboard" element={<FireExtinguisherDash85m />} />
          <Route path="/fire_extinguisher_86_m_dashboard" element={<FireExtinguisherDash86m />} />
          <Route path="/fire_extinguisher_87_m_dashboard" element={<FireExtinguisherDash87m />} />
          <Route path="/fire_extinguisher_88_m_dashboard" element={<FireExtinguisherDash88m />} />
          <Route path="/fire_extinguisher_89_m_dashboard" element={<FireExtinguisherDash89m />} />
          <Route path="/fire_extinguisher_90_m_dashboard" element={<FireExtinguisherDash90m />} />
          <Route path="/fire_extinguisher_91_m_dashboard" element={<FireExtinguisherDash91m />} />
          <Route path="/fire_extinguisher_92_m_dashboard" element={<FireExtinguisherDash92m />} />
          <Route path="/fire_extinguisher_93_m_dashboard" element={<FireExtinguisherDash93m />} />
          <Route path="/fire_extinguisher_94_m_dashboard" element={<FireExtinguisherDash94m />} />
          <Route path="/fire_extinguisher_95_m_dashboard" element={<FireExtinguisherDash95m />} />
          <Route path="/fire_extinguisher_96_m_dashboard" element={<FireExtinguisherDash96m />} />
          <Route path="/fire_extinguisher_97_m_dashboard" element={<FireExtinguisherDash97m />} />
          <Route path="/fire_extinguisher_98_m_dashboard" element={<FireExtinguisherDash98m />} />
          <Route path="/fire_extinguisher_99_m_dashboard" element={<FireExtinguisherDash99m />} />
          <Route path="/fire_extinguisher_100_m_dashboard" element={<FireExtinguisherDash100m />} />
          <Route path="/fire_extinguisher_101_m_dashboard" element={<FireExtinguisherDash101m />} />
          <Route path="/fire_extinguisher_102_m_dashboard" element={<FireExtinguisherDash102m />} />
          <Route path="/fire_extinguisher_103_m_dashboard" element={<FireExtinguisherDash103m />} />
          <Route path="/fire_extinguisher_104_m_dashboard" element={<FireExtinguisherDash104m />} />
          <Route path="/fire_extinguisher_105_m_dashboard" element={<FireExtinguisherDash105m />} />
          <Route path="/fire_extinguisher_106_m_dashboard" element={<FireExtinguisherDash106m />} />
          <Route path="/fire_extinguisher_107_m_dashboard" element={<FireExtinguisherDash107m />} />
          <Route path="/fire_extinguisher_108_m_dashboard" element={<FireExtinguisherDash108m />} />
          <Route path="/fire_extinguisher_109_m_dashboard" element={<FireExtinguisherDash109m />} />
          <Route path="/fire_extinguisher_110_m_dashboard" element={<FireExtinguisherDash110m />} />
          <Route path="/fire_extinguisher_111_m_dashboard" element={<FireExtinguisherDash111m />} />
          <Route path="/fire_extinguisher_112_m_dashboard" element={<FireExtinguisherDash112m />} />
          <Route path="/fire_extinguisher_113_m_dashboard" element={<FireExtinguisherDash113m />} />
          <Route path="/fire_extinguisher_114_m_dashboard" element={<FireExtinguisherDash114m />} />
          <Route path="/fire_extinguisher_115_m_dashboard" element={<FireExtinguisherDash115m />} />
          <Route path="/fire_extinguisher_116_m_dashboard" element={<FireExtinguisherDash116m />} />
          <Route path="/fire_extinguisher_117_m_dashboard" element={<FireExtinguisherDash117m />} />
          <Route path="/fire_extinguisher_118_m_dashboard" element={<FireExtinguisherDash118m />} />
          <Route path="/fire_extinguisher_119_m_dashboard" element={<FireExtinguisherDash119m />} />
          <Route path="/fire_extinguisher_120_m_dashboard" element={<FireExtinguisherDash120m />} />
          <Route path="/fire_extinguisher_121_m_dashboard" element={<FireExtinguisherDash121m />} />
          <Route path="/fire_extinguisher_122_m_dashboard" element={<FireExtinguisherDash122m />} />
          <Route path="/fire_extinguisher_123_m_dashboard" element={<FireExtinguisherDash123m />} />
          <Route path="/fire_extinguisher_124_m_dashboard" element={<FireExtinguisherDash124m />} />
          <Route path="/fire_extinguisher_125_m_dashboard" element={<FireExtinguisherDash125m />} />
          <Route path="/fire_extinguisher_126_m_dashboard" element={<FireExtinguisherDash126m />} />
          <Route path="/fire_extinguisher_127_m_dashboard" element={<FireExtinguisherDash127m />} />
          <Route path="/fire_extinguisher_128_m_dashboard" element={<FireExtinguisherDash128m />} />
          <Route path="/fire_extinguisher_129_m_dashboard" element={<FireExtinguisherDash129m />} />
          <Route path="/fire_extinguisher_130_m_dashboard" element={<FireExtinguisherDash130m />} />
          <Route path="/fire_extinguisher_131_m_dashboard" element={<FireExtinguisherDash131m />} />
          <Route path="/fire_extinguisher_132_m_dashboard" element={<FireExtinguisherDash132m />} />
          <Route path="/fire_extinguisher_133_m_dashboard" element={<FireExtinguisherDash133m />} />
          <Route path="/fire_extinguisher_134_m_dashboard" element={<FireExtinguisherDash134m />} />
          <Route path="/fire_extinguisher_135_m_dashboard" element={<FireExtinguisherDash135m />} />
          <Route path="/fire_extinguisher_136_m_dashboard" element={<FireExtinguisherDash136m />} />
          <Route path="/fire_extinguisher_137_m_dashboard" element={<FireExtinguisherDash137m />} />
          <Route path="/fire_extinguisher_138_m_dashboard" element={<FireExtinguisherDash138m />} />
          <Route path="/fire_extinguisher_139_m_dashboard" element={<FireExtinguisherDash139m />} />
          <Route path="/fire_extinguisher_140_m_dashboard" element={<FireExtinguisherDash140m />} />
          <Route path="/fire_extinguisher_141_m_dashboard" element={<FireExtinguisherDash141m />} />
          <Route path="/fire_extinguisher_142_m_dashboard" element={<FireExtinguisherDash142m />} />
          <Route path="/fire_extinguisher_143_m_dashboard" element={<FireExtinguisherDash143m />} />
          <Route path="/fire_extinguisher_144_m_dashboard" element={<FireExtinguisherDash144m />} />
          <Route path="/fire_extinguisher_145_m_dashboard" element={<FireExtinguisherDash145m />} />
          <Route path="/fire_extinguisher_146_m_dashboard" element={<FireExtinguisherDash146m />} />
          <Route path="/fire_extinguisher_147_m_dashboard" element={<FireExtinguisherDash147m />} />
          <Route path="/fire_extinguisher_148_m_dashboard" element={<FireExtinguisherDash148m />} />
          <Route path="/fire_extinguisher_149_m_dashboard" element={<FireExtinguisherDash149m />} />
          <Route path="/fire_extinguisher_150_m_dashboard" element={<FireExtinguisherDash150m />} />
          <Route path="/fire_extinguisher_151_m_dashboard" element={<FireExtinguisherDash151m />} />
          <Route path="/fire_extinguisher_152_m_dashboard" element={<FireExtinguisherDash152m />} />
          <Route path="/fire_extinguisher_153_m_dashboard" element={<FireExtinguisherDash153m />} />
          <Route path="/fire_extinguisher_154_m_dashboard" element={<FireExtinguisherDash154m />} />
          <Route path="/fire_extinguisher_155_m_dashboard" element={<FireExtinguisherDash155m />} />
          <Route path="/fire_extinguisher_156_m_dashboard" element={<FireExtinguisherDash156m />} />
          <Route path="/fire_extinguisher_157_m_dashboard" element={<FireExtinguisherDash157m />} />
          <Route path="/fire_extinguisher_158_m_dashboard" element={<FireExtinguisherDash158m />} />
          <Route path="/fire_extinguisher_159_m_dashboard" element={<FireExtinguisherDash159m />} />
          <Route path="/fire_extinguisher_160_m_dashboard" element={<FireExtinguisherDash160m />} />
          <Route path="/fire_extinguisher_161_m_dashboard" element={<FireExtinguisherDash161m />} />
          <Route path="/fire_extinguisher_162_m_dashboard" element={<FireExtinguisherDash162m />} />
          <Route path="/fire_extinguisher_163_m_dashboard" element={<FireExtinguisherDash163m />} />
          <Route path="/fire_extinguisher_164_m_dashboard" element={<FireExtinguisherDash164m />} />
          <Route path="/fire_extinguisher_165_m_dashboard" element={<FireExtinguisherDash165m />} />
          <Route path="/fire_extinguisher_166_m_dashboard" element={<FireExtinguisherDash166m />} />
          <Route path="/fire_extinguisher_167_m_dashboard" element={<FireExtinguisherDash167m />} />
          <Route path="/fire_extinguisher_168_m_dashboard" element={<FireExtinguisherDash168m />} />
          <Route path="/fire_extinguisher_169_m_dashboard" element={<FireExtinguisherDash169m />} />
          <Route path="/fire_extinguisher_170_m_dashboard" element={<FireExtinguisherDash170m />} />
          <Route path="/fire_extinguisher_171_m_dashboard" element={<FireExtinguisherDash171m />} />
          <Route path="/fire_extinguisher_172_m_dashboard" element={<FireExtinguisherDash172m />} />
          <Route path="/fire_extinguisher_173_m_dashboard" element={<FireExtinguisherDash173m />} />
          <Route path="/fire_extinguisher_174_m_dashboard" element={<FireExtinguisherDash174m />} />
          <Route path="/fire_extinguisher_175_m_dashboard" element={<FireExtinguisherDash175m />} />
          <Route path="/fire_extinguisher_176_m_dashboard" element={<FireExtinguisherDash176m />} />
          <Route path="/fire_extinguisher_177_m_dashboard" element={<FireExtinguisherDash177m />} />
          <Route path="/fire_extinguisher_178_m_dashboard" element={<FireExtinguisherDash178m />} />
          <Route path="/fire_extinguisher_179_m_dashboard" element={<FireExtinguisherDash179m />} />
          <Route path="/fire_extinguisher_180_m_dashboard" element={<FireExtinguisherDash180m />} />
          <Route path="/fire_extinguisher_181_m_dashboard" element={<FireExtinguisherDash181m />} />
          <Route path="/fire_extinguisher_182_m_dashboard" element={<FireExtinguisherDash182m />} />
          <Route path="/fire_extinguisher_183_m_dashboard" element={<FireExtinguisherDash183m />} />
          <Route path="/fire_extinguisher_184_m_dashboard" element={<FireExtinguisherDash184m />} />

          <Route path="/dg_500_1_m_dashboard" element={<DG500Dash1m />} />
          <Route path="/dg_500_2_m_dashboard" element={<DG500Dash2m />} />
          <Route path="/dg_1010_1_m_dashboard" element={<DG1010Dash1m />} />
          <Route path="/dg_1010_2_m_dashboard" element={<DG1010Dash2m />} />
          <Route path="/dg_1010_3_m_dashboard" element={<DG1010Dash3m />} />

          <Route path="/air_compressor_1_m_dashboard" element={<AirCompressorDash1m />} />
          <Route path="/air_compressor_2_m_dashboard" element={<AirCompressorDash2m />} />

        </Routes>
      </Router>
    </SnackbarProvider>
);

reportWebVitals();
