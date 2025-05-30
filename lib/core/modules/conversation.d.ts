import { BaseResponse } from '../../types/entity';
import OpenIMSDK from '..';
import { SplitConversationParams, GetOneConversationParams, SetConversationDraftParams, SetConversationPinParams, SetConversationRecvOptParams, SetConversationPrivateStateParams, SetBurnDurationParams, SetConversationExParams, SetConversationMsgDestructTimeParams, SetConversationMsgDestructParams, SetConversationParams, ChangeInputStatesParams, GetInputstatesParams } from '@openim/wasm-client-sdk/lib/types/params';
import { ConversationItem } from '@openim/wasm-client-sdk/lib/types/entity';
import { Platform } from '@openim/wasm-client-sdk';
export declare function setupConversationModule(openIMSDK: OpenIMSDK): {
    getAllConversationList: (opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getConversationListSplit: (params: SplitConversationParams, opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getOneConversation: (params: GetOneConversationParams, opid?: string) => Promise<BaseResponse<ConversationItem>>;
    setConversationEx: (params: SetConversationExParams, opid?: string) => Promise<BaseResponse<void>>;
    getMultipleConversation: (conversationIDList: string, opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getConversationIDBySessionType: (params: GetOneConversationParams, opid?: string) => Promise<BaseResponse<string>>;
    getTotalUnreadMsgCount: (opid?: string) => Promise<BaseResponse<number>>;
    markConversationMessageAsRead: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    setConversationDraft: (params: SetConversationDraftParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversation: (params: SetConversationParams, opid?: string) => Promise<BaseResponse<void>>;
    pinConversation: (params: SetConversationPinParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationRecvMessageOpt: (params: SetConversationRecvOptParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationPrivateChat: (params: SetConversationPrivateStateParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationBurnDuration: (params: SetBurnDurationParams, opid?: string) => Promise<BaseResponse<void>>;
    resetConversationGroupAtType: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    hideConversation: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    hideAllConversation: (opid?: string) => Promise<BaseResponse<void>>;
    clearConversationAndDeleteAllMsg: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    deleteConversationAndDeleteAllMsg: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    setConversationMsgDestructTime: (params: SetConversationMsgDestructTimeParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationIsMsgDestruct: (params: SetConversationMsgDestructParams, opid?: string) => Promise<BaseResponse<void>>;
    changeInputStates: (params: ChangeInputStatesParams, opid?: string) => Promise<BaseResponse<void>>;
    getInputStates: (params: GetInputstatesParams, opid?: string) => Promise<BaseResponse<Platform[]>>;
};
export interface ConversationModuleApi {
    getAllConversationList: (opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getConversationListSplit: (params: SplitConversationParams, opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getOneConversation: (params: GetOneConversationParams, opid?: string) => Promise<BaseResponse<ConversationItem>>;
    setConversationEx: (params: SetConversationExParams, opid?: string) => Promise<BaseResponse<void>>;
    getMultipleConversation: (conversationIDList: string, opid?: string) => Promise<BaseResponse<ConversationItem[]>>;
    getConversationIDBySessionType: (params: GetOneConversationParams, opid?: string) => Promise<BaseResponse<string>>;
    getTotalUnreadMsgCount: (opid?: string) => Promise<BaseResponse<number>>;
    markConversationMessageAsRead: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    setConversationDraft: (params: SplitConversationParams, opid?: string) => Promise<BaseResponse<void>>;
    pinConversation: (params: SplitConversationParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversation: (params: SetConversationParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationRecvMessageOpt: (params: SetConversationRecvOptParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationPrivateChat: (params: SetConversationPrivateStateParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationBurnDuration: (params: SetBurnDurationParams, opid?: string) => Promise<BaseResponse<void>>;
    resetConversationGroupAtType: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    hideConversation: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    hideAllConversation: (opid?: string) => Promise<BaseResponse<void>>;
    clearConversationAndDeleteAllMsg: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    deleteConversationAndDeleteAllMsg: (conversationID: string, opid?: string) => Promise<BaseResponse<void>>;
    setConversationMsgDestructTime: (params: SetConversationMsgDestructTimeParams, opid?: string) => Promise<BaseResponse<void>>;
    setConversationIsMsgDestruct: (params: SetConversationMsgDestructParams, opid?: string) => Promise<BaseResponse<void>>;
    changeInputStates: (params: ChangeInputStatesParams, opid?: string) => Promise<BaseResponse<void>>;
    getInputStates: (params: GetInputstatesParams, opid?: string) => Promise<BaseResponse<Platform[]>>;
}
