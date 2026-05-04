import { SciChartSurface, NumericAxis, FreehandDrawingModifier } from "scichart";

export async function ex10FreehandDrawingModifier() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root");

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

    const freehandDrawingModifier = new FreehandDrawingModifier({
        // isDrawing: false,
        minPointDistancePx: 2,
        simplifyTolerancePx: 1.2,
        keepDrawingAfterComplete: true,
        pointSamplingDistancePx: 0.1
    });

    sciChartSurface.chartModifiers.add(freehandDrawingModifier);
    sciChartSurface.zoomExtents();
}
