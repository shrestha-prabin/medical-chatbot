export function parseError(error: any) {
  console.log("🚀 ~ parseError ~ error:", error);

  try {
    if (typeof error == "object") {
      const keys = Object.keys(error);
      return parseError(error[keys[0]]);
    } else {
      return error;
    }
  } catch (_) {
    return error;
  }
}
