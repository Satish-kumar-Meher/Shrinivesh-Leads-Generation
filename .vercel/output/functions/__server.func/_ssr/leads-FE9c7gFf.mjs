import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Dg7Q6TuF.mjs";
import { o as objectType, s as stringType, b as booleanType } from "../_libs/zod.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const submitLeadFn = createServerFn({
  method: "POST"
}).validator(objectType({
  name: stringType(),
  phone: stringType(),
  email: stringType(),
  sip: stringType(),
  current: stringType(),
  risk_profile: stringType().optional().default("Standard"),
  fund: stringType().optional()
})).handler(createSsrRpc("58246c96447369cd14bbdb3fc5ccdf09f644412dbd285dd9e86b921189e9988f"));
const updateLeadMeetingStatusFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType(),
  booked: booleanType(),
  calendlyLink: stringType().optional()
})).handler(createSsrRpc("2346c51317ba750c0f51204e37e36732bec350fb086a2756d91ce75e1e92b34b"));
const updateLeadMeetingTimeFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType(),
  meetingTime: stringType().nullable()
})).handler(createSsrRpc("a3e45626a601ff6747ab859b35ede6c725f5e3da308fde360bba11b6e913c831"));
const deleteLeadFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType()
})).handler(createSsrRpc("7106cd2d8ff83a816dfba4784a53b72a2abad6b04b9c25062ea19a1121e68d27"));
export {
  updateLeadMeetingTimeFn as a,
  deleteLeadFn as d,
  submitLeadFn as s,
  updateLeadMeetingStatusFn as u
};
