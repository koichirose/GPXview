<?php
//directory name
$dir = 'gpx';
$base_url = 'http://'.$_SERVER['SERVER_NAME'].'/~koichirose/GPXview';

if ($handle = opendir($dir)) {
    while (false !== ($file = readdir($handle))) {
		if ($file != "." && $file != "..") { ?>
		<a href="<?php echo $base_url.'/'.$dir.'/'.$file;?>"><?php echo $file;?></a>
	<?php }
    }
    closedir($handle);
}
?>
