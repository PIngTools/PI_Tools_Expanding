var k =  0.0000000567;

//#####################################################################################
function scaleVolume(input, NrDigits)
{
	if (input>0.01E9)
	{
		val=input/1E9;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"km³";
	}
	else if (input>0.1)
	{
		val=input/1;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"m³";
	}
	else if (input>0.1E-3)
	{
		val=input/1E-3;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"dm³";
	}
	else if (input>0.1E-6)
	{
		val=input/1E-6;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"cm³";
	}
	else if (input>0.001E-9)
	{
		val=input/1E-9;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"mm³";
	}
	else if (input>0.001E-18)
	{
		val=input/1E-18;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"µm³";
	}
	else if (input>0.001E-27)
	{
		val=input/1E-27;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"nm³";
	}
	else
	{
		val=input/1E-36;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"pm²";
	}

}

//#####################################################################################
function scaleArea(input, NrDigits)
{
	if (input>0.1E6)
	{
		val=input/1E6;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"km²";
	}
	else if (input>0.1)
	{
		val=input/1;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"m²";
	}
	else if (input>0.1E-2)
	{
		val=input/1E-2;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"dm²";
	}
	else if (input>0.1E-4)
	{
		val=input/1E-4;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"cm²";
	}
	else if (input>0.001E-6)
	{
		val=input/1E-6;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"mm²";
	}
	else if (input>0.001E-12)
	{
		val=input/1E-12;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"µm²";
	}
	else if (input>0.001E-15)
	{
		val=input/1E-15;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"nm²";
	}
	else if (input>0.001E-18)
	{
		val=input/1E-18;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"pm²";
	}
	else
	{
		val=input/1E-21;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+"fm²";
	}

}

//#####################################################################################
function getPreDigits(Nr)
{
	if (Nr<0.01)
	{
		return -2;
	}
	else if (Nr<0.1)
	{
		return -1;
	}
	else if (Nr<1)
	{
		return 0;
	}
	else
	{
		return (Nr.toFixed(0)).length;
	}
}
//#####################################################################################
function scalePhysicalValue(input, preUnit, postUnit, NrDigits)
{
	if (input>0.5E9)
	{
		val=input/1E9;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"G"+postUnit;
	}
	else if (input>0.5E6)
	{
		val=input/1E6;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"M"+postUnit;
	}
	else if (input>0.5E3)
	{
		val=input/1E3;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"k"+postUnit;
	}
	else if (input>0.5)
	{
		val=input/1;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+postUnit;
	}
	else if (input>0.5E-3)
	{
		val=input/1E-3;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"m"+postUnit;
	}
	else if (input>0.5E-6)
	{
		val=input/1E-6;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"µ"+postUnit;
	}
	else if (input>0.5E-9)
	{
		val=input/1E-9;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"n"+postUnit;
	}
	else if (input>0.5E-12)
	{
		val=input/1E-12;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"p"+postUnit;
	}
	else
	{
		val=input/1E-15;
		PostDigits = NrDigits - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		return val.toFixed(PostDigits)+preUnit+"f"+postUnit;
	}
}

//#####################################################################################
function getResistance(input)  //length in mm, diameter in mm, Resistivity in Ohm * mm² /m, current in Ampere
{
	var retval = new Object;
	
	retval.Resistance = input.Length/input.CrossSection * input.Resistivity /1000;
	retval.VoltageDrop = input.Current * retval.Resistance;
	retval.PowerLoss = input.Current * retval.VoltageDrop;

	retval.CrossSectionStr = scaleArea(input.CrossSection/1000000,3);

	retval.ResistanceStr = scalePhysicalValue(retval.Resistance,"","&Omega;",3);

	retval.VoltageDropStr = scalePhysicalValue(retval.VoltageDrop,"","V",3);

	retval.PowerLossStr = scalePhysicalValue(retval.PowerLoss,"","W",3);

	return retval;  
}

