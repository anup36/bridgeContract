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
} from "../common";

export interface DeployerInterface extends utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "controller()": FunctionFragment;
    "deployerWrappedAsset(string,string,uint256)": FunctionFragment;
    "enableLossLess(bool)": FunctionFragment;
    "losslessEnabled()": FunctionFragment;
    "losslessRecoveryAdmin_()": FunctionFragment;
    "lossless_()": FunctionFragment;
    "timelockPeriod_()": FunctionFragment;
    "updateBridge(address)": FunctionFragment;
    "updateLossless(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridge"
      | "controller"
      | "deployerWrappedAsset"
      | "enableLossLess"
      | "losslessEnabled"
      | "losslessRecoveryAdmin_"
      | "lossless_"
      | "timelockPeriod_"
      | "updateBridge"
      | "updateLossless"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployerWrappedAsset",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "enableLossLess",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "losslessEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "losslessRecoveryAdmin_",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lossless_", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "timelockPeriod_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateBridge",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLossless",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployerWrappedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableLossLess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "losslessEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "losslessRecoveryAdmin_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lossless_", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "timelockPeriod_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLossless",
    data: BytesLike
  ): Result;

  events: {
    "BridgeUpdated(address,address)": EventFragment;
    "LosslessUpdated(address,address,uint256,uint256,address,address)": EventFragment;
    "lossLessEnableStateUpdated(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LosslessUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "lossLessEnableStateUpdated"): EventFragment;
}

export interface BridgeUpdatedEventObject {
  oldBridgeAddress: string;
  newBridgeAddress: string;
}
export type BridgeUpdatedEvent = TypedEvent<
  [string, string],
  BridgeUpdatedEventObject
>;

export type BridgeUpdatedEventFilter = TypedEventFilter<BridgeUpdatedEvent>;

export interface LosslessUpdatedEventObject {
  previousRecoveryAdmin: string;
  newRecoveryAdmin: string;
  previousTimeLockPeriod: BigNumber;
  newTimeLockPeriod: BigNumber;
  previousLosslessAddress: string;
  newRecoveryLosslessAddress: string;
}
export type LosslessUpdatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string],
  LosslessUpdatedEventObject
>;

export type LosslessUpdatedEventFilter = TypedEventFilter<LosslessUpdatedEvent>;

export interface lossLessEnableStateUpdatedEventObject {
  status: boolean;
}
export type lossLessEnableStateUpdatedEvent = TypedEvent<
  [boolean],
  lossLessEnableStateUpdatedEventObject
>;

export type lossLessEnableStateUpdatedEventFilter =
  TypedEventFilter<lossLessEnableStateUpdatedEvent>;

export interface Deployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeployerInterface;

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
    bridge(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    deployerWrappedAsset(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      lossless: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enableLossLess(
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    losslessEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    losslessRecoveryAdmin_(overrides?: CallOverrides): Promise<[string]>;

    lossless_(overrides?: CallOverrides): Promise<[string]>;

    timelockPeriod_(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateBridge(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateLossless(
      recoveryAdmin: PromiseOrValue<string>,
      timelockPeriod: PromiseOrValue<BigNumberish>,
      lossless: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  deployerWrappedAsset(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    lossless: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enableLossLess(
    status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  losslessEnabled(overrides?: CallOverrides): Promise<boolean>;

  losslessRecoveryAdmin_(overrides?: CallOverrides): Promise<string>;

  lossless_(overrides?: CallOverrides): Promise<string>;

  timelockPeriod_(overrides?: CallOverrides): Promise<BigNumber>;

  updateBridge(
    _bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateLossless(
    recoveryAdmin: PromiseOrValue<string>,
    timelockPeriod: PromiseOrValue<BigNumberish>,
    lossless: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    deployerWrappedAsset(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      lossless: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    enableLossLess(
      status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    losslessEnabled(overrides?: CallOverrides): Promise<boolean>;

    losslessRecoveryAdmin_(overrides?: CallOverrides): Promise<string>;

    lossless_(overrides?: CallOverrides): Promise<string>;

    timelockPeriod_(overrides?: CallOverrides): Promise<BigNumber>;

    updateBridge(
      _bridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLossless(
      recoveryAdmin: PromiseOrValue<string>,
      timelockPeriod: PromiseOrValue<BigNumberish>,
      lossless: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BridgeUpdated(address,address)"(
      oldBridgeAddress?: PromiseOrValue<string> | null,
      newBridgeAddress?: PromiseOrValue<string> | null
    ): BridgeUpdatedEventFilter;
    BridgeUpdated(
      oldBridgeAddress?: PromiseOrValue<string> | null,
      newBridgeAddress?: PromiseOrValue<string> | null
    ): BridgeUpdatedEventFilter;

    "LosslessUpdated(address,address,uint256,uint256,address,address)"(
      previousRecoveryAdmin?: null,
      newRecoveryAdmin?: PromiseOrValue<string> | null,
      previousTimeLockPeriod?: null,
      newTimeLockPeriod?: null,
      previousLosslessAddress?: null,
      newRecoveryLosslessAddress?: PromiseOrValue<string> | null
    ): LosslessUpdatedEventFilter;
    LosslessUpdated(
      previousRecoveryAdmin?: null,
      newRecoveryAdmin?: PromiseOrValue<string> | null,
      previousTimeLockPeriod?: null,
      newTimeLockPeriod?: null,
      previousLosslessAddress?: null,
      newRecoveryLosslessAddress?: PromiseOrValue<string> | null
    ): LosslessUpdatedEventFilter;

    "lossLessEnableStateUpdated(bool)"(
      status?: null
    ): lossLessEnableStateUpdatedEventFilter;
    lossLessEnableStateUpdated(
      status?: null
    ): lossLessEnableStateUpdatedEventFilter;
  };

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    deployerWrappedAsset(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      lossless: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enableLossLess(
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    losslessEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    losslessRecoveryAdmin_(overrides?: CallOverrides): Promise<BigNumber>;

    lossless_(overrides?: CallOverrides): Promise<BigNumber>;

    timelockPeriod_(overrides?: CallOverrides): Promise<BigNumber>;

    updateBridge(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateLossless(
      recoveryAdmin: PromiseOrValue<string>,
      timelockPeriod: PromiseOrValue<BigNumberish>,
      lossless: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployerWrappedAsset(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      lossless: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enableLossLess(
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    losslessEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    losslessRecoveryAdmin_(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lossless_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timelockPeriod_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateBridge(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateLossless(
      recoveryAdmin: PromiseOrValue<string>,
      timelockPeriod: PromiseOrValue<BigNumberish>,
      lossless: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
