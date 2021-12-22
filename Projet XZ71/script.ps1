$post = "test";
$WebReponces = Invoke-WebRequest -Uri http://127.0.0.1:8000 -Method POST -Body $post -UseBasicParsing;
Write-Host($WebReponces.StatusDescription)
if($WebReponces.StatusDescription -eq "OK"){
    Write-Host ("Réponces : "+$WebReponces.StatusDescription);
}else{
    Write-Host("PAs la bonne réponces");
}