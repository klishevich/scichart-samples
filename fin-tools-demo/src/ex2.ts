import { SciChartSurface, NumericAxis, BoxAnnotation, LineAnnotation, SvgLineAnnotation, CompositeAnnotation, PolyLineAnnotation, ESnapMode } from "scichart";
import { ChannelAnnotation, DisjointChannelAnnotation, FlatBottomChannelAnnotation, PitchfanAnnotation, PitchforkAnnotation } from "scichart-financial-tools";
import { addDefaultTradingAnnotationModifiers, createStressAnnotationOptions, createTradingCandlestickDemo } from "./utils";

export async function ex2PitchForkExample() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root");

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

    const simplePitchfork = new PitchforkAnnotation({
        isEditable: true,
        points: [
            { x: 1, y: 5 },
            { x: 5, y: 8 },
            { x: 5, y: 2 },
        ],
    });

    sciChartSurface.annotations.add(simplePitchfork);
    sciChartSurface.zoomExtents();
}
