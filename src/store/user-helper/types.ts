import { LoginType } from './const'
import { IReCaptchaComposition } from 'vue-recaptcha-v3'
import { ReqMessage } from '../notifications/types'

interface LoginRequest {
  Username: string
  Password: string
  LoginType: LoginType
  GoogleRecaptchaResponse: string
  Message: ReqMessage
}

interface UserInfo {
  UserID: string
  Username: string
  FirstName?: string
  LastName?: string
  DisplayName?: string
  Gender?: string
  CreateAt?: number
  EmailAddress: string
  Birthday?: number
  Avatar?: string
  PhoneNO: string
  MyInfo: unknown
}

interface LoginResponse {
  Info: {
    UserBasicInfo: UserInfo
  }
}

interface GetGoogleTokenRequest {
  Recaptcha: IReCaptchaComposition | undefined
  Req: string
  Message: ReqMessage
}

export {
  LoginRequest,
  LoginResponse,
  UserInfo,
  GetGoogleTokenRequest
}
