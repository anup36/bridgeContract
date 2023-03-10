/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ILssStakingInterface extends utils.Interface {
  functions: {
    "getIsAccountStaked(uint256,address)": FunctionFragment;
    "getStakerCoefficient(uint256,address)": FunctionFragment;
    "getVersion()": FunctionFragment;
    "losslessController()": FunctionFragment;
    "losslessGovernance()": FunctionFragment;
    "losslessReporting()": FunctionFragment;
    "pause()": FunctionFragment;
    "setLosslessGovernance(address)": FunctionFragment;
    "setLssReporting(address)": FunctionFragment;
    "setStakingAmount(uint256)": FunctionFragment;
    "setStakingToken(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakerClaim(uint256)": FunctionFragment;
    "stakerClaimableAmount(uint256)": FunctionFragment;
    "stakingAmount()": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getIsAccountStaked"
      | "getStakerCoefficient"
      | "getVersion"
      | "losslessController"
      | "losslessGovernance"
      | "losslessReporting"
      | "pause"
      | "setLosslessGovernance"
      | "setLssReporting"
      | "setStakingAmount"
      | "setStakingToken"
      | "stake"
      | "stakerClaim"
      | "stakerClaimableAmount"
      | "stakingAmount"
      | "stakingToken"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getIsAccountStaked",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakerCoefficient",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "losslessController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "losslessGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "losslessReporting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setLosslessGovernance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLssReporting",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerClaim",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerClaimableAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getIsAccountStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakerCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "losslessController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "losslessGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "losslessReporting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLosslessGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLssReporting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakerClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakerClaimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "NewGovernanceContract(address)": EventFragment;
    "NewReportingContract(address)": EventFragment;
    "NewStake(address,address,uint256)": EventFragment;
    "NewStakingAmount(uint256)": EventFragment;
    "NewStakingToken(address)": EventFragment;
    "StakerClaim(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewGovernanceContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewReportingContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewStake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewStakingAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewStakingToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakerClaim"): EventFragment;
}

export interface NewGovernanceContractEventObject {
  _newContract: string;
}
export type NewGovernanceContractEvent = TypedEvent<
  [string],
  NewGovernanceContractEventObject
>;

export type NewGovernanceContractEventFilter =
  TypedEventFilter<NewGovernanceContractEvent>;

export interface NewReportingContractEventObject {
  _newContract: string;
}
export type NewReportingContractEvent = TypedEvent<
  [string],
  NewReportingContractEventObject
>;

export type NewReportingContractEventFilter =
  TypedEventFilter<NewReportingContractEvent>;

export interface NewStakeEventObject {
  _token: string;
  _account: string;
  _reportId: BigNumber;
}
export type NewStakeEvent = TypedEvent<
  [string, string, BigNumber],
  NewStakeEventObject
>;

export type NewStakeEventFilter = TypedEventFilter<NewStakeEvent>;

export interface NewStakingAmountEventObject {
  _newAmount: BigNumber;
}
export type NewStakingAmountEvent = TypedEvent<
  [BigNumber],
  NewStakingAmountEventObject
>;

export type NewStakingAmountEventFilter =
  TypedEventFilter<NewStakingAmountEvent>;

export interface NewStakingTokenEventObject {
  _newToken: string;
}
export type NewStakingTokenEvent = TypedEvent<
  [string],
  NewStakingTokenEventObject
>;

export type NewStakingTokenEventFilter = TypedEventFilter<NewStakingTokenEvent>;

export interface StakerClaimEventObject {
  _staker: string;
  _token: string;
  _reportID: BigNumber;
  _amount: BigNumber;
}
export type StakerClaimEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  StakerClaimEventObject
>;

export type StakerClaimEventFilter = TypedEventFilter<StakerClaimEvent>;

