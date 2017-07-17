<?php

$array = [-5,-5,-8];
$min_sum = $array[0] + $array[1];
for( $l = 0; $l <= count($array) -1;  $l++ ){
    for( $j = $l + 1; $j <= count($array) -1;  $j++ ){
        $temp =  $array[$l] + $array[$j];
        if (abs($temp) < abs($min_sum)) 
            $min_sum = $temp;
    }
}

echo $min_sum;