  <a href="#x" class="overlay" id="payers"></a>
        <div class="popup" style=' background-color:#e4e1d7;'>
		 <div id='payer'>
		

     <div style='padding-left:10px;font-size:13px;padding-top:20px;font-family:arial'>
	  <table  cellspacing='16' border='0' style='width:870px;font-size:16px;'>
		
		
		<tr>
			<td align='center' width='33%'><b>Encaissement N&deg;</b><br /><input type="number" name="neencais" id="neencais" value="<?php echo time(); ?>" style='width:270px;text-align:center;font-size:22px;height:40px;' readonly></td>
			<td align='center' width='33%'><b>Date</b><br /><input type="date" name="dateeencais" id="dateeencais" value="<?php echo date("Y-m-d"); ?>" style='width:270px;text-align:center;font-size:22px;height:40px;'></td>
			<td align='center' width='33%'><b>Code Client</b><br /><input type="text" name="clienteencais" id="clienteencais" value="19801501" style='width:270px;text-align:center;font-size:22px;height:40px;' readonly></td>
		</tr>
		<tr><td colspan='3'>&nbsp;</td></tr>
		<tr>
			<td align='center' ><b>Montant du</b><br /><input type="text" name="duencais" id="duencais" value="0.00" style='width:270px;text-align:center;font-size:22px;height:40px;' readonly></td>
			<td align='center' ><b>Montant encaiss&eacute;</b><br /><input type="text" name="encais" id="encais" value="0.00" style='width:270px;text-align:center;font-size:22px;height:40px;' readonly></td>
			<td align='center'><b>Solde</b><br /><input type="text" name="soldeencais" id="soldeencais" value="0.00" style='width:270px;text-align:center;font-size:22px;height:40px;' readonly></td>
		</tr>
		<tr><td colspan='3'>&nbsp;</td></tr>
		<tr>
			<td align='center' colspan='2'><b>Mode de Paiement</b><br /><select name='mdpencais' id='mdpencais' style='width:270px;height:40px;text-align:center;font-size:22px;height:40px;'><option value='1'>Esp&egrave;ces</option><option value='2'>Carte bancaire</option><option value='3'>Ch&egrave;que</option></td>
			<td align='center'><b>Montant</b><br /><input type="text" name="montantencais" id="montantencais" value="0.00" style='width:270px;text-align:center;font-size:22px;height:40px;'></td>
		</tr>
		<tr><td colspan='3'>&nbsp;<input type='hidden' id='totaleencais'></td></tr>
		<tr>
			<td valign='top' style='padding-top:4px;' align='center' colspan='3'><a class="super button17 pink" href="javascript:validerpaye()"  style='color:#fff;font-size:30px;font-weight:bold'>VALIDER CE PAIEMENT</a></td>
		</tr>
		<!--<tr>
			<td align='center'><input type="text" name="prenomclient" id="prenomclient" placeholder="Pr&eacute;nom Client" required></td>
		</tr>
		<tr>	
			<td align='center'><input type="text" name="emailclient" id="emailclient" placeholder="Adresse E-Mail" ></td>
		</tr>
		<tr>
			<td align='center'><input type="text" name="phoneclient" id="phoneclient" placeholder="T&eacute;l&eacute;phone" ></td>
		</tr>
		<tr>
			<td align='center' ><input type="text" name="adresseclient" id="adresseclient" placeholder="Adresse" style='width:400px;'></td>
		</tr>
		<tr>
			<td align='center'><input type="date" name="dateclient" style='height:35px;' id="dateclient" value="1990-01-01" ></td>
		</tr>
		<tr>
			<td valign='top' style='padding-top:4px;' align='center'><a class="super button16 pink" href="javascript:newclient()" style='color:#000;'>Enregistrer</a></td>
		</tr>-->
	</table>
			
	</div><a class="close" href="#" style='color:red;'>&nbsp;&nbsp;</a><a class="titrepayer" href="" >&nbsp;&nbsp;</a>
	</div>
        </div>