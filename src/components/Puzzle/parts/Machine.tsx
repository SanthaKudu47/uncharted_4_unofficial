import "./styles.css";

export default function Machine({ animate }: { animate: number }) {
  let currentRotationDeg = animate * 90;
  return (
    <>
      <g id="machine">
        <g
          id="wheel"
          className="wheel"
          style={{
            transform: `rotate(${currentRotationDeg}deg)`,
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1048.3 1123.65C1130.01 1123.65 1196.25 1057.41 1196.25 975.7C1196.25 893.992 1130.01 827.754 1048.3 827.754C966.592 827.754 900.355 893.992 900.355 975.7C900.355 1057.41 966.592 1123.65 1048.3 1123.65ZM1048.3 1072.93C1102 1072.93 1145.53 1029.4 1145.53 975.7C1145.53 921.999 1102 878.467 1048.3 878.467C994.6 878.467 951.068 921.999 951.068 975.7C951.068 1029.4 994.6 1072.93 1048.3 1072.93Z"
            fill="#2B2725"
          />
          <path d="M1033.33 801H1063.67V831.348H1033.33V801Z" fill="#2B2725" />
          <path
            d="M1033.33 1119.65H1063.67V1150H1033.33V1119.65Z"
            fill="#2B2725"
          />
          <path
            d="M1223 960.326V990.674H1192.65V960.326H1223Z"
            fill="#2B2725"
          />
          <path
            d="M904.348 960.326V990.674H874L874 960.326H904.348Z"
            fill="#2B2725"
          />
          <path
            d="M1182.62 1088.16L1161.16 1109.62L1139.7 1088.16L1161.16 1066.7L1182.62 1088.16Z"
            fill="#2B2725"
          />
          <path
            d="M957.299 862.84L935.84 884.299L914.38 862.84L935.84 841.38L957.299 862.84Z"
            fill="#2B2725"
          />
          <path
            d="M935.839 1109.62L914.38 1088.16L935.839 1066.7L957.299 1088.16L935.839 1109.62Z"
            fill="#2B2725"
          />
          <path
            d="M1161.16 884.299L1139.7 862.84L1161.16 841.38L1182.62 862.84L1161.16 884.299Z"
            fill="#2B2725"
          />
          <path
            d="M994.582 1142.15L966.625 1130.35L978.433 1102.39L1006.39 1114.2L994.582 1142.15Z"
            fill="#2B2725"
          />
          <path
            d="M1118.57 848.611L1090.61 836.803L1102.42 808.847L1130.37 820.655L1118.57 848.611Z"
            fill="#2B2725"
          />
          <path
            d="M880.561 925.729L891.673 897.488L919.913 908.6L908.802 936.84L880.561 925.729Z"
            fill="#2B2725"
          />
          <path
            d="M1177.09 1042.4L1188.2 1014.16L1216.44 1025.27L1205.33 1053.51L1177.09 1042.4Z"
            fill="#2B2725"
          />
          <path
            d="M967.248 820.327L995.251 808.632L1006.95 836.635L978.944 848.331L967.248 820.327Z"
            fill="#2B2725"
          />
          <path
            d="M1090.05 1114.37L1118.06 1102.67L1129.75 1130.67L1101.75 1142.37L1090.05 1114.37Z"
            fill="#2B2725"
          />
          <path
            d="M1202.85 892.687L1214.82 920.572L1186.94 932.549L1174.96 904.665L1202.85 892.687Z"
            fill="#2B2725"
          />
          <path
            d="M910.061 1018.45L922.039 1046.34L894.155 1058.31L882.177 1030.43L910.061 1018.45Z"
            fill="#2B2725"
          />
        </g>
        <g id="wheel_2">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1204.3 1411.65C1286.01 1411.65 1352.25 1345.41 1352.25 1263.7C1352.25 1181.99 1286.01 1115.75 1204.3 1115.75C1122.59 1115.75 1056.35 1181.99 1056.35 1263.7C1056.35 1345.41 1122.59 1411.65 1204.3 1411.65ZM1204.3 1360.93C1258 1360.93 1301.53 1317.4 1301.53 1263.7C1301.53 1210 1258 1166.47 1204.3 1166.47C1150.6 1166.47 1107.07 1210 1107.07 1263.7C1107.07 1317.4 1150.6 1360.93 1204.3 1360.93Z"
            fill="#312D29"
          />
          <path
            d="M1189.33 1089H1219.67V1119.35H1189.33V1089Z"
            fill="#312D29"
          />
          <path
            d="M1189.33 1407.65H1219.67V1438H1189.33V1407.65Z"
            fill="#312D29"
          />
          <path
            d="M1379 1248.33V1278.67H1348.65V1248.33H1379Z"
            fill="#312D29"
          />
          <path
            d="M1060.35 1248.33V1278.67H1030L1030 1248.33H1060.35Z"
            fill="#312D29"
          />
          <path
            d="M1338.62 1376.16L1317.16 1397.62L1295.7 1376.16L1317.16 1354.7L1338.62 1376.16Z"
            fill="#312D29"
          />
          <path
            d="M1113.3 1150.84L1091.84 1172.3L1070.38 1150.84L1091.84 1129.38L1113.3 1150.84Z"
            fill="#312D29"
          />
          <path
            d="M1091.84 1397.62L1070.38 1376.16L1091.84 1354.7L1113.3 1376.16L1091.84 1397.62Z"
            fill="#312D29"
          />
          <path
            d="M1317.16 1172.3L1295.7 1150.84L1317.16 1129.38L1338.62 1150.84L1317.16 1172.3Z"
            fill="#312D29"
          />
          <path
            d="M1150.58 1430.15L1122.63 1418.35L1134.43 1390.39L1162.39 1402.2L1150.58 1430.15Z"
            fill="#312D29"
          />
          <path
            d="M1274.57 1136.61L1246.61 1124.8L1258.42 1096.85L1286.37 1108.65L1274.57 1136.61Z"
            fill="#312D29"
          />
          <path
            d="M1036.56 1213.73L1047.67 1185.49L1075.91 1196.6L1064.8 1224.84L1036.56 1213.73Z"
            fill="#312D29"
          />
          <path
            d="M1333.09 1330.4L1344.2 1302.16L1372.44 1313.27L1361.33 1341.51L1333.09 1330.4Z"
            fill="#312D29"
          />
          <path
            d="M1123.25 1108.33L1151.25 1096.63L1162.95 1124.64L1134.94 1136.33L1123.25 1108.33Z"
            fill="#312D29"
          />
          <path
            d="M1246.05 1402.37L1274.06 1390.67L1285.75 1418.67L1257.75 1430.37L1246.05 1402.37Z"
            fill="#312D29"
          />
          <path
            d="M1358.85 1180.69L1370.82 1208.57L1342.94 1220.55L1330.96 1192.66L1358.85 1180.69Z"
            fill="#312D29"
          />
          <path
            d="M1066.06 1306.45L1078.04 1334.34L1050.15 1346.31L1038.18 1318.43L1066.06 1306.45Z"
            fill="#312D29"
          />
        </g>
        <g id="wheel_3">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M893.801 840.645C975.275 840.645 1041.32 774.408 1041.32 692.7C1041.32 610.992 975.275 544.754 893.801 544.754C812.327 544.754 746.279 610.992 746.279 692.7C746.279 774.408 812.327 840.645 893.801 840.645ZM893.801 789.932C947.347 789.932 990.755 746.4 990.755 692.7C990.755 638.999 947.347 595.467 893.801 595.467C840.255 595.467 796.847 638.999 796.847 692.7C796.847 746.4 840.255 789.932 893.801 789.932Z"
            fill="#312D29"
          />
          <path d="M878.87 518H909.13V548.348H878.87V518Z" fill="#312D29" />
          <path d="M878.87 836.652H909.13V867H878.87V836.652Z" fill="#312D29" />
          <path
            d="M1068 677.326V707.674H1037.74V677.326H1068Z"
            fill="#312D29"
          />
          <path
            d="M750.261 677.326V707.674H720L720 677.326H750.261Z"
            fill="#312D29"
          />
          <path
            d="M1027.74 805.161L1006.34 826.62L984.94 805.161L1006.34 783.701L1027.74 805.161Z"
            fill="#312D29"
          />
          <path
            d="M803.06 579.84L781.662 601.299L760.265 579.84L781.662 558.38L803.06 579.84Z"
            fill="#312D29"
          />
          <path
            d="M781.662 826.62L760.265 805.161L781.662 783.702L803.06 805.161L781.662 826.62Z"
            fill="#312D29"
          />
          <path
            d="M1006.34 601.299L984.94 579.84L1006.34 558.38L1027.74 579.84L1006.34 601.299Z"
            fill="#312D29"
          />
          <path
            d="M840.236 859.153L812.36 847.345L824.134 819.389L852.01 831.197L840.236 859.153Z"
            fill="#312D29"
          />
          <path
            d="M963.866 565.611L935.99 553.803L947.764 525.847L975.64 537.655L963.866 565.611Z"
            fill="#312D29"
          />
          <path
            d="M726.543 642.729L737.622 614.488L765.782 625.6L754.702 653.84L726.543 642.729Z"
            fill="#312D29"
          />
          <path
            d="M1022.22 759.4L1033.3 731.16L1061.46 742.271L1050.38 770.512L1022.22 759.4Z"
            fill="#312D29"
          />
          <path
            d="M812.981 537.327L840.904 525.632L852.566 553.635L824.643 565.331L812.981 537.327Z"
            fill="#312D29"
          />
          <path
            d="M935.434 831.365L963.357 819.669L975.019 847.673L947.096 859.369L935.434 831.365Z"
            fill="#312D29"
          />
          <path
            d="M1047.9 609.687L1059.85 637.572L1032.04 649.549L1020.1 621.665L1047.9 609.687Z"
            fill="#312D29"
          />
          <path
            d="M755.958 735.451L767.901 763.335L740.097 775.313L728.154 747.429L755.958 735.451Z"
            fill="#312D29"
          />
        </g>
        <g
          id="wheel_4"
          className="wheel"
          style={{
            transform: `rotate(${currentRotationDeg}deg)`,
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M945.618 1084.56C1102.01 1084.56 1228.79 957.774 1228.79 801.382C1228.79 644.99 1102.01 518.208 945.618 518.208C789.226 518.208 662.444 644.99 662.444 801.382C662.444 957.774 789.226 1084.56 945.618 1084.56ZM945.618 987.49C1048.4 987.49 1131.73 904.167 1131.73 801.382C1131.73 698.598 1048.4 615.275 945.618 615.275C842.833 615.275 759.51 698.598 759.51 801.382C759.51 904.167 842.833 987.49 945.618 987.49Z"
            fill="#403C39"
          />
          <path d="M916.957 467H975.043V525.087H916.957V467Z" fill="#403C39" />
          <path
            d="M916.957 1076.91H975.043V1135H916.957V1076.91Z"
            fill="#403C39"
          />
          <path
            d="M1280 771.957V830.043H1221.91V771.957H1280Z"
            fill="#403C39"
          />
          <path
            d="M670.087 771.957V830.043H612L612 771.957H670.087Z"
            fill="#403C39"
          />
          <path
            d="M1202.71 1016.64L1161.64 1057.71L1120.56 1016.64L1161.64 975.563L1202.71 1016.64Z"
            fill="#403C39"
          />
          <path
            d="M771.437 585.363L730.363 626.437L689.29 585.363L730.363 544.29L771.437 585.363Z"
            fill="#403C39"
          />
          <path
            d="M730.363 1057.71L689.289 1016.64L730.363 975.563L771.437 1016.64L730.363 1057.71Z"
            fill="#403C39"
          />
          <path
            d="M1161.64 626.437L1120.56 585.363L1161.64 544.29L1202.71 585.363L1161.64 626.437Z"
            fill="#403C39"
          />
          <path
            d="M842.798 1119.98L789.289 1097.38L811.89 1043.87L865.399 1066.47L842.798 1119.98Z"
            fill="#403C39"
          />
          <path
            d="M1080.11 558.13L1026.6 535.529L1049.2 482.019L1102.71 504.62L1080.11 558.13Z"
            fill="#403C39"
          />
          <path
            d="M624.559 705.736L645.827 651.683L699.88 672.951L678.612 727.004L624.559 705.736Z"
            fill="#403C39"
          />
          <path
            d="M1192.12 929.049L1213.39 874.996L1267.44 896.264L1246.17 950.317L1192.12 929.049Z"
            fill="#403C39"
          />
          <path
            d="M790.48 503.993L844.08 481.607L866.466 535.207L812.866 557.593L790.48 503.993Z"
            fill="#403C39"
          />
          <path
            d="M1025.53 1066.79L1079.13 1044.41L1101.52 1098.01L1047.92 1120.39L1025.53 1066.79Z"
            fill="#403C39"
          />
          <path
            d="M1241.42 642.493L1264.35 695.865L1210.98 718.79L1188.05 665.419L1241.42 642.493Z"
            fill="#403C39"
          />
          <path
            d="M681.023 883.21L703.948 936.582L650.577 959.507L627.651 906.136L681.023 883.21Z"
            fill="#403C39"
          />
        </g>
        <g id="wheel_5"  className="wheel"
          style={{
            transform: `rotate(${-currentRotationDeg}deg)`,
          }}>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1586.54 1140.53C1742.91 1138.37 1867.93 1009.85 1865.77 853.473C1863.61 697.095 1735.09 572.079 1578.71 574.241C1422.33 576.403 1297.31 704.925 1299.48 861.302C1301.64 1017.68 1430.16 1142.7 1586.54 1140.53ZM1585.2 1043.48C1687.97 1042.06 1770.13 957.589 1768.71 854.815C1767.29 752.04 1682.82 669.877 1580.05 671.298C1477.28 672.719 1395.11 757.186 1396.53 859.96C1397.95 962.735 1482.42 1044.9 1585.2 1043.48Z"
            fill="#403C39"
          />
          <path
            d="M1549.34 523.434L1607.42 522.631L1608.23 580.712L1550.14 581.515L1549.34 523.434Z"
            fill="#403C39"
          />
          <path
            d="M1557.77 1133.29L1615.85 1132.49L1616.66 1190.57L1558.58 1191.37L1557.77 1133.29Z"
            fill="#403C39"
          />
          <path
            d="M1916.57 823.342L1917.37 881.424L1859.29 882.227L1858.48 824.145L1916.57 823.342Z"
            fill="#403C39"
          />
          <path
            d="M1306.71 831.774L1307.51 889.855L1249.43 890.658L1248.63 832.577L1306.71 831.774Z"
            fill="#403C39"
          />
          <path
            d="M1842.67 1069.07L1802.16 1110.71L1760.53 1070.2L1801.03 1028.57L1842.67 1069.07Z"
            fill="#403C39"
          />
          <path
            d="M1405.47 643.797L1364.97 685.435L1323.33 644.933L1363.83 603.295L1405.47 643.797Z"
            fill="#403C39"
          />
          <path
            d="M1370.93 1116.67L1329.29 1076.17L1369.8 1034.53L1411.43 1075.03L1370.93 1116.67Z"
            fill="#403C39"
          />
          <path
            d="M1796.2 679.473L1754.56 638.971L1795.07 597.333L1836.7 637.835L1796.2 679.473Z"
            fill="#403C39"
          />
          <path
            d="M1484.22 1177.38L1430.4 1155.52L1452.26 1101.7L1506.08 1123.56L1484.22 1177.38Z"
            fill="#403C39"
          />
          <path
            d="M1713.74 612.299L1659.92 590.44L1681.78 536.623L1735.6 558.482L1713.74 612.299Z"
            fill="#403C39"
          />
          <path
            d="M1260.27 766.189L1280.79 711.847L1335.13 732.366L1314.61 786.708L1260.27 766.189Z"
            fill="#403C39"
          />
          <path
            d="M1830.87 981.635L1851.38 927.293L1905.73 947.811L1885.21 1002.15L1830.87 981.635Z"
            fill="#403C39"
          />
          <path
            d="M1423.39 562.172L1476.67 539.047L1499.8 592.332L1446.51 615.457L1423.39 562.172Z"
            fill="#403C39"
          />
          <path
            d="M1666.2 1121.67L1719.49 1098.54L1742.61 1151.83L1689.32 1174.95L1666.2 1121.67Z"
            fill="#403C39"
          />
          <path
            d="M1876.2 694.424L1899.86 747.474L1846.82 771.135L1823.15 718.085L1876.2 694.424Z"
            fill="#403C39"
          />
          <path
            d="M1319.18 942.866L1342.85 995.915L1289.8 1019.58L1266.13 966.527L1319.18 942.866Z"
            fill="#403C39"
          />
        </g>
      </g>
    </>
  );
}
