function _plate_left_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[57.975,-198.214782],[57.975,-131.92]]).appendArc([59.975,-129.92],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.975,-129.92]).appendArc([76.975,-127.92],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.975,-126.11]).appendPoint([93.975,-126.11]).appendArc([95.975,-124.11],{"radius":2,"clockwise":false,"large":false}).appendPoint([95.975,-118.585]).appendArc([97.975,-116.585],{"radius":2,"clockwise":true,"large":false}).appendPoint([112.975,-116.585]).appendArc([114.975,-114.585],{"radius":2,"clockwise":false,"large":false}).appendPoint([114.975,-113.8225]).appendArc([116.975,-111.8225],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.025,-111.8225]).appendArc([137.025,-113.8225],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.025,-114.585]).appendArc([139.025,-116.585],{"radius":2,"clockwise":false,"large":false}).appendPoint([154.025,-116.585]).appendArc([156.025,-118.585],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.025,-119.4425]).appendPoint([173.025,-119.4425]).appendArc([175.025,-121.4425],{"radius":2,"clockwise":true,"large":false}).appendPoint([175.025,-203.1420404]).appendArc([176.3409598,-205.0214257],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.6657369,-209.1433074]).appendArc([188.861082,-211.7067328],{"radius":2,"clockwise":true,"large":false}).appendPoint([182.0035781,-230.54757]).appendPoint([162.363646,-223.3992194]).appendPoint([150.8000313,-220.3007582]).appendPoint([150.7744613,-220.445772]).appendArc([59.9274689,-210.905525],{"radius":350,"clockwise":false,"large":false}).appendArc([57.8750002,-208.9062133],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.875,-198.7819101]).appendPoint([57.975,-198.214782]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[69,-188.57],"radius":1.5})
.union(
    CAG.circle({"center":[69,-150.47],"radius":1.5})
).union(
    CAG.circle({"center":[145,-175.235],"radius":1.5})
).union(
    CAG.circle({"center":[145,-137.135],"radius":1.5})
).union(
    CAG.circle({"center":[165.16057,-216.7391738],"radius":1.5})
).union(
    CAG.circle({"center":[107,-175.235],"radius":1.5})
).union(
    new CSG.Path2D([[166.912096,-220.7714042],[179.1281,-225.2176661]]).appendArc([179.7689564,-224.9188299],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.2152183,-212.7028258]).appendArc([183.9163821,-212.0619694],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([171.700378,-207.6157075]).appendArc([171.0595216,-207.9145437],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.6132597,-220.1305478]).appendArc([166.9120959,-220.7714042],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-129.3475],[133,-116.3475]]).appendArc([132.5,-115.8475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.5,-115.8475]).appendArc([119,-116.3475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119,-129.3475]).appendArc([119.5,-129.8475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([132.5,-129.8475]).appendArc([133,-129.3475],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[138.5,-134.61],[151.5,-134.61]]).appendArc([152,-134.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152,-121.11]).appendArc([151.5,-120.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.5,-120.61]).appendArc([138,-121.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138,-134.11]).appendArc([138.5,-134.61],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[100.5,-134.61],[113.5,-134.61]]).appendArc([114,-134.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([114,-121.11]).appendArc([113.5,-120.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5,-120.61]).appendArc([100,-121.11],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100,-134.11]).appendArc([100.5,-134.61],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-148.3975],[133,-135.3975]]).appendArc([132.5,-134.8975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.5,-134.8975]).appendArc([119,-135.3975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119,-148.3975]).appendArc([119.5,-148.8975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([132.5,-148.8975]).appendArc([133,-148.3975],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-167.4475],[133,-154.4475]]).appendArc([132.5,-153.9475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.5,-153.9475]).appendArc([119,-154.4475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119,-167.4475]).appendArc([119.5,-167.9475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([132.5,-167.9475]).appendArc([133,-167.4475],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-186.4975],[133,-173.4975]]).appendArc([132.5,-172.9975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.5,-172.9975]).appendArc([119,-173.4975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119,-186.4975]).appendArc([119.5,-186.9975],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([132.5,-186.9975]).appendArc([133,-186.4975],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[157.5,-137.4675],[170.5,-137.4675]]).appendArc([171,-136.9675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([171,-123.9675]).appendArc([170.5,-123.4675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.5,-123.4675]).appendArc([157,-123.9675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157,-136.9675]).appendArc([157.5,-137.4675],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[157.5,-156.5175],[170.5,-156.5175]]).appendArc([171,-156.0175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([171,-143.0175]).appendArc([170.5,-142.5175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.5,-142.5175]).appendArc([157,-143.0175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157,-156.0175]).appendArc([157.5,-156.5175],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[157.5,-175.5675],[170.5,-175.5675]]).appendArc([171,-175.0675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([171,-162.0675]).appendArc([170.5,-161.5675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.5,-161.5675]).appendArc([157,-162.0675],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157,-175.0675]).appendArc([157.5,-175.5675],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[157.5,-194.6175],[170.5,-194.6175]]).appendArc([171,-194.1175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([171,-181.1175]).appendArc([170.5,-180.6175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.5,-180.6175]).appendArc([157,-181.1175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157,-194.1175]).appendArc([157.5,-194.6175],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[138.5,-153.66],[151.5,-153.66]]).appendArc([152,-153.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152,-140.16]).appendArc([151.5,-139.66],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.5,-139.66]).appendArc([138,-140.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138,-153.16]).appendArc([138.5,-153.66],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[138.5,-172.71],[151.5,-172.71]]).appendArc([152,-172.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152,-159.21]).appendArc([151.5,-158.71],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.5,-158.71]).appendArc([138,-159.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138,-172.21]).appendArc([138.5,-172.71],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[138.5,-191.76],[151.5,-191.76]]).appendArc([152,-191.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152,-178.26]).appendArc([151.5,-177.76],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.5,-177.76]).appendArc([138,-178.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138,-191.26]).appendArc([138.5,-191.76],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[100.5,-153.66],[113.5,-153.66]]).appendArc([114,-153.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([114,-140.16]).appendArc([113.5,-139.66],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5,-139.66]).appendArc([100,-140.16],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100,-153.16]).appendArc([100.5,-153.66],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[100.5,-172.71],[113.5,-172.71]]).appendArc([114,-172.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([114,-159.21]).appendArc([113.5,-158.71],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5,-158.71]).appendArc([100,-159.21],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100,-172.21]).appendArc([100.5,-172.71],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[100.5,-191.76],[113.5,-191.76]]).appendArc([114,-191.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([114,-178.26]).appendArc([113.5,-177.76],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5,-177.76]).appendArc([100,-178.26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100,-191.26]).appendArc([100.5,-191.76],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[81.5,-144.135],[94.5,-144.135]]).appendArc([95,-143.635],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([95,-130.635]).appendArc([94.5,-130.135],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81.5,-130.135]).appendArc([81,-130.635],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81,-143.635]).appendArc([81.5,-144.135],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[81.5,-163.185],[94.5,-163.185]]).appendArc([95,-162.685],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([95,-149.685]).appendArc([94.5,-149.185],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81.5,-149.185]).appendArc([81,-149.685],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81,-162.685]).appendArc([81.5,-163.185],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[81.5,-182.235],[94.5,-182.235]]).appendArc([95,-181.735],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([95,-168.735]).appendArc([94.5,-168.235],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81.5,-168.235]).appendArc([81,-168.735],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81,-181.735]).appendArc([81.5,-182.235],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[81.5,-201.285],[94.5,-201.285]]).appendArc([95,-200.785],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([95,-187.785]).appendArc([94.5,-187.285],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81.5,-187.285]).appendArc([81,-187.785],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([81,-200.785]).appendArc([81.5,-201.285],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[62.5,-147.945],[75.5,-147.945]]).appendArc([76,-147.445],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([76,-134.445]).appendArc([75.5,-133.945],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62.5,-133.945]).appendArc([62,-134.445],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62,-147.445]).appendArc([62.5,-147.945],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[62.5,-166.995],[75.5,-166.995]]).appendArc([76,-166.495],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([76,-153.495]).appendArc([75.5,-152.995],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62.5,-152.995]).appendArc([62,-153.495],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62,-166.495]).appendArc([62.5,-166.995],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[62.5,-186.045],[75.5,-186.045]]).appendArc([76,-185.545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([76,-172.545]).appendArc([75.5,-172.045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62.5,-172.045]).appendArc([62,-172.545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62,-185.545]).appendArc([62.5,-186.045],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[62.5,-205.095],[75.5,-205.095]]).appendArc([76,-204.595],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([76,-191.595]).appendArc([75.5,-191.095],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62.5,-191.095]).appendArc([62,-191.595],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62,-204.595]).appendArc([62.5,-205.095],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[127.8582124,-211.4799411],[140.6607132,-213.7373674]]).appendArc([141.2399411,-213.3317876],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([143.4973674,-200.5292868]).appendArc([143.0917876,-199.9500589],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([130.2892868,-197.6926326]).appendArc([129.7100589,-198.0982124],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.4526326,-210.9007132]).appendArc([127.8582124,-211.4799411],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[147.5879912,-215.273108],[160.145027,-218.6377556]]).appendArc([160.7573994,-218.2842022],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([164.122047,-205.7271664]).appendArc([163.7684936,-205.114794],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([151.2114578,-201.7501464]).appendArc([150.5990854,-202.1036998],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.2344378,-214.6607356]).appendArc([147.5879912,-215.273108],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function left_plate_case_fn() {
                    

                // creating part 0 of case left_plate
                let left_plate__part_0 = _plate_left_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let left_plate__part_0_bounds = left_plate__part_0.getBounds();
                let left_plate__part_0_x = left_plate__part_0_bounds[0].x + (left_plate__part_0_bounds[1].x - left_plate__part_0_bounds[0].x) / 2
                let left_plate__part_0_y = left_plate__part_0_bounds[0].y + (left_plate__part_0_bounds[1].y - left_plate__part_0_bounds[0].y) / 2
                left_plate__part_0 = translate([-left_plate__part_0_x, -left_plate__part_0_y, 0], left_plate__part_0);
                left_plate__part_0 = rotate([0,0,0], left_plate__part_0);
                left_plate__part_0 = translate([left_plate__part_0_x, left_plate__part_0_y, 0], left_plate__part_0);

                left_plate__part_0 = translate([0,0,0], left_plate__part_0);
                let result = left_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_plate_case_fn();
            }

        