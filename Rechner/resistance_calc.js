//<script src="calculators.js" type="text/javascript"></script>
function Calc()
{
	var input = new Object();
	var output = new Object();

	material = document.InputForm.Material.value;
	
	if (material=="manual")
	{
		MatProp.Resistivity = parseFloat(document.InputForm.Resistivity.value);
		MatProp.TempCo = 0;
		document.InputForm.Temperature.disabled=true;		
		document.InputForm.Resistivity.disabled=false;		
	}
	else
	{
		MatProp = getMaterialProperties(material);
		document.InputForm.Temperature.disabled=false;		
		document.InputForm.Resistivity.disabled=true;		
	}
	  
	if (isNaN(MatProp.Resistivity))
	{
		alert("Ungültige Eingabe des spezifischen Widerstands");
		return;
	}      
	input.Length = parseFloat(document.InputForm.Length.value);
	if (isNaN(input.Length))
	{
		alert("Ungültige Eingabe der Leiterlänge");
		return;
	}      
	input.Current = parseFloat(document.InputForm.Current.value);   
	if (isNaN(input.Current))
	{
		alert("Ungültige Eingabe des Stroms");
		return;
	}      
	Temperature = parseFloat(document.InputForm.Temperature.value);   
	if (isNaN(Temperature))
	{
		alert("Ungültige Eingabe der Temperatur");
		return;
	}      
	input.Resistivity = MatProp.Resistivity*(1+MatProp.TempCo*(Temperature-20));
	document.InputForm.Resistivity.value = input.Resistivity.toFixed(4);      

	if (document.InputForm.Shape[0].checked)
	{
		Diameter = parseFloat(document.InputForm.Dia.value);
		if (isNaN(Diameter))
		{
			alert("Ungültige Eingabe des Leiterdurchmessers");
			return;
		}      
		input.CrossSection = (Diameter/2)*(Diameter/2)*3.1415926536;
		document.getElementById('BlockForm').style.visibility='hidden';
		document.getElementById('BlockForm').style.position='absolute';
		document.getElementById('CylinderForm').style.visibility='visible';	
		document.getElementById('CylinderForm').style.position='static';	
	}	
	else if (document.InputForm.Shape[1].checked)
	{
		Width = parseFloat(document.InputForm.Width.value);
		if (isNaN(Width))
		{
			alert("Ungültige Eingabe der Leiterbreite");
			return;
		}      
		Height = parseFloat(document.InputForm.Height.value);
		if (isNaN(Height))
		{
			alert("Ungültige Eingabe der Leiterhöhe");
			return;
		}
		input.CrossSection = Height * Width;  
		document.getElementById('BlockForm').style.visibility='visible';
		document.getElementById('BlockForm').style.position='static';
		document.getElementById('CylinderForm').style.visibility='hidden';
		document.getElementById('CylinderForm').style.position='absolute';	
	}
	output = getResistance(input);

	document.getElementById('CrossSection').innerHTML = output.CrossSectionStr;
	document.getElementById('Resistance').innerHTML = output.ResistanceStr;
	document.getElementById('VoltageDrop').innerHTML = output.VoltageDropStr;
	document.getElementById('PowerLoss').innerHTML = output.PowerLossStr;      
	}