//#####################################################################################
function getThermalResistance(input)  //length in m, diameter in m, Resistivity in Ohm * mm² /m, 
{
	var A;
	var retval = new Object;
		
	retval.ThermalResistance = (input.Length/1000)/(input.CrossSection * input.ThermalConductivity);
	retval.TemperatureDrop = input.Power * retval.ThermalResistance;
		
	retval.CrossSectionStr = scaleArea(input.CrossSection/1000000,3);

	retval.ThermalResistanceStr = scalePhysicalValue(retval.ThermalResistance,"K/","W",3);

	retval.TemperatureDropStr = scalePhysicalValue(retval.TemperatureDrop,"","K",3);

	return retval;  
}

//#####################################################################################
function getMaterialProperties(material)
{
	var retval = new Object;
	
	switch (material)
	{
	case "copper":
		retval.Resistivity 			= 0.0175;
		retval.TempCo 				= 0.0039;
		retval.ThermalConductivity 	= 355;			
		retval.Density 				= 8.92;
		retval.HeatCapacity 		= 385;
		break;
	case "aluminium":
		retval.Resistivity 			= 0.0265;
		retval.TempCo 				= 0.0039;
		retval.ThermalConductivity 	= 175;
		retval.Density 				= 2.70;
		retval.HeatCapacity 		= 897;
		break;
	case "brass":
		retval.Resistivity 			= 0.07;
		retval.TempCo 				= 0.0015;
		retval.ThermalConductivity 	= 120;
		retval.Density 				= 8.60;
		retval.HeatCapacity 		= 377;
		break;
	case "gold":
		retval.Resistivity 			= 0.02214;
		retval.TempCo 				= 0.0039;
		retval.ThermalConductivity 	= 314;
		retval.Density 				= 19.32;
		retval.HeatCapacity 		= 128;
		break;
	case "silver":
		retval.Resistivity 			= 0.01587;
		retval.TempCo 				= 0.0038;
		retval.ThermalConductivity 	= 407;
		retval.Density 				= 10.49;
		retval.HeatCapacity 		= 235;
		break;
	case "solderPB":
		retval.Resistivity 			= 0.153;
		retval.TempCo 				= 0.003;	//geschätzt
		retval.ThermalConductivity 	= 49;
		retval.Density				= 8.5;
		retval.HeatCapacity			= 180;	
		break;
	case "solderPBF":
		retval.Resistivity 			= 0.130;
		retval.TempCo 				= 0.003;	//geschätzt
		retval.ThermalConductivity 	= 60;
		retval.Density				= 7.4;
		retval.HeatCapacity			= 220;	
		break;
	case "iron":
		retval.Resistivity 			= 0.12;
		retval.TempCo 				= 0.0056;
		retval.ThermalConductivity 	= 80;
		retval.Density 				= 7.86;
		retval.HeatCapacity 		= 449;		
		break;
	case "steel_low":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 42;
		retval.Density				= 7.86;
		retval.HeatCapacity			= 490;
		break;
	case "steel_high":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 15;		
		retval.Density				= 7.86;
		retval.HeatCapacity			= 470;
		break;
	case "steel":
		retval.Resistivity 			= 0.2;
		retval.TempCo 				= 0.0056;
		retval.ThermalConductivity 	= 42;
		retval.Density				= 7.86;
		retval.HeatCapacity			= 490;
		break;		
	case "FR4":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.15;
		retval.Density				= 1.9;
		retval.HeatCapacity			= 600;
		break;
	case "glass":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.76;
		retval.Density				= 2.5;
		retval.HeatCapacity			= 750;
		break;		
	case "PE":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.33;
		retval.Density				= 0.94;
		retval.HeatCapacity			= Number.NaN;
		break;
	case "PP":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.23;
		retval.Density				= 0.9;
		retval.HeatCapacity			= Number.NaN;
		break;
	case "PVC":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.17;
		retval.Density				= 1.5;
		retval.HeatCapacity			= Number.NaN;
		break;
	case "silicon":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 150;
		retval.Density 				= 2.34;
		retval.HeatCapacity 		= 703;
	case "silicone":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.2;
		retval.Density				= Number.NaN;
		retval.HeatCapacity			= Number.NaN;
		break;
	case "water":
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= 0.597;
		retval.Density 				= 1.00;
		retval.HeatCapacity 		= 4184;
		break;
	default:
		retval.Resistivity 			= Number.NaN;
		retval.TempCo 				= Number.NaN;
		retval.ThermalConductivity 	= Number.NaN;
		retval.Density				= Number.NaN;
		retval.HeatCapacity			= Number.NaN;
		break;
	}
	return retval;	
}

