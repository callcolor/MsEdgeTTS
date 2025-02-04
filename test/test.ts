import {MsEdgeTTS, OUTPUT_FORMAT} from "../dist";

(async () => {
    const tts = new MsEdgeTTS(null, false);
    await tts.setMetadata("en-US-AriaNeural", OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS);
    const filePath = await tts.toFile("./example_audio.webm", "Hi, how are you?");
    console.log("Done!", filePath);
    tts.close();
})();