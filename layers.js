var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Яндекс Спутник',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.927.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_YandexMaps22_2 = new ol.layer.Tile({
            'title': 'Yandex Maps 22',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Maps</a>',
                url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=3.2008.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_YandexSatellite_3 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1lab_1_4 = new ol.format.GeoJSON();
var features_lab1lab_1_4 = format_lab1lab_1_4.readFeatures(json_lab1lab_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1lab_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1lab_1_4.addFeatures(features_lab1lab_1_4);
var lyr_lab1lab_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1lab_1_4, 
                style: style_lab1lab_1_4,
                popuplayertitle: 'lab 1 — lab_1',
                interactive: true,
                title: '<img src="styles/legend/lab1lab_1_4.png" /> lab 1 — lab_1'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_building_house_7 = new ol.format.GeoJSON();
var features_building_house_7 = format_building_house_7.readFeatures(json_building_house_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_7.addFeatures(features_building_house_7);
var lyr_building_house_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_7, 
                style: style_building_house_7,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_7.png" /> building_house'
            });
var format_building_house_8 = new ol.format.GeoJSON();
var features_building_house_8 = format_building_house_8.readFeatures(json_building_house_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_8.addFeatures(features_building_house_8);
var lyr_building_house_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_8, 
                style: style_building_house_8,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_8.png" /> building_house'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr_YandexMaps22_2.setVisible(true);lyr_YandexSatellite_3.setVisible(true);lyr_lab1lab_1_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_building_house_7.setVisible(true);lyr_building_house_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr_YandexMaps22_2,lyr_YandexSatellite_3,lyr_lab1lab_1_4,lyr_highway_5,lyr_highway_6,lyr_building_house_7,lyr_building_house_8];
lyr_lab1lab_1_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'name:ru': 'name:ru', 'name': 'name', 'crossing': 'crossing', 'power': 'power', 'railway': 'railway', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'smoothness': 'smoothness', 'name': 'name', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_building_house_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'level': 'level', 'entrance': 'entrance', 'door': 'door', 'access': 'access', });
lyr_building_house_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab1lab_1_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bench': '', 'public_transport': '', 'bus': '', 'name:ru': '', 'name': '', 'crossing': '', 'power': '', 'railway': '', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'footway': '', 'ford': '', 'depth': '', 'ref': '', 'old_ref': '', 'oneway': '', 'smoothness': '', 'name': '', 'surface': '', 'layer': '', 'lanes': '', 'bridge': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_building_house_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'wheelchair': '', 'level': '', 'entrance': '', 'door': '', 'access': '', });
lyr_building_house_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_lab1lab_1_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'name:ru': 'no label', 'name': 'no label', 'crossing': 'no label', 'power': 'no label', 'railway': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'name': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_building_house_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'level': 'no label', 'entrance': 'no label', 'door': 'no label', 'access': 'no label', });
lyr_building_house_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_house_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});