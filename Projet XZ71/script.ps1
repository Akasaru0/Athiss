$post = "key=0b261ad41cee03ca7d479562714256b6";
$WebReponces = Invoke-WebRequest -Uri http://127.0.0.1:3000 -Method POST -Body $post -UseBasicParsing;
Write-Host($WebReponces);

if($WebReponces -contains "3d1571741ef0c562b31d8d8bce2b84f5"){
    Write-Host ("Réponces : "+$WebReponces);
}else{
    Write-Host("PAs la bonne réponces");

}
