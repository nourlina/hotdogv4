  <a href="#x" class="overlay" id="calculatrices"></a>
        <div class="popup">

        <table class="calculatrice" id="calc">
            <tr>
                <td colspan="4" class="calc_td_resultat">
                    <input type="text" readonly="readonly" value="" name="calc_resultat" id="calc_resultat" class="calc_resultat" onkeydown="javascript:key_detect_calc('calc',event);" />
                </td>
            </tr>
            <tr>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="CE" onclick="javascript:f_calc('calc','ce');" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="&larr;" onclick="javascript:f_calc('calc','nbs');" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="%" onclick="javascript:f_calc('calc','%');" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="+" onclick="javascript:f_calc('calc','+');" />
                </td>
            </tr>
            <tr>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="7" onclick="javascript:add_calc('calc',7);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="8" onclick="javascript:add_calc('calc',8);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="9" onclick="javascript:add_calc('calc',9);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="-" onclick="javascript:f_calc('calc','-');" />
                </td>
            </tr>
                        <tr>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="4" onclick="javascript:add_calc('calc',4);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="5" onclick="javascript:add_calc('calc',5);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="6" onclick="javascript:add_calc('calc',6);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="x" onclick="javascript:f_calc('calc','*');" />
                </td>
            </tr>
            <tr>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="1" onclick="javascript:add_calc('calc',1);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="2" onclick="javascript:add_calc('calc',2);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="3" onclick="javascript:add_calc('calc',3);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="&divide;" onclick="javascript:f_calc('calc','/');" />
                </td>
            </tr>
            <tr>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="0" onclick="javascript:add_calc('calc',0);" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="&plusmn;" onclick="javascript:f_calc('calc','+-');" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="," onclick="javascript:add_calc('calc','.');" />
                </td>
                <td class="calc_td_btn">
                        <input type="button" class="calc_btn" value="=" onclick="javascript:f_calc('calc','=');" />
                </td>
            </tr>
        </table>
        <script type="text/javascript">
                document.getElementById('calc').onload=initialiser_calc('calc');
        </script>
    

            <center>
				<!--<a class="close" href="#close">Fermer</a>-->
				<p style='width:135px;height:50px;padding-top:20px;'><a class="super button14 pink" href="#" style='color:#fff;font-size:30px;'>Fermer</a></p>
				
				</center>
        </div>