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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Ibridge {
  export type AssetStruct = {
    tokenAddress: PromiseOrValue<string>;
    minAmount: PromiseOrValue<BigNumberish>;
    maxAmount: PromiseOrValue<BigNumberish>;
    ownerFeeBalance: PromiseOrValue<BigNumberish>;
    networkFeeBalance: PromiseOrValue<BigNumberish>;
    collectedFees: PromiseOrValue<BigNumberish>;
    ownedRail: PromiseOrValue<boolean>;
    manager: PromiseOrValue<string>;
    feeRemitance: PromiseOrValue<string>;
    isSet: PromiseOrValue<boolean>;
  };

  export type AssetStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    string,
    string,
    boolean
  ] & {
    tokenAddress: string;
    minAmount: BigNumber;
    maxAmount: BigNumber;
    ownerFeeBalance: BigNumber;
    networkFeeBalance: BigNumber;
    collectedFees: BigNumber;
    ownedRail: boolean;
    manager: string;
    feeRemitance: string;
    isSet: boolean;
  };
}

export interface IbridgeInterface extends utils.Interface {
  functions: {
    "assetLimits(address,bool)": FunctionFragment;
    "burn(uint256,address,uint256,address)": FunctionFragment;
    "chainId()": FunctionFragment;
    "claim(bytes32)": FunctionFragment;
    "controller()": FunctionFragment;
    "foriegnAssetChainID(address)": FunctionFragment;
    "foriegnAssets(address)": FunctionFragment;
    "getAssetCount()": FunctionFragment;
    "isAssetSupportedChain(address,uint256)": FunctionFragment;
    "isDirectSwap(address,uint256)": FunctionFragment;
    "mint(bytes32)": FunctionFragment;
    "nativeAssets(address)": FunctionFragment;
    "send(uint256,address,uint256,address)": FunctionFragment;
    "settings()": FunctionFragment;
    "standardDecimals()": FunctionFragment;
    "udpadateBridgePool(address)": FunctionFragment;
    "wrappedForiegnPair(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assetLimits"
      | "burn"
      | "chainId"
      | "claim"
      | "controller"
      | "foriegnAssetChainID"
      | "foriegnAssets"
      | "getAssetCount"
      | "isAssetSupportedChain"
      | "isDirectSwap"
      | "mint"
      | "nativeAssets"
      | "send"
      | "settings"
      | "standardDecimals"
      | "udpadateBridgePool"
      | "wrappedForiegnPair"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetLimits",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "foriegnAssetChainID",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "foriegnAssets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAssetSupportedChain",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isDirectSwap",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeAssets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "settings", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "standardDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "udpadateBridgePool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedForiegnPair",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "foriegnAssetChainID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "foriegnAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAssetSupportedChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDirectSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "standardDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "udpadateBridgePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedForiegnPair",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Ibridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IbridgeInterface;

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
    assetLimits(
      _asset: PromiseOrValue<string>,
      native: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    burn(
      chainID: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    foriegnAssetChainID(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    foriegnAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Ibridge.AssetStructOutput]>;

    getAssetCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    isAssetSupportedChain(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isDirectSwap(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nativeAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Ibridge.AssetStructOutput]>;

    send(
      chainTo: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settings(overrides?: CallOverrides): Promise<[string]>;

    standardDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    udpadateBridgePool(
      _bridgePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrappedForiegnPair(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  assetLimits(
    _asset: PromiseOrValue<string>,
    native: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  burn(
    chainID: PromiseOrValue<BigNumberish>,
    assetAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    transaction_id: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  foriegnAssetChainID(
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  foriegnAssets(
    assetAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Ibridge.AssetStructOutput>;

  getAssetCount(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  isAssetSupportedChain(
    assetAddress: PromiseOrValue<string>,
    chainID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isDirectSwap(
    assetAddress: PromiseOrValue<string>,
    chainID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    transaction_id: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nativeAssets(
    assetAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Ibridge.AssetStructOutput>;

  send(
    chainTo: PromiseOrValue<BigNumberish>,
    assetAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settings(overrides?: CallOverrides): Promise<string>;

  standardDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  udpadateBridgePool(
    _bridgePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrappedForiegnPair(
    assetAddress: PromiseOrValue<string>,
    chainID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    assetLimits(
      _asset: PromiseOrValue<string>,
      native: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    burn(
      chainID: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    foriegnAssetChainID(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    foriegnAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Ibridge.AssetStructOutput>;

    getAssetCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    isAssetSupportedChain(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isDirectSwap(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    nativeAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Ibridge.AssetStructOutput>;

    send(
      chainTo: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    settings(overrides?: CallOverrides): Promise<string>;

    standardDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    udpadateBridgePool(
      _bridgePool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wrappedForiegnPair(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    assetLimits(
      _asset: PromiseOrValue<string>,
      native: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      chainID: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    foriegnAssetChainID(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    foriegnAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetCount(overrides?: CallOverrides): Promise<BigNumber>;

    isAssetSupportedChain(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isDirectSwap(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nativeAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    send(
      chainTo: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settings(overrides?: CallOverrides): Promise<BigNumber>;

    standardDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    udpadateBridgePool(
      _bridgePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrappedForiegnPair(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetLimits(
      _asset: PromiseOrValue<string>,
      native: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      chainID: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    foriegnAssetChainID(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    foriegnAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAssetSupportedChain(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDirectSwap(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      transaction_id: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nativeAssets(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    send(
      chainTo: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    standardDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    udpadateBridgePool(
      _bridgePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrappedForiegnPair(
      assetAddress: PromiseOrValue<string>,
      chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
