<div id="menuh">
			<?php
				$requete1ws="SELECT * from menu where parent='0' order by ordre asc";
				$resultat1ws= ExecRequete($requete1ws, $connect);$cpt=0;
				while($ligne1ws=mysql_fetch_array($resultat1ws)) {
				$cpt++;
				
					$requete1wss9="SELECT droit from droitmenu where (user='".$_SESSION['userdognour']."' and module='".$ligne1ws['page']."')";//echo $requete1w;
					$resultat1wssaa9= ExecRequete($requete1wss9, $connect);
					$ligne1w9=mysql_fetch_array($resultat1wssaa9);$droitbid=$ligne1w9['droit'];
					if($_SESSION['userdognourstatut']!='Administrateur') $droitbid=2;
			if($droitbid==1 or $droitbid==2) { ?>
			<ul>
			<li><a href="#"  onmouseOver="vidersousmenu();monmenu(<?php echo $cpt; ?>)" onmouseOut="resousmenu();"  onclick="sousmenu(<?php echo $cpt; ?>);fact(<?php echo $ligne1ws['page']; ?>,0)" style="font-size:12px;font-family:verdana;font-weight:light;text-align:center;letter-spacing:0.8px;background-color:none;"  id='menu<?php echo $cpt; ?>' >&nbsp;&nbsp;<?php echo textemenu($ligne1ws['libelle']); ?>&nbsp;&nbsp;</a>
			
				<?php
				//$requete1ws4="SELECT * from menu where parent='1' and categorieParent='".$ligne1ws['id']."' order by ordre asc";//echo $requete1w;
				if($_SESSION['userdognourstatut']=='Club') $requete1ws4="SELECT * from menu where parent='1' and categorieParent='".$ligne1ws['id']."' and (page=6 or page=43 or page=24 or page=25 or page=26 or page=33 or page=34 or page=35 or page=37 or page=40 or (page>=46 and page<=50) ) order by ordre asc";
				else if($_SESSION['userdognourstatut']=='Arbitre') $requete1ws4="SELECT * from menu where parent!=0 and page!=0 and categorieParent='".$ligne1ws['id']."'  and (page=33 or page=34 or page=35 or page=30 or page=32 or page=41 or page=74 or page=46 or page=47 or page=48 )order by ordre asc";
				else $requete1ws4="SELECT * from menu where parent='1' and categorieParent='".$ligne1ws['id']."' order by ordre asc";
				$resultat1ws4d= ExecRequete($requete1ws4, $connect);
				$nbr4d=mysql_num_rows($resultat1ws4d);
				if($nbr4d!=0) {
				
					?>
				
				<ul>
				<?php
				
				$resultat1ws4= ExecRequete($requete1ws4, $connect);$cptt=0;
				while($ligne1ws4=mysql_fetch_array($resultat1ws4)) {
				$cptt++;
				$requete1ws4e="SELECT * from menu where parent='2' and categorieParent='".$ligne1ws4['id']."' order by ordre asc";//echo $requete1w;
				$resultat1ws4de= ExecRequete($requete1ws4e, $connect);
				$nbr4de=mysql_num_rows($resultat1ws4de);
				if($ligne1ws4['id']==39) $zero=4;else if($ligne1ws4['id']==50) $zero=5;	else $zero=0;
				
				
					$requete1wss99="SELECT droit from droitmenu where (user='".$_SESSION['userdognour']."' and module='".$ligne1ws4['page']."')";//echo $requete1w;
					$resultat1wssaa99= ExecRequete($requete1wss99, $connect);
					$ligne1w99=mysql_fetch_array($resultat1wssaa99);$droitbid9=$ligne1w99['droit'];
					if($_SESSION['userdognourstatut']!='Administrateur') $droitbid9=2;
					if($droitbid9==1 or $droitbid9==2) { ?>
				
				
								
					<li><a href="#"  onmouseOver="vidersousmenu();" onmouseOut="resousmenu();"  onclick="sousmenu(<?php echo $cpt; ?>);fact(<?php echo $ligne1ws4['page']; ?>,<?php echo $zero; ?>);<?php if($ligne1ws4['page']==85) { ?>affichestockp();<?php } ?><?php if($ligne1ws4['page']==87) { ?>affichestockpt();<?php } ?><?php if($ligne1ws4['page']==86) { ?>affichestockpa();<?php } ?><?php if($ligne1ws4['page']==88) { ?>affichestockpe();<?php } ?><?php if($ligne1ws4['page']==82) { ?>afficherbee();<?php } ?><?php if($ligne1ws4['page']==83) { ?>afficherbees();<?php } ?>" <?php if($nbr4de==0) { ?>class="parentbis"<?php } else { ?>class='parent'<?php } ?>>&nbsp;&nbsp;<?php echo textemenu($ligne1ws4['libelle']); ?>&nbsp;&nbsp;</a>
					
				
				
				<?php
				
				if($nbr4de!=0) {
				?>
				<ul>
										<?php
								$resultat1ws4f= ExecRequete($requete1ws4e, $connect);$cpttt=0;
								while($ligne1ws4f=mysql_fetch_array($resultat1ws4f)) {
								$cpttt++;
								
								$requete1wss999="SELECT droit from droitmenu where (user='".$_SESSION['userdognour']."' and module='".$ligne1ws4f['page']."')";//echo $requete1w;
								$resultat1wssaa999= ExecRequete($requete1wss999, $connect);
								$ligne1w999=mysql_fetch_array($resultat1wssaa999);$droitbid99=$ligne1w999['droit'];
					if($droitbid99==1 or $droitbid99==2) { ?>
								
								
					<li><a href="#"  onmouseOver="vidersousmenu();" onmouseOut="resousmenu();"  onclick="sousmenu(<?php echo $cpt; ?>);fact(<?php echo $ligne1ws4f['page']; ?>,0)" class="acte">&nbsp;&nbsp;<?php echo textemenu($ligne1ws4f['libelle']); ?>&nbsp;&nbsp;</a></li>
					
				<?php } } ?>

					
					</ul>		
				<?php } ?>
						</li>	
					<?php } } ?>
				</ul>		
							
				
				<?php } ?>
		
		
		</li>
		
		
		
		
		
			</ul>
			
			<?php } } ?>
			
</div>

	<div style='height:25px;width:100%;clear:both;background-color:#414040;color:black;font-size:11px;font-family:verdana;'>
					<div style='float:left;width:2%;'>&nbsp;</div>
				<div style='float:left;width:98%;height:15px;color:black;font-size:11px;font-family:verdana;text-align:center;padding-top:4px;text-align:left;visibility:visible' id='sousmenu'>&nbsp;</div>
				
			
			
			
			
			</div>