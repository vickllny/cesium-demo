<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  mounted() {
    const init = async () => {
      //http://10.211.55.6/terrain-tiles/srtm_60_07/1/3/1.terrain

      const viewer = new Cesium.Viewer("cesiumContainer", {
        shouldAnimate: false,
        selectionIndicator: false,
        baseLayerPicker: true,
        homeButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        shadows: false,
        vrButton: true,
        infoBox: true,
        navigationHelpButton: false,
        geocoder: false,
        terrainProvider: await Cesium.CesiumTerrainProvider.fromUrl("/server/terrain-tiles/srtm_60_07", {
          requestVertexNormals: true,
        })
      });
      window.viewer = viewer;
    }
    init();
  },
}
</script>

<style scoped></style>
