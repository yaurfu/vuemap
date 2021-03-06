import L from "leaflet";
import 'leaflet-toolbar'
import 'leaflet-toolbar/dist/leaflet.toolbar.css'
import './PathAction'

L.Toolbar2.PathToolbar = L.Toolbar2.Control.extend({
    options: {
        actions: [
            L.Toolbar2.PathAction.GenRoad,
            L.Toolbar2.PathAction.StartPoint,
            L.Toolbar2.PathAction.EndPoint,
            L.Toolbar2.PathAction.ClearPath
        ],
        className: 'path-toolbar'
    }
});