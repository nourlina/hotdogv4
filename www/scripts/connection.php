<?php 
if (!isset ($FichierConnexion))
{
	$FichierConnexion=1;

	function Connexion ()
	{
	
		$connexion = mysql_connect("localhost", "linaweb_dog", "123dog456x");
		
		if (!$connexion)
		{
			echo "D�sol�, la connexion au serveur est impossible\n";
			exit;
		}
	
		if (!mysql_select_db('linaweb_hotdog', $connexion))
		{
			echo "D�sol� mais l'acc�s � la base  est impossible\n";
			exit;
		}
		return $connexion;
	}
}
?>