//#####################################################################################
function getCapacitance(input)  
{
	var retval = new Object;
		
	retval.Capacitance = (input.Area * input.Er *8.854E-12)/(input.Thickness)
	
	retval.CapacitanceStr = scalePhysicalValue(retval.Capacitance,"","F",3);

	return retval;  
}

//#####################################################################################
function getRmAl(input)
{
	var retval = new Object;

	retval.Rm = input.Length/(input.Crosssection*input.ur*1.2566E-6);	
	retval.AlStr=scalePhysicalValue(1/retval.Rm,"","H",3);
	
	if (retval.Rm>0.1E12)
	{
		val=retval.Rm/1E12;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/pH";
	}
	else if (retval.Rm>0.1E9)
	{
		val=retval.Rm/1E9;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/nH";
	}
	else if (retval.Rm>0.1E6)
	{
		val=retval.Rm/1E6;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/µH";
	}
	else if (retval.Rm>0.1E3)
	{
		val=retval.Rm/1E3;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/mH";
	}
	else if (retval.Rm>0.1)
	{
		val=retval.Rm/1;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/H";
	}
	else if (retval.Rm>0.1E-3)
	{
		val=retval.Rm/1E-3;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/kH";
	}
	else if (retval.Rm>0.1E-6)
	{
		val=retval.Rm/1E-6;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/MH";
	}
	else
	{
		val=retval.Rm/1E-9;
		PostDigits = 3 - getPreDigits(val);
		if (PostDigits<0) PostDigits=0;
		retval.RmStr = val.toFixed(PostDigits)+" 1/GH";
	}

	
	return retval;
}

//#####################################################################################
function getRadiatedPower(input)
{
	var retval = new Object;
	retval.Area = input.Length * input.Width/1000000;	//m²
	retval.RadiatedPower = input.Emissivity * retval.Area * k * (Math.pow((input.SurfaceTemperature + 273.4),4) - Math.pow((input.AmbientTemperature + 273.4),4));

	retval.AreaStr = scaleArea(retval.Area,3);
	
	retval.RadiatedPowerStr = scalePhysicalValue(retval.RadiatedPower,"","W",3);

	return retval;	
}

//#####################################################################################
function getAdiabaticTempDiff(Power, Duration, Len, Width, Thickness, Density, HeatCapacity)
{
	Volume = Len * Width * Thickness;	//mm³
	Mass = Volume * Density;			//mg
	Energy = Power * Duration;			//Joule
	return (Energy/(Mass/1000000 * HeatCapacity));//Kelvin
}

//#####################################################################################
function getMaterialEmissionCoeff(material)
{	
	switch (material)
	{
	case "plastic":
		Emissivity	= 0.94;
		break;
	case "aluminium polished":
		Emissivity	= 0.05;
		break;
	case "aluminium anodised":
		Emissivity	= 0.8;
		break;	
	case "varnish":
		Emissivity	= 0.9;
		break;
	case "glass":
		Emissivity	= 0.9;
		break;
	case "paper":
		Emissivity	= 0.95;
		break;
	case "wood":
		Emissivity	= 0.9;
		break;
	case "water":
		Emissivity	= 0.96;
		break;

	}
	return Emissivity;	
}