export interface ILssStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILssStakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getIsAccountStaked(
      _reportId: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getStakerCoefficient(
      _reportId: PromiseOrValue<BigNumberish>,
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    losslessController(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    losslessGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    losslessReporting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLosslessGovernance(
      _losslessGovernance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLssReporting(
      _losslessReporting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStakingAmount(
      _stakingAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStakingToken(
      _stakingToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakerClaim(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakerClaimableAmount(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakingAmount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakingToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getIsAccountStaked(
    _reportId: PromiseOrValue<BigNumberish>,
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getStakerCoefficient(
    _reportId: PromiseOrValue<BigNumberish>,
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVersion(overrides?: CallOverrides): Promise<BigNumber>;

  losslessController(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  losslessGovernance(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  losslessReporting(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLosslessGovernance(
    _losslessGovernance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLssReporting(
    _losslessReporting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStakingAmount(
    _stakingAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStakingToken(
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    _reportId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakerClaim(
    _reportId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakerClaimableAmount(
    _reportId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakingAmount(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakingToken(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getIsAccountStaked(
      _reportId: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getStakerCoefficient(
      _reportId: PromiseOrValue<BigNumberish>,
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    losslessController(overrides?: CallOverrides): Promise<string>;

    losslessGovernance(overrides?: CallOverrides): Promise<string>;

    losslessReporting(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    setLosslessGovernance(
      _losslessGovernance: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLssReporting(
      _losslessReporting: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakingAmount(
      _stakingAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakingToken(
      _stakingToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakerClaim(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakerClaimableAmount(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewGovernanceContract(address)"(
      _newContract?: PromiseOrValue<string> | null
    ): NewGovernanceContractEventFilter;
    NewGovernanceContract(
      _newContract?: PromiseOrValue<string> | null
    ): NewGovernanceContractEventFilter;

    "NewReportingContract(address)"(
      _newContract?: PromiseOrValue<string> | null
    ): NewReportingContractEventFilter;
    NewReportingContract(
      _newContract?: PromiseOrValue<string> | null
    ): NewReportingContractEventFilter;

    "NewStake(address,address,uint256)"(
      _token?: PromiseOrValue<string> | null,
      _account?: PromiseOrValue<string> | null,
      _reportId?: PromiseOrValue<BigNumberish> | null
    ): NewStakeEventFilter;
    NewStake(
      _token?: PromiseOrValue<string> | null,
      _account?: PromiseOrValue<string> | null,
      _reportId?: PromiseOrValue<BigNumberish> | null
    ): NewStakeEventFilter;

    "NewStakingAmount(uint256)"(
      _newAmount?: PromiseOrValue<BigNumberish> | null
    ): NewStakingAmountEventFilter;
    NewStakingAmount(
      _newAmount?: PromiseOrValue<BigNumberish> | null
    ): NewStakingAmountEventFilter;

    "NewStakingToken(address)"(
      _newToken?: PromiseOrValue<string> | null
    ): NewStakingTokenEventFilter;
    NewStakingToken(
      _newToken?: PromiseOrValue<string> | null
    ): NewStakingTokenEventFilter;

    "StakerClaim(address,address,uint256,uint256)"(
      _staker?: PromiseOrValue<string> | null,
      _token?: PromiseOrValue<string> | null,
      _reportID?: PromiseOrValue<BigNumberish> | null,
      _amount?: null
    ): StakerClaimEventFilter;
    StakerClaim(
      _staker?: PromiseOrValue<string> | null,
      _token?: PromiseOrValue<string> | null,
      _reportID?: PromiseOrValue<BigNumberish> | null,
      _amount?: null
    ): StakerClaimEventFilter;
  };

  estimateGas: {
    getIsAccountStaked(
      _reportId: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakerCoefficient(
      _reportId: PromiseOrValue<BigNumberish>,
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    losslessController(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    losslessGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    losslessReporting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLosslessGovernance(
      _losslessGovernance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLssReporting(
      _losslessReporting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStakingAmount(
      _stakingAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStakingToken(
      _stakingToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakerClaim(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakerClaimableAmount(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingAmount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakingToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getIsAccountStaked(
      _reportId: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakerCoefficient(
      _reportId: PromiseOrValue<BigNumberish>,
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    losslessController(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    losslessGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    losslessReporting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLosslessGovernance(
      _losslessGovernance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLssReporting(
      _losslessReporting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStakingAmount(
      _stakingAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStakingToken(
      _stakingToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakerClaim(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakerClaimableAmount(
      _reportId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingAmount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
