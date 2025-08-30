function _base_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[364.975,-211.525],[369.8388315,-211.525]]).appendArc([370.2675635,-211.5411581],{"radius":349.5,"clockwise":true,"large":false}).appendArc([370.414182,-211.525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([385.025,-211.525]).appendArc([387.525,-209.025],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([387.525,-133.825]).appendArc([385.025,-131.325],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([368.525,-131.325]).appendPoint([368.525,-129.92]).appendArc([368.025,-129.42],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([351.025,-129.42]).appendArc([349.525,-127.92],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([349.525,-126.11]).appendArc([349.025,-125.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([332.025,-125.61]).appendArc([330.525,-124.11],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([330.525,-118.585]).appendArc([328.025,-116.085],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([313.025,-116.085]).appendArc([311.525,-114.585],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([311.525,-113.8225]).appendArc([309.025,-111.3225],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([290.975,-111.3225]).appendArc([288.475,-113.8225],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([288.475,-114.585]).appendArc([286.975,-116.085],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([271.975,-116.085]).appendArc([269.475,-118.585],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([269.475,-118.9425]).appendPoint([252.975,-118.9425]).appendArc([250.475,-121.4425],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([250.475,-203.1420404]).appendArc([249.4880302,-204.5515793],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([238.1635502,-208.6733529]).appendArc([236.6689508,-211.8774106],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([243.5265756,-230.7185801]).appendArc([244.167432,-231.0174163],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([263.7868506,-223.876532]).appendPoint([274.97524,-220.8786121]).appendArc([275.3422029,-220.931971],{"radius":0.5,"clockwise":false,"large":false}).appendArc([364.6134774,-211.3704004],{"radius":349.5,"clockwise":true,"large":false}).appendArc([364.975,-211.525],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function outline_right_walls_extrude_16_1_outline_fn(){
    return new CSG.Path2D([[364.975,-213.525],[369.8017179,-213.525]]).appendArc([370.1910138,-213.5396926],{"radius":347.5,"clockwise":true,"large":false}).appendArc([370.5736668,-213.525],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([385.025,-213.525]).appendArc([389.525,-209.025],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([389.525,-133.825]).appendArc([385.025,-129.325],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([370.4531629,-129.325]).appendArc([368.025,-127.42],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([351.525,-127.42]).appendPoint([351.525,-126.11]).appendArc([349.025,-123.61],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([332.525,-123.61]).appendPoint([332.525,-118.585]).appendArc([328.025,-114.085],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([313.525,-114.085]).appendPoint([313.525,-113.8225]).appendArc([309.025,-109.3225],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([290.975,-109.3225]).appendArc([286.475,-113.8225],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([286.475,-114.085]).appendPoint([271.975,-114.085]).appendArc([267.7854662,-116.9425],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([252.975,-116.9425]).appendArc([248.475,-121.4425],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([248.475,-202.7919366]).appendPoint([237.4798772,-206.793834]).appendArc([234.7896865,-212.5617831],{"radius":4.5,"clockwise":false,"large":false}).appendArc([234.7896864,-212.5617833],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([241.6471903,-231.4026204]).appendArc([244.8514723,-232.8968016],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([264.3888343,-225.7857834]).appendPoint([275.0196082,-222.9372761]).appendArc([275.8088599,-222.8767669],{"radius":2.5,"clockwise":false,"large":false}).appendArc([364.0803816,-213.3594503],{"radius":347.5,"clockwise":true,"large":false}).appendArc([364.975,-213.525],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[364.975,-211.525],[369.8388315,-211.525]]).appendArc([370.2675635,-211.5411581],{"radius":349.5,"clockwise":true,"large":false}).appendArc([370.414182,-211.525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([385.025,-211.525]).appendArc([387.525,-209.025],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([387.525,-133.825]).appendArc([385.025,-131.325],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([368.525,-131.325]).appendPoint([368.525,-129.92]).appendArc([368.025,-129.42],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([351.025,-129.42]).appendArc([349.525,-127.92],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([349.525,-126.11]).appendArc([349.025,-125.61],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([332.025,-125.61]).appendArc([330.525,-124.11],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([330.525,-118.585]).appendArc([328.025,-116.085],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([313.025,-116.085]).appendArc([311.525,-114.585],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([311.525,-113.8225]).appendArc([309.025,-111.3225],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([290.975,-111.3225]).appendArc([288.475,-113.8225],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([288.475,-114.585]).appendArc([286.975,-116.085],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([271.975,-116.085]).appendArc([269.475,-118.585],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([269.475,-118.9425]).appendPoint([252.975,-118.9425]).appendArc([250.475,-121.4425],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([250.475,-203.1420404]).appendArc([249.4880302,-204.5515793],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([238.1635502,-208.6733529]).appendArc([236.6689508,-211.8774106],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([243.5265756,-230.7185801]).appendArc([244.167432,-231.0174163],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([263.7868506,-223.876532]).appendPoint([274.97524,-220.8786121]).appendArc([275.3422029,-220.931971],{"radius":0.5,"clockwise":false,"large":false}).appendArc([364.6134774,-211.3704004],{"radius":349.5,"clockwise":true,"large":false}).appendArc([364.975,-211.525],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 16.1] });
}


function _standoff_right_extrude_8_5_outline_fn(){
    return CAG.circle({"center":[376,-190.475],"radius":2.5})
.subtract(
    CAG.circle({"center":[376,-190.475],"radius":1.5})
).union(
    CAG.circle({"center":[376,-152.375],"radius":2.5})
.subtract(
    CAG.circle({"center":[376,-152.375],"radius":1.5})
)).union(
    CAG.circle({"center":[281,-175.235],"radius":2.5})
.subtract(
    CAG.circle({"center":[281,-175.235],"radius":1.5})
)).union(
    CAG.circle({"center":[281,-137.135],"radius":2.5})
.subtract(
    CAG.circle({"center":[281,-137.135],"radius":1.5})
)).union(
    CAG.circle({"center":[260.83943,-216.7391738],"radius":2.5})
.subtract(
    CAG.circle({"center":[260.83943,-216.7391738],"radius":1.5})
)).union(
    CAG.circle({"center":[319,-175.235],"radius":2.5})
.subtract(
    CAG.circle({"center":[319,-175.235],"radius":1.5})
)).extrude({ offset: [0, 0, 8.5] });
}




                function right_case_case_fn() {
                    

                // creating part 0 of case right_case
                let right_case__part_0 = _base_right_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let right_case__part_0_bounds = right_case__part_0.getBounds();
                let right_case__part_0_x = right_case__part_0_bounds[0].x + (right_case__part_0_bounds[1].x - right_case__part_0_bounds[0].x) / 2
                let right_case__part_0_y = right_case__part_0_bounds[0].y + (right_case__part_0_bounds[1].y - right_case__part_0_bounds[0].y) / 2
                right_case__part_0 = translate([-right_case__part_0_x, -right_case__part_0_y, 0], right_case__part_0);
                right_case__part_0 = rotate([0,0,0], right_case__part_0);
                right_case__part_0 = translate([right_case__part_0_x, right_case__part_0_y, 0], right_case__part_0);

                right_case__part_0 = translate([0,0,0], right_case__part_0);
                let result = right_case__part_0;
                
            

                // creating part 1 of case right_case
                let right_case__part_1 = outline_right_walls_extrude_16_1_outline_fn();

                // make sure that rotations are relative
                let right_case__part_1_bounds = right_case__part_1.getBounds();
                let right_case__part_1_x = right_case__part_1_bounds[0].x + (right_case__part_1_bounds[1].x - right_case__part_1_bounds[0].x) / 2
                let right_case__part_1_y = right_case__part_1_bounds[0].y + (right_case__part_1_bounds[1].y - right_case__part_1_bounds[0].y) / 2
                right_case__part_1 = translate([-right_case__part_1_x, -right_case__part_1_y, 0], right_case__part_1);
                right_case__part_1 = rotate([0,0,0], right_case__part_1);
                right_case__part_1 = translate([right_case__part_1_x, right_case__part_1_y, 0], right_case__part_1);

                right_case__part_1 = translate([0,0,0], right_case__part_1);
                result = result.union(right_case__part_1);
                
            

                // creating part 2 of case right_case
                let right_case__part_2 = _standoff_right_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let right_case__part_2_bounds = right_case__part_2.getBounds();
                let right_case__part_2_x = right_case__part_2_bounds[0].x + (right_case__part_2_bounds[1].x - right_case__part_2_bounds[0].x) / 2
                let right_case__part_2_y = right_case__part_2_bounds[0].y + (right_case__part_2_bounds[1].y - right_case__part_2_bounds[0].y) / 2
                right_case__part_2 = translate([-right_case__part_2_x, -right_case__part_2_y, 0], right_case__part_2);
                right_case__part_2 = rotate([0,0,0], right_case__part_2);
                right_case__part_2 = translate([right_case__part_2_x, right_case__part_2_y, 0], right_case__part_2);

                right_case__part_2 = translate([0,0,0], right_case__part_2);
                result = result.union(right_case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_case_case_fn();
            }

        