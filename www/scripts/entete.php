					<?php
			
					$dateactuel=date("Y-m-d");					
					 if(date("H")=="00") $heuremin="23";else $heuremin=date("H")-1;
					 if(date("H")=="23") $heuremax="00";else $heuremax=date("H")+1;
					 if(strlen($heuremin)==1) $heuremin='0'.$heuremin;if(strlen($heuremax)==1) $heuremax='0'.$heuremax;
					 $heuremin=$heuremin.":00:00";$heuremax=$heuremax.":00:00";
					 
					 
					 $requete1wff="SELECT * from alerte where statut=0 and date='".$dateactuel."' and heure >='".$heuremin."' and heure <='".$heuremax."'  and user='".$_SESSION['userdognour']."'";
					$resultat1wff= ExecRequete($requete1wff, $connect);
					$nbr1wff=mysql_num_rows($resultat1wff);
					
					$requete1wfff="SELECT * from mailings  where destinataire='".$_SESSION['userdognour']."' and typedestinataire='1' and lu='0' and statut='0' order by date desc";
					$resultat1wfff= ExecRequete($requete1wfff, $connect);
					$nbr1wfff=mysql_num_rows($resultat1wfff);
					
					?>
					
			<div id='logo'><a href='home.php' style='outline:none;'><img src='pictures/thehotdog.png' style='border:0px;height:70px;' /></a></div>
			<div id='raison'>&nbsp;</div>
			<div id='mesinfos'><div style='height:20px;clear:both;'>Bonjour <?php echo $_SESSION['prenomdognour']; ?>&nbsp;|<font color='#fcb614'><b>&nbsp;Ann&eacute;e&nbsp;<?php echo $_SESSION['saisonsdognour']; ?></b></font></div><div style='height:20px;clear:both;'>
			<?php if($_SESSION['userdognourstatut']=='Administrateur') { ?><a href='#' class='lien6' onclick="fact(27);view(27,0)"><?php } else { ?>
			<a href='#' class='lien6' onclick="fact(24);view(24,0)"><?php } ?>Mon profil</a> | <a href='disconnect.php' class='lien6'>Se déconnecter&nbsp;<img src='icones/delete.png' style='border:0px;height:12px;' /></a></div>
			<!--<div style='height:20px;clear:both;'>(<?php //echo $nbr1wff; ?>) Message(s)		</div>-->
			<div>
			<?php if($_SESSION['userdognourstatut']=='Administrateur') { ?>
			<div id='monalertes' style='font-family:arial;font-size:11px;color:white;font-weight:bold;float:left;width:50%' onclick="fact(29,0);">&nbsp;<?php if($nbr1wff>0) { ?><blink><?php echo $nbr1wff.' Alerte(s)';?></blink><?php } else { ?><?php echo $nbr1wff.' Alerte(s)';?><?php } ?>&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<?php } ?>
			<div id='monreceptions' style='font-family:arial;font-size:11px;color:white;font-weight:bold;float:left;width:50%;color:#fcb614' onclick="fact(47,0);">&nbsp;<?php if($nbr1wfff>0) { ?><blink><?php echo $nbr1wfff.' Alerte(s)';?></blink><?php } else { ?><?php echo $nbr1wfff.' Message(s)';?><?php } ?>&nbsp;&nbsp;&nbsp;&nbsp;</div>
			</div>
			
			
			</div>