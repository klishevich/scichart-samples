import { SciChartSurface, NumericAxis, BoxAnnotation, LineAnnotation, SvgLineAnnotation, CompositeAnnotation, PolyLineAnnotation, ESnapMode } from "scichart";
import { ChannelAnnotation, DisjointChannelAnnotation, FlatBottomChannelAnnotation, PitchfanAnnotation, PitchforkAnnotation } from "scichart-financial-tools";
import { addDefaultTradingAnnotationModifiers, createStressAnnotationOptions, createTradingCandlestickDemo } from "./utils";

async function pitchForkExample() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root1");

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
pitchForkExample();

async function compositeAnnotationExample() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root2");

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

    const lineAnnotation = new LineAnnotation({
        x1: 0.1,
        y1: 0.2,
        x2: 0.5,
        y2: 0.8,
        stroke: "orange",
        strokeThickness: 2,
        // isEditable: true
    });
    const boxAnnotation = new BoxAnnotation({
        x1: 0.6,
        y1: 0.2,
        x2: 0.8,
        y2: 0.9,
        stroke: "pink",
        strokeThickness: 2,
        // isEditable: true
    });

    const svgAnn = new SvgLineAnnotation({
        x1: 0.2,
        y1: 0.4,
        x2: 0.8,
        y2: 0.6,
        stroke: "red",
        strokeThickness: 2,
        // isEditable: true
    })

    // make the composite annotation with the child annotations
    const comp = new CompositeAnnotation({
        x1: 2,
        y1: 8,
        x2: 8,
        y2: 2,
        isEditable: true,
        fill: "rgba(0,0,0,0)",
        annotations: [
            lineAnnotation,
            boxAnnotation,
            svgAnn
        ]
    });
    sciChartSurface.annotations.add(comp);
}
compositeAnnotationExample();

export const tradingExample = async () => {
    const CHANNEL_SEGMENT_PAIRS = [
        [0, 1],
        [2, 3],
        [0, 2],
        [1, 3],
    ] as const;
    const { sciChartSurface, xAt, yAt } = await createTradingCandlestickDemo("scichart-root3");

    const channel = new ChannelAnnotation({
        ...createStressAnnotationOptions(0, 4, "CHN", undefined, { segmentPairs: CHANNEL_SEGMENT_PAIRS }),
        isEditable: true,
        stroke: "#A78BFA",
        fill: "#A78BFA33",
        strokeThickness: 2,
        showMidLine: true,
        showMidPointGrips: true,
        points: [
            { x: xAt(20), y: yAt(20, 0.09) },
            { x: xAt(56), y: yAt(56, 0.03) },
            { x: xAt(20), y: yAt(20, -0.09) },
        ],
    });

    const flatBottomChannel = new FlatBottomChannelAnnotation({
        ...createStressAnnotationOptions(0, 4, "FLT", undefined, { segmentPairs: CHANNEL_SEGMENT_PAIRS }),
        isEditable: true,
        stroke: "#22D3EE",
        fill: "#22D3EE22",
        strokeThickness: 2,
        showMidLine: true,
        points: [
            { x: xAt(86), y: yAt(86, 0.07) },
            { x: xAt(124), y: yAt(124, 0.02) },
            { x: xAt(86), y: yAt(86, -0.12) },
        ],
    });

    const disjointChannel = new DisjointChannelAnnotation({
        ...createStressAnnotationOptions(0, 4, "DSJ", undefined, { segmentPairs: CHANNEL_SEGMENT_PAIRS }),
        isEditable: true,
        stroke: "#FB7185",
        fill: "#FB718522",
        strokeThickness: 2,
        showMidLine: true,
        showMidPointGrips: false,
        points: [
            { x: xAt(146), y: yAt(146, 0.1) },
            { x: xAt(176), y: yAt(176, 0.06) },
            { x: xAt(176), y: yAt(176, -0.02) },
        ],
    });

    sciChartSurface.annotations.add(channel, flatBottomChannel, disjointChannel);

    addDefaultTradingAnnotationModifiers(sciChartSurface);
    sciChartSurface.zoomExtents();

    return { sciChartSurface };
};
tradingExample();

async function polyLineExample() {
    const { sciChartSurface, xAt, yAt } = await createTradingCandlestickDemo("scichart-root4");

    const freePolyline = new PolyLineAnnotation({
        ...createStressAnnotationOptions(0, 5, "PLY"),
        isEditable: true,
        stroke: "#38BDF8",
        fill: "#38BDF82A",
        strokeThickness: 2,
        snapMode: ESnapMode.None,
        points: [
            { x: xAt(12), y: yAt(12, 0.05) },
            { x: xAt(26), y: yAt(26, -0.03) },
            { x: xAt(40), y: yAt(40, 0.09) },
            { x: xAt(54), y: yAt(54, 0.01) },
            { x: xAt(68), y: yAt(68, -0.05) },
        ],
    });

    const dataSnappedPolyline = new PolyLineAnnotation({
        ...createStressAnnotationOptions(0, 5, "SNP"),
        isEditable: true,
        stroke: "#A78BFA",
        fill: "#A78BFA26",
        strokeThickness: 2,
        snapMode: ESnapMode.DataPoint,
        snapToDataPointRadius: 32,
        points: [
            { x: xAt(100), y: yAt(100, -0.02) },
            { x: xAt(118), y: yAt(118, 0.08) },
            { x: xAt(136), y: yAt(136, 0.01) },
            { x: xAt(154), y: yAt(154, 0.1) },
            { x: xAt(172), y: yAt(172, -0.02) },
        ],
    });

    sciChartSurface.annotations.add(freePolyline, dataSnappedPolyline);

    addDefaultTradingAnnotationModifiers(sciChartSurface);
    sciChartSurface.zoomExtents();

    return { sciChartSurface };
}
polyLineExample();
