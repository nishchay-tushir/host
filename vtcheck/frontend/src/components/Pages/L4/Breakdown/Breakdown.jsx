import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Breakdown = () => {
    
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
    dropdown5: '',
    dropdown6: '',
    dropdown7: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    unit: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
    if (!allFieldsFilled) {
      setError(true);
      enqueueSnackbar('Fill all the Fields!',{variant:'error'});
      return;
    }

    try {
      await axios.post('https://scheq.in/api/breakdown_data', formData);
      enqueueSnackbar('Breakdown Report Submitted Successfully',{variant:'success'});
      setFormData({
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
        dropdown4: '',
        dropdown5: '',
        dropdown6: '',
        dropdown7: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        unit: '',
      });
      setError(false);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('There was an error submitting the form.',{variant:'error'});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Report a Breakdown</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {error && (
          <p className="text-red-600 text-center">Please fill in all fields before submitting.</p>
        )}
        
        {/* Dropdown 1 */}
        <div className="flex flex-col">
          <label className="text-gray-700">5S Defined Zone:</label>
          <select name="dropdown1" value={formData.dropdown1} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select 5s zone</option>
            <option value="TP 1">TP 1</option>
            <option value="TP 2">TP 2</option>
            <option value="Compressor Room">Compressor Room</option>
            <option value="DG Yard">DG Yard</option>
            <option value="LT Yard">LT Yard</option>
            <option value="Fire Engine Room">Fire Engine Room</option>
            <option value="STP Plant">STP Plant</option>
            <option value="HT Yard">HT Yard</option>
            <option value="Facility Office Room">Facility Office Room</option>
          </select>
        </div>
        
        {/* Dropdown 2 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Sub-Area:</label>
          <select name="dropdown2" value={formData.dropdown2} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Sub-Area</option>
            <option value="Admin building">Admin building</option>
            <option value="air compressor">air compressor</option>
            <option value="Technical penthouse-1">Technical penthouse-1</option>
            <option value="Technical penthouse-2">Technical penthouse-2</option>
            <option value="AHU">AHU</option>
            <option value="Utility area">Utility area</option>
            <option value="DG yard">DG yard</option>
            <option value="HT yard">HT yard</option>
            <option value="Fire room">Fire room</option>
            <option value="Electronic area">Electronic area</option>
            <option value="Warehouse area">Warehouse area</option>
            <option value="Mechanical Area">Mechanical Area</option>
            <option value="Lt Room">Lt Room</option>
            <option value="HVAC system">HVAC system</option>
            <option value="Mechanical toilet">Mechanical toilet</option>
            <option value="Electronic toilet">Electronic toilet</option>
            <option value="Warehouse toilet">Warehouse toilet</option>
            <option value="Admin toilet">Admin toilet</option>
            <option value="softner plant">softner plant</option>
            <option value="STP plant">STP plant</option>
            <option value="BMS room">BMS room</option>
            <option value="UPS Room">UPS Room</option>
            <option value="Server room">Server room</option>
            <option value="Lt Room">Lt Room</option>
            <option value="Facility">Facility</option>
            <option value="Safety">Safety</option>
            <option value="EDMS Meter">EDMS Meter</option>
          </select>
        </div>
        
        {/* Dropdown 3 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Equipment:</label>
          <select name="dropdown3" value={formData.dropdown3} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Equipment</option>
            <option value="Air Dryer-1">Air Dryer-1</option>
            <option value="Air Dryer-2">Air Dryer-2</option>
            <option value="AHU">AHU</option>
            <option value="Split AC">Split AC</option>
            <option value="Boom barier">Boom barier</option>
            <option value="Water cooled chiller-1">Water cooled chiller-1</option>
            <option value="Water cooled chiller-2">Water cooled chiller-2</option>
            <option value="Air compressor-1">Air compressor-1</option>
            <option value="Air compressor-2">Air compressor-2</option>
            <option value="Air cooled chiller-1">Air cooled chiller-1</option>
            <option value="Air cooled chiller-2">Air cooled chiller-2</option>
            <option value="Swagon compressor-1">Swagon compressor-1</option>
            <option value="Swagon compressor-2">Swagon compressor-2</option>
            <option value="DG-1010 KVA">DG-1010 KVA</option>
            <option value="DG-500 KVA">DG-500 KVA</option>
            <option value="Softner unit">Softner unit</option>
            <option value="STP Plant">STP Plant</option>
            <option value="ACB">ACB</option>
            <option value="VCB">VCB</option>
            <option value="Electrical Panel">Electrical Panel</option>
            <option value="Fire engine">Fire engine</option>
            <option value="sprinkler">sprinkler</option>
            <option value="fire hydrant">fire hydrant</option>
            <option value="MAU">MAU</option>
            <option value="UPS">UPS</option>
            <option value="Sliding gate">Sliding gate</option>
            <option value="Rapid Rolling shutter">Rapid Rolling shutter</option>
            <option value="Survilance camera">Survilance camera</option>
            <option value="Tubelight">Tubelight</option>
            <option value="Speaker">Speaker</option>
            <option value="Smoke detector">Smoke detector</option>
            <option value="LED Light">LED Light</option>
            <option value="Air line">Air line</option>
            <option value="Water line">Water line</option>
            <option value="Water management">Water management</option>
            <option value="Stacker">Stacker</option>
            <option value="Exhaust">Exhaust</option>
            <option value="Cooling tower-1">Cooling tower-1</option>
            <option value="Cooling tower-2">Cooling tower-2</option>
            <option value="Solar invertor /Plate">Solar invertor /Plate</option>
            <option value="Argon/Nitrogen">Argon/Nitrogen</option>
            <option value="HT Yard">HT Yard</option>
            <option value="LT Yard">LT Yard</option>
            <option value="Facility">Facility</option>
            <option value="Cassete AC">Cassete AC</option>
            <option value="Air Dryer-1">Air Dryer-1</option>
            <option value="Air Dryer-2">Air Dryer-2</option>
            <option value="Pump /Motor">Pump /Motor</option>
            <option value="HVAC System">HVAC System</option>
            <option value="Turnstile Gate">Turnstile Gate</option>
            <option value="Transformer">Transformer</option>
            <option value="Main gate">Main gate</option>
            <option value="Material gate">Material gate</option>
            <option value="Air compressor -1">Air compressor -1</option>
            <option value="Air compressor -2">Air compressor -2</option>
            <option value="Dock leveler">Dock leveler</option>
            <option value="BMS software">BMS software</option>
            <option value="safety">safety</option>
            <option value="smoke detector">smoke detector</option>
            <option value="E-dosing unit">E-dosing unit</option>
            <option value="EDMS Meter">EDMS Meter</option>
          </select>
        </div>
        
        {/* Dropdown 4 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Type of Equipment:</label>
          <select name="dropdown4" value={formData.dropdown4} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Equipment Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="General">General</option>
          </select>
        </div>
        
        {/* Dropdown 5 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Type of Maintenance:</label>
          <select name="dropdown5" value={formData.dropdown5} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Maintenance Type</option>
            <option value="Planned-Mechanical">Planned-Mechanical</option>
            <option value="Planned-Electrical">Planned-Electrical</option>
            <option value="B/D-Mechanical">B/D-Mechanical</option>
            <option value="B/D-Electrical">B/D-Electrical</option>
          </select>
        </div>
        
        {/* Dropdown 6 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Breakdown Type:</label>
          <select name="dropdown6" value={formData.dropdown6} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Breakdown Type</option>
            <option value="Production">Production</option>
            <option value="Regular">Regular</option>
            <option value="Project">Project</option>
          </select>
        </div>
        
        {/* Dropdown 7 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Shift Duration:</label>
          <select name="dropdown7" value={formData.dropdown7} onChange={handleChange} className="border border-gray-300 rounded p-2">
            <option value="" disabled>Select Shift</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
                
        {/* Input 6 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Name of Person Incharge:</label>
          <input type="text" name="input6" value={formData.input6} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Name" />
        </div>

        {/* Input 3 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Breakdown Description:</label>
          <textarea name="input3" value={formData.input3} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Description" />
        </div>
        
        {/* Input 4 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Nature of Root Cause:</label>
          <textarea name="input4" value={formData.input4} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Root Cause" />
        </div>
        
        {/* Input 5 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Corrective and Preventive Action:</label>
          <textarea name="input5" value={formData.input5} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Action" />
        </div>
        
        {/* Input 7 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Breakdown Time (min):</label>
          <input type="number" name="input7" value={formData.input7} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Time" />
        </div>
                        
        {/* Input 8 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Spare Name:</label>
          <input type="text" name="input8" value={formData.input8} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Name" />
        </div>

        {/* Input 9 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Spare Quantity:</label>
          <div className="flex items-center">
            <input type="number" name="input9" value={formData.input9} onChange={handleChange} className="border border-gray-300 rounded-l p-2 flex-1" placeholder="Enter Quantity" />
            <input type="text" name="unit" value={formData.unit} onChange={handleChange} className="border border-gray-300 rounded-r p-2 w-20 text-center" placeholder="Unit" />
          </div>
        </div>

        {/* Input 1 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Total Spare Cost (Rupees):</label>
          <input type="number" name="input1" value={formData.input1} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Total Spare Cost" />
        </div>
        
        {/* Input 2 */}
        <div className="flex flex-col">
          <label className="text-gray-700">Total Laboour Cost (Rupees):</label>
          <input type="number" name="input2" value={formData.input2} onChange={handleChange} className="border border-gray-300 rounded p-2" placeholder="Enter Total Labour Cost" />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Breakdown;