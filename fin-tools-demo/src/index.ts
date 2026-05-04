import { ex1CompositeAnnotation } from "./ex1CompositeAnnotation";
import { ex2PitchforkAnnotation } from "./ex2PitchforkAnnotation";
import { ex3ChannelAnnotation } from "./ex3ChannelAnnotation";
import { ex4FlatBottomChannelAnnotation } from "./ex4FlatBottomChannelAnnotation";
import { ex5ExtendedLineAnnotation } from "./ex5ExtendedLineAnnotation";
import { ex6FibonacciRetracementAnnotation } from "./ex6FibonacciRetracementAnnotation";
import { ex7MeasureAnnotation } from "./ex7MeasureAnnotation";
import { ex8StopLossTakeProfitAnnotation } from "./ex8StopLossTakeProfitAnnotation";

// Attach to window so HTML can access them
const w = window as any;
w.ex1CompositeAnnotation = ex1CompositeAnnotation;
w.ex2PitchforkAnnotation = ex2PitchforkAnnotation;
w.ex3ChannelAnnotation = ex3ChannelAnnotation;
w.ex4FlatBottomChannelAnnotation = ex4FlatBottomChannelAnnotation;
w.ex5ExtendedLineAnnotation = ex5ExtendedLineAnnotation;
w.ex6FibonacciRetracementAnnotation = ex6FibonacciRetracementAnnotation;
w.ex7MeasureAnnotation = ex7MeasureAnnotation;
w.ex8StopLossTakeProfitAnnotation = ex8StopLossTakeProfitAnnotation;
