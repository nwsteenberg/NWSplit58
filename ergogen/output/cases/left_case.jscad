function _base_left_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[57.475,-198.1710375],[57.475,-131.92]]).appendArc([59.975,-129.42],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([74.975,-129.42]).appendArc([76.475,-127.92],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([76.475,-126.11]).appendArc([76.975,-125.61],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([93.975,-125.61]).appendArc([95.475,-124.11],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([95.475,-118.585]).appendArc([97.975,-116.085],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([112.975,-116.085]).appendArc([114.475,-114.585],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([114.475,-113.8225]).appendArc([116.975,-111.3225],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([135.025,-111.3225]).appendArc([137.525,-113.8225],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([137.525,-114.585]).appendArc([139.025,-116.085],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([154.025,-116.085]).appendArc([156.525,-118.585],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([156.525,-118.9425]).appendPoint([173.025,-118.9425]).appendArc([175.525,-121.4425],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([175.525,-203.1420404]).appendArc([176.5119698,-204.5515793],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([187.8364498,-208.6733529]).appendArc([189.3310492,-211.8774107],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([182.4734244,-230.7185801]).appendArc([181.832568,-231.0174163],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([162.21315,-223.8765322]).appendPoint([151.02476,-220.8786121]).appendArc([150.6577971,-220.931971],{"radius":0.5,"clockwise":true,"large":false}).appendArc([59.9405861,-211.4053529],{"radius":349.5,"clockwise":false,"large":false}).appendArc([57.3750002,-208.9065669],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([57.375,-198.7819102]).appendArc([57.3825961,-198.6950861],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([57.475,-198.1710375]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function outline_left_walls_extrude_16_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[59.8750002,-208.9062133],"radius":4.5,"startangle":180,"endangle":271.4897856}).appendArc([59.9930548,-213.4046646],{"radius":2.5,"clockwise":false,"large":false}).appendArc([150.1911401,-222.8767669],{"radius":347.5,"clockwise":true,"large":false}).appendArc([150.9803919,-222.9372761],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([161.6111643,-225.7857829]).appendPoint([181.1485278,-232.8968016]).appendArc([184.3528096,-231.4026204],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([191.2103135,-212.5617832]).appendArc([191.2106761,-212.5607864],{"radius":2.5,"clockwise":false,"large":false}).appendArc([188.5207872,-206.7940758],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([177.525,-202.7919366]).appendPoint([177.525,-121.4425]).appendArc([173.025,-116.9425],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([158.2145338,-116.9425]).appendArc([154.025,-114.085],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([139.525,-114.085]).appendPoint([139.525,-113.8225]).appendArc([135.025,-109.3225],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([116.975,-109.3225]).appendArc([112.475,-113.8225],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([112.475,-114.085]).appendPoint([97.975,-114.085]).appendArc([93.475,-118.585],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([93.475,-123.61]).appendPoint([76.975,-123.61]).appendArc([74.475,-126.11],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([74.475,-127.42]).appendPoint([59.975,-127.42]).appendArc([55.475,-131.92],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([55.475,-197.9960602]).appendPoint([55.4129806,-198.3477897]).appendArc([55.375,-198.7819102],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([55.3750001,-208.9062133]).appendArc([55.3750003,-208.907274],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[57.475,-198.1710375],[57.475,-131.92]]).appendArc([59.975,-129.42],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([74.975,-129.42]).appendArc([76.475,-127.92],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([76.475,-126.11]).appendArc([76.975,-125.61],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([93.975,-125.61]).appendArc([95.475,-124.11],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([95.475,-118.585]).appendArc([97.975,-116.085],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([112.975,-116.085]).appendArc([114.475,-114.585],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([114.475,-113.8225]).appendArc([116.975,-111.3225],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([135.025,-111.3225]).appendArc([137.525,-113.8225],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([137.525,-114.585]).appendArc([139.025,-116.085],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([154.025,-116.085]).appendArc([156.525,-118.585],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([156.525,-118.9425]).appendPoint([173.025,-118.9425]).appendArc([175.525,-121.4425],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([175.525,-203.1420404]).appendArc([176.5119698,-204.5515793],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([187.8364498,-208.6733529]).appendArc([189.3310492,-211.8774107],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([182.4734244,-230.7185801]).appendArc([181.832568,-231.0174163],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([162.21315,-223.8765322]).appendPoint([151.02476,-220.8786121]).appendArc([150.6577971,-220.931971],{"radius":0.5,"clockwise":true,"large":false}).appendArc([59.9405861,-211.4053529],{"radius":349.5,"clockwise":false,"large":false}).appendArc([57.3750002,-208.9065669],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([57.375,-198.7819102]).appendArc([57.3825961,-198.6950861],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([57.475,-198.1710375]).close().innerToCAG()
).extrude({ offset: [0, 0, 16.1] });
}


function _standoff_left_extrude_8_5_outline_fn(){
    return CAG.circle({"center":[69,-188.57],"radius":2.5})
.subtract(
    CAG.circle({"center":[69,-188.57],"radius":1.5})
).union(
    CAG.circle({"center":[69,-150.47],"radius":2.5})
.subtract(
    CAG.circle({"center":[69,-150.47],"radius":1.5})
)).union(
    CAG.circle({"center":[145,-175.235],"radius":2.5})
.subtract(
    CAG.circle({"center":[145,-175.235],"radius":1.5})
)).union(
    CAG.circle({"center":[145,-137.135],"radius":2.5})
.subtract(
    CAG.circle({"center":[145,-137.135],"radius":1.5})
)).union(
    CAG.circle({"center":[165.16057,-216.7391738],"radius":2.5})
.subtract(
    CAG.circle({"center":[165.16057,-216.7391738],"radius":1.5})
)).union(
    CAG.circle({"center":[107,-175.235],"radius":2.5})
.subtract(
    CAG.circle({"center":[107,-175.235],"radius":1.5})
)).extrude({ offset: [0, 0, 8.5] });
}




                function left_case_case_fn() {
                    

                // creating part 0 of case left_case
                let left_case__part_0 = _base_left_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let left_case__part_0_bounds = left_case__part_0.getBounds();
                let left_case__part_0_x = left_case__part_0_bounds[0].x + (left_case__part_0_bounds[1].x - left_case__part_0_bounds[0].x) / 2
                let left_case__part_0_y = left_case__part_0_bounds[0].y + (left_case__part_0_bounds[1].y - left_case__part_0_bounds[0].y) / 2
                left_case__part_0 = translate([-left_case__part_0_x, -left_case__part_0_y, 0], left_case__part_0);
                left_case__part_0 = rotate([0,0,0], left_case__part_0);
                left_case__part_0 = translate([left_case__part_0_x, left_case__part_0_y, 0], left_case__part_0);

                left_case__part_0 = translate([0,0,0], left_case__part_0);
                let result = left_case__part_0;
                
            

                // creating part 1 of case left_case
                let left_case__part_1 = outline_left_walls_extrude_16_1_outline_fn();

                // make sure that rotations are relative
                let left_case__part_1_bounds = left_case__part_1.getBounds();
                let left_case__part_1_x = left_case__part_1_bounds[0].x + (left_case__part_1_bounds[1].x - left_case__part_1_bounds[0].x) / 2
                let left_case__part_1_y = left_case__part_1_bounds[0].y + (left_case__part_1_bounds[1].y - left_case__part_1_bounds[0].y) / 2
                left_case__part_1 = translate([-left_case__part_1_x, -left_case__part_1_y, 0], left_case__part_1);
                left_case__part_1 = rotate([0,0,0], left_case__part_1);
                left_case__part_1 = translate([left_case__part_1_x, left_case__part_1_y, 0], left_case__part_1);

                left_case__part_1 = translate([0,0,0], left_case__part_1);
                result = result.union(left_case__part_1);
                
            

                // creating part 2 of case left_case
                let left_case__part_2 = _standoff_left_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let left_case__part_2_bounds = left_case__part_2.getBounds();
                let left_case__part_2_x = left_case__part_2_bounds[0].x + (left_case__part_2_bounds[1].x - left_case__part_2_bounds[0].x) / 2
                let left_case__part_2_y = left_case__part_2_bounds[0].y + (left_case__part_2_bounds[1].y - left_case__part_2_bounds[0].y) / 2
                left_case__part_2 = translate([-left_case__part_2_x, -left_case__part_2_y, 0], left_case__part_2);
                left_case__part_2 = rotate([0,0,0], left_case__part_2);
                left_case__part_2 = translate([left_case__part_2_x, left_case__part_2_y, 0], left_case__part_2);

                left_case__part_2 = translate([0,0,0], left_case__part_2);
                result = result.union(left_case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        