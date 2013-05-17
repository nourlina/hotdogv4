<?php 
if (!isset ($FichierConnexion))
{
	$FichierConnexion=1;

	function Connexion ()
	{
	
		$connexion = mysql_connect("localhost", "linaweb_dog", "123dog456x");
		
		if (!$connexion)
		{
			echo "Désolé, la connexion au serveur est impossible\n";
			exit;
		}
	
		if (!mysql_select_db('linaweb_hotdog', $connexion))
		{
			echo "Désolé mais l'accès à la base  est impossible\n";
			exit;
		}
		return $connexion;
	}
}
?>
