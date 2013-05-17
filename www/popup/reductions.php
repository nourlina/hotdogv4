  <a href="#x" class="overlay" id="reductions"></a>
        <div class="popup" style=' background-color:#000;'>
		 <div id='reduction'>
		
<div style='text-align:center;font-size:24px;font-family:arial;clear:both;width:100%;height:40px;color:#fcb614; '>Modifier l'article</div>
     <div style='padding-left:10px;font-size:13px;padding-top:20px;font-family:arial;background-color:#e4e1d7;-webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;width:400px;'>
	  <table  cellspacing='16' border='0' style='width:400px;font-size:16px;'>
		
		
		<tr>
			<td align='center' width='33%'><input type="text" name="plusarticle" id="plusarticle" value="-" style='width:80px;text-align:center;font-size:50px;height:80px;color:#000' ></td>
			<td align='center' width='34%'><input type="number" name="idarticle" id="idarticle" value="5" style='width:80px;text-align:center;font-size:50px;height:80px;color:#2d0909'></td>
			<td align='center' width='33%'><input type="text" name="moinsarticle" id="moinsarticle" value="+" style='width:80px;text-align:center;font-size:50px;height:80px;' onclick='plusproduits("0","0");'></td>
		</tr>
		<tr><td colspan='3'>&nbsp;<input type='hidden' id='prixarticle'></td></tr>
		<tr>
			<td align='center' colspan='3'><select name="reductionarticle" id="reductionarticle"  style='width:100px;text-align:center;font-size:50px;height:80px;color:#2d0909'><?php for($a=1;$a<=100;$a++) { ?><option value='<?php echo $a; ?>'><?php echo $a; ?>&nbsp;%</option><?php } ?></select></td>
		</tr>
		<tr><td colspan='3'>&nbsp;</td></tr>
		<tr>
			<td valign='top' style='padding-top:4px;' align='center' colspan='3'><a class="super button18 pink" href='#' style='color:#fff;font-size:22px;font-weight:bold'>ENREGISTRER</a></td>
		</tr>
		<tr><td colspan='3'>&nbsp;</td></tr>
	</table>
			
	</div><a class="close" href="#" style='color:white;'>&nbsp;&nbsp;</a>
	</div>
        </div>