import { SciChartSurface, NumericAxis } from "scichart";
import { MultiPointAnnotationPlacementModifier } from "scichart-financial-tools";

export async function ex9MultiPointAnnotationPlacementModifier() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root");

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

    const placementModifier = new MultiPointAnnotationPlacementModifier({
        // isPlacing: false,
        // keepPlacingAfterComplete: false
    });

    sciChartSurface.chartModifiers.add(placementModifier);
    sciChartSurface.zoomExtents();
}
