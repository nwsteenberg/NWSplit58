function _plate_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[364.975,-211.025],[369.8480938,-211.025]]).appendArc([370.2867009,-211.0415245],{"radius":350,"clockwise":true,"large":false}).appendPoint([370.2837871,-211.025]).appendPoint([385.025,-211.025]).appendArc([387.025,-209.025],{"radius":2,"clockwise":false,"large":false}).appendPoint([387.025,-133.825]).appendArc([385.025,-131.825],{"radius":2,"clockwise":false,"large":false}).appendPoint([368.025,-131.825]).appendPoint([368.025,-129.92]).appendPoint([351.025,-129.92]).appendArc([349.025,-127.92],{"radius":2,"clockwise":true,"large":false}).appendPoint([349.025,-126.11]).appendPoint([332.025,-126.11]).appendArc([330.025,-124.11],{"radius":2,"clockwise":true,"large":false}).appendPoint([330.025,-118.585]).appendArc([328.025,-116.585],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.025,-116.585]).appendArc([311.025,-114.585],{"radius":2,"clockwise":true,"large":false}).appendPoint([311.025,-113.8225]).appendArc([309.025,-111.8225],{"radius":2,"clockwise":false,"large":false}).appendPoint([290.975,-111.8225]).appendArc([288.975,-113.8225],{"radius":2,"clockwise":false,"large":false}).appendPoint([288.975,-114.585]).appendArc([286.975,-116.585],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.975,-116.585]).appendArc([269.975,-118.585],{"radius":2,"clockwise":false,"large":false}).appendPoint([269.975,-119.4425]).appendPoint([252.975,-119.4425]).appendArc([250.975,-121.4425],{"radius":2,"clockwise":false,"large":false}).appendPoint([250.975,-203.1420404]).appendArc([249.6590402,-205.0214257],{"radius":2,"clockwise":true,"large":false}).appendPoint([238.3342631,-209.1433074]).appendArc([237.138918,-211.7067328],{"radius":2,"clockwise":false,"large":false}).appendPoint([243.9964219,-230.54757]).appendPoint([263.636354,-223.3992194]).appendPoint([275.1999687,-220.3007582]).appendPoint([275.2255387,-220.445772]).appendArc([364.9750003,-210.8784445],{"radius":350,"clockwise":true,"large":false}).appendPoint([364.975,-211.025]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[376,-190.475],"radius":1.5})
.union(
    CAG.circle({"center":[376,-152.375],"radius":1.5})
).union(
    CAG.circle({"center":[281,-175.235],"radius":1.5})
).union(
    CAG.circle({"center":[281,-137.135],"radius":1.5})
).union(
    CAG.circle({"center":[260.83943,-216.7391738],"radius":1.5})
).union(
    CAG.circle({"center":[319,-175.235],"radius":1.5})
).union(
    new CSG.Path2D([[246.8719,-225.2176661],[259.087904,-220.7714042]]).appendArc([259.3867403,-220.1305478],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([254.9404784,-207.9145438]).appendArc([254.299622,-207.6157075],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([242.083618,-212.0619694]).appendArc([241.7847817,-212.7028258],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.2310436,-224.9188298]).appendArc([246.8719,-225.2176661],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293,-116.3475],[293,-129.3475]]).appendArc([293.5,-129.8475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([306.5,-129.8475]).appendArc([307,-129.3475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([307,-116.3475]).appendArc([306.5,-115.8475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([293.5,-115.8475]).appendArc([293,-116.3475],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[274.5,-134.61],[287.5,-134.61]]).appendArc([288,-134.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288,-121.11]).appendArc([287.5,-120.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.5,-120.61]).appendArc([274,-121.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274,-134.11]).appendArc([274.5,-134.61],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[312.5,-134.61],[325.5,-134.61]]).appendArc([326,-134.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([326,-121.11]).appendArc([325.5,-120.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312.5,-120.61]).appendArc([312,-121.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312,-134.11]).appendArc([312.5,-134.61],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293,-135.3975],[293,-148.3975]]).appendArc([293.5,-148.8975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([306.5,-148.8975]).appendArc([307,-148.3975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([307,-135.3975]).appendArc([306.5,-134.8975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([293.5,-134.8975]).appendArc([293,-135.3975],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293,-154.4475],[293,-167.4475]]).appendArc([293.5,-167.9475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([306.5,-167.9475]).appendArc([307,-167.4475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([307,-154.4475]).appendArc([306.5,-153.9475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([293.5,-153.9475]).appendArc([293,-154.4475],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293,-173.4975],[293,-186.4975]]).appendArc([293.5,-186.9975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([306.5,-186.9975]).appendArc([307,-186.4975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([307,-173.4975]).appendArc([306.5,-172.9975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([293.5,-172.9975]).appendArc([293,-173.4975],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[255.5,-137.4675],[268.5,-137.4675]]).appendArc([269,-136.9675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([269,-123.9675]).appendArc([268.5,-123.4675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255.5,-123.4675]).appendArc([255,-123.9675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255,-136.9675]).appendArc([255.5,-137.4675],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[255.5,-156.5175],[268.5,-156.5175]]).appendArc([269,-156.0175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([269,-143.0175]).appendArc([268.5,-142.5175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255.5,-142.5175]).appendArc([255,-143.0175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255,-156.0175]).appendArc([255.5,-156.5175],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[255.5,-175.5675],[268.5,-175.5675]]).appendArc([269,-175.0675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([269,-162.0675]).appendArc([268.5,-161.5675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255.5,-161.5675]).appendArc([255,-162.0675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255,-175.0675]).appendArc([255.5,-175.5675],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[255.5,-194.6175],[268.5,-194.6175]]).appendArc([269,-194.1175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([269,-181.1175]).appendArc([268.5,-180.6175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255.5,-180.6175]).appendArc([255,-181.1175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([255,-194.1175]).appendArc([255.5,-194.6175],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[274.5,-153.66],[287.5,-153.66]]).appendArc([288,-153.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288,-140.16]).appendArc([287.5,-139.66],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.5,-139.66]).appendArc([274,-140.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274,-153.16]).appendArc([274.5,-153.66],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[274.5,-172.71],[287.5,-172.71]]).appendArc([288,-172.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288,-159.21]).appendArc([287.5,-158.71],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.5,-158.71]).appendArc([274,-159.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274,-172.21]).appendArc([274.5,-172.71],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[274.5,-191.76],[287.5,-191.76]]).appendArc([288,-191.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288,-178.26]).appendArc([287.5,-177.76],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.5,-177.76]).appendArc([274,-178.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274,-191.26]).appendArc([274.5,-191.76],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[312.5,-153.66],[325.5,-153.66]]).appendArc([326,-153.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([326,-140.16]).appendArc([325.5,-139.66],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312.5,-139.66]).appendArc([312,-140.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312,-153.16]).appendArc([312.5,-153.66],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[312.5,-172.71],[325.5,-172.71]]).appendArc([326,-172.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([326,-159.21]).appendArc([325.5,-158.71],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312.5,-158.71]).appendArc([312,-159.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312,-172.21]).appendArc([312.5,-172.71],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[312.5,-191.76],[325.5,-191.76]]).appendArc([326,-191.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([326,-178.26]).appendArc([325.5,-177.76],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312.5,-177.76]).appendArc([312,-178.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([312,-191.26]).appendArc([312.5,-191.76],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[331.5,-144.135],[344.5,-144.135]]).appendArc([345,-143.635],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([345,-130.635]).appendArc([344.5,-130.135],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331.5,-130.135]).appendArc([331,-130.635],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331,-143.635]).appendArc([331.5,-144.135],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[331.5,-163.185],[344.5,-163.185]]).appendArc([345,-162.685],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([345,-149.685]).appendArc([344.5,-149.185],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331.5,-149.185]).appendArc([331,-149.685],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331,-162.685]).appendArc([331.5,-163.185],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[331.5,-182.235],[344.5,-182.235]]).appendArc([345,-181.735],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([345,-168.735]).appendArc([344.5,-168.235],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331.5,-168.235]).appendArc([331,-168.735],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331,-181.735]).appendArc([331.5,-182.235],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[331.5,-201.285],[344.5,-201.285]]).appendArc([345,-200.785],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([345,-187.785]).appendArc([344.5,-187.285],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331.5,-187.285]).appendArc([331,-187.785],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([331,-200.785]).appendArc([331.5,-201.285],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[350.5,-147.945],[363.5,-147.945]]).appendArc([364,-147.445],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([364,-134.445]).appendArc([363.5,-133.945],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350.5,-133.945]).appendArc([350,-134.445],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350,-147.445]).appendArc([350.5,-147.945],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[350.5,-166.995],[363.5,-166.995]]).appendArc([364,-166.495],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([364,-153.495]).appendArc([363.5,-152.995],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350.5,-152.995]).appendArc([350,-153.495],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350,-166.495]).appendArc([350.5,-166.995],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[350.5,-186.045],[363.5,-186.045]]).appendArc([364,-185.545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([364,-172.545]).appendArc([363.5,-172.045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350.5,-172.045]).appendArc([350,-172.545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350,-185.545]).appendArc([350.5,-186.045],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[350.5,-205.095],[363.5,-205.095]]).appendArc([364,-204.595],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([364,-191.595]).appendArc([363.5,-191.095],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350.5,-191.095]).appendArc([350,-191.595],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([350,-204.595]).appendArc([350.5,-205.095],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[369.5,-149.85],[382.5,-149.85]]).appendArc([383,-149.35],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([383,-136.35]).appendArc([382.5,-135.85],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369.5,-135.85]).appendArc([369,-136.35],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369,-149.35]).appendArc([369.5,-149.85],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[369.5,-168.9],[382.5,-168.9]]).appendArc([383,-168.4],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([383,-155.4]).appendArc([382.5,-154.9],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369.5,-154.9]).appendArc([369,-155.4],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369,-168.4]).appendArc([369.5,-168.9],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[369.5,-187.95],[382.5,-187.95]]).appendArc([383,-187.45],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([383,-174.45]).appendArc([382.5,-173.95],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369.5,-173.95]).appendArc([369,-174.45],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369,-187.45]).appendArc([369.5,-187.95],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[369.5,-207],[382.5,-207]]).appendArc([383,-206.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([383,-193.5]).appendArc([382.5,-193],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369.5,-193]).appendArc([369,-193.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([369,-206.5]).appendArc([369.5,-207],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[285.3392868,-213.7373674],[298.1417876,-211.4799411]]).appendArc([298.5473674,-210.9007131],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([296.2899411,-198.0982124]).appendArc([295.7107131,-197.6926326],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([282.9082124,-199.9500589]).appendArc([282.5026326,-200.5292869],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.7600589,-213.3317876]).appendArc([285.3392869,-213.7373674],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.854973,-218.6377556],[278.4120088,-215.273108]]).appendArc([278.7655622,-214.6607356],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([275.4009146,-202.1036998]).appendArc([274.7885422,-201.7501464],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([262.2315064,-205.114794]).appendArc([261.877953,-205.7271664],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.2426006,-218.2842022]).appendArc([265.854973,-218.6377556],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function right_plate_case_fn() {
                    

                // creating part 0 of case right_plate
                let right_plate__part_0 = _plate_right_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let right_plate__part_0_bounds = right_plate__part_0.getBounds();
                let right_plate__part_0_x = right_plate__part_0_bounds[0].x + (right_plate__part_0_bounds[1].x - right_plate__part_0_bounds[0].x) / 2
                let right_plate__part_0_y = right_plate__part_0_bounds[0].y + (right_plate__part_0_bounds[1].y - right_plate__part_0_bounds[0].y) / 2
                right_plate__part_0 = translate([-right_plate__part_0_x, -right_plate__part_0_y, 0], right_plate__part_0);
                right_plate__part_0 = rotate([0,0,0], right_plate__part_0);
                right_plate__part_0 = translate([right_plate__part_0_x, right_plate__part_0_y, 0], right_plate__part_0);

                right_plate__part_0 = translate([0,0,0], right_plate__part_0);
                let result = right_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_plate_case_fn();
            }

        