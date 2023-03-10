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

export interface ControllerInterface extends utils.Interface {
  functions: {
    "addAdmin(address,bool)": FunctionFragment;
    "addOracle(address,bool)": FunctionFragment;
    "addRegistrar(address,bool)": FunctionFragment;
    "addValidator(address,bool)": FunctionFragment;
    "admins(uint256)": FunctionFragment;
    "adminsCount()": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "isOracle(address)": FunctionFragment;
    "isRegistrar(address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "oracles(uint256)": FunctionFragment;
    "oraclesCount()": FunctionFragment;
    "owner()": FunctionFragment;
    "registrars(uint256)": FunctionFragment;
    "registrarsCount()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validators(uint256)": FunctionFragment;
    "validatorsCount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAdmin"
      | "addOracle"
      | "addRegistrar"
      | "addValidator"
      | "admins"
      | "adminsCount"
      | "isAdmin"
      | "isOracle"
      | "isRegistrar"
      | "isValidator"
      | "oracles"
      | "oraclesCount"
      | "owner"
      | "registrars"
      | "registrarsCount"
      | "renounceOwnership"
      | "transferOwnership"
      | "validators"
      | "validatorsCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "addOracle",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "addRegistrar",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "addValidator",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "admins",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "adminsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegistrar",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "oracles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "oraclesCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registrars",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registrarsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validators",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorsCount",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oraclesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registrars", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registrarsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validatorsCount",
    data: BytesLike
  ): Result;

  events: {
    "AdminAdded(address)": EventFragment;
    "AdminRemoved(address)": EventFragment;
    "OracleAdded(address)": EventFragment;
    "OracleRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RegistrarAdded(address)": EventFragment;
    "RegistrarRemoved(address)": EventFragment;
    "ValidatorAdded(address)": EventFragment;
    "ValidatorRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegistrarAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegistrarRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorRemoved"): EventFragment;
}

export interface AdminAddedEventObject {
  admin: string;
}
export type AdminAddedEvent = TypedEvent<[string], AdminAddedEventObject>;

export type AdminAddedEventFilter = TypedEventFilter<AdminAddedEvent>;

export interface AdminRemovedEventObject {
  admin: string;
}
export type AdminRemovedEvent = TypedEvent<[string], AdminRemovedEventObject>;

export type AdminRemovedEventFilter = TypedEventFilter<AdminRemovedEvent>;

export interface OracleAddedEventObject {
  oracle: string;
}
export type OracleAddedEvent = TypedEvent<[string], OracleAddedEventObject>;

export type OracleAddedEventFilter = TypedEventFilter<OracleAddedEvent>;

export interface OracleRemovedEventObject {
  oracle: string;
}
export type OracleRemovedEvent = TypedEvent<[string], OracleRemovedEventObject>;

export type OracleRemovedEventFilter = TypedEventFilter<OracleRemovedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RegistrarAddedEventObject {
  registrar: string;
}
export type RegistrarAddedEvent = TypedEvent<
  [string],
  RegistrarAddedEventObject
>;

export type RegistrarAddedEventFilter = TypedEventFilter<RegistrarAddedEvent>;

export interface RegistrarRemovedEventObject {
  registrar: string;
}
export type RegistrarRemovedEvent = TypedEvent<
  [string],
  RegistrarRemovedEventObject
>;

export type RegistrarRemovedEventFilter =
  TypedEventFilter<RegistrarRemovedEvent>;

export interface ValidatorAddedEventObject {
  validator: string;
}
export type ValidatorAddedEvent = TypedEvent<
  [string],
  ValidatorAddedEventObject
>;

export type ValidatorAddedEventFilter = TypedEventFilter<ValidatorAddedEvent>;

export interface ValidatorRemovedEventObject {
  validator: string;
}
export type ValidatorRemovedEvent = TypedEvent<
  [string],
  ValidatorRemovedEventObject
>;

export type ValidatorRemovedEventFilter =
  TypedEventFilter<ValidatorRemovedEvent>;

export interface Controller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ControllerInterface;

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
    addAdmin(
      _admin: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addOracle(
      _oracle: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addRegistrar(
      _registrar: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addValidator(
      _validator: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    admins(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    adminsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAdmin(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOracle(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isRegistrar(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    oraclesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registrars(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registrarsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    validatorsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addAdmin(
    _admin: PromiseOrValue<string>,
    add: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addOracle(
    _oracle: PromiseOrValue<string>,
    add: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addRegistrar(
    _registrar: PromiseOrValue<string>,
    add: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addValidator(
    _validator: PromiseOrValue<string>,
    add: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  admins(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  adminsCount(overrides?: CallOverrides): Promise<BigNumber>;

  isAdmin(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOracle(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isRegistrar(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidator(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  oracles(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  oraclesCount(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  registrars(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  registrarsCount(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validators(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addAdmin(
      _admin: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addOracle(
      _oracle: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addRegistrar(
      _registrar: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addValidator(
      _validator: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    admins(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    adminsCount(overrides?: CallOverrides): Promise<BigNumber>;

    isAdmin(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOracle(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRegistrar(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    oraclesCount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    registrars(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    registrarsCount(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AdminAdded(address)"(
      admin?: PromiseOrValue<string> | null
    ): AdminAddedEventFilter;
    AdminAdded(admin?: PromiseOrValue<string> | null): AdminAddedEventFilter;

    "AdminRemoved(address)"(
      admin?: PromiseOrValue<string> | null
    ): AdminRemovedEventFilter;
    AdminRemoved(
      admin?: PromiseOrValue<string> | null
    ): AdminRemovedEventFilter;

    "OracleAdded(address)"(
      oracle?: PromiseOrValue<string> | null
    ): OracleAddedEventFilter;
    OracleAdded(oracle?: PromiseOrValue<string> | null): OracleAddedEventFilter;

    "OracleRemoved(address)"(
      oracle?: PromiseOrValue<string> | null
    ): OracleRemovedEventFilter;
    OracleRemoved(
      oracle?: PromiseOrValue<string> | null
    ): OracleRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RegistrarAdded(address)"(
      registrar?: PromiseOrValue<string> | null
    ): RegistrarAddedEventFilter;
    RegistrarAdded(
      registrar?: PromiseOrValue<string> | null
    ): RegistrarAddedEventFilter;

    "RegistrarRemoved(address)"(
      registrar?: PromiseOrValue<string> | null
    ): RegistrarRemovedEventFilter;
    RegistrarRemoved(
      registrar?: PromiseOrValue<string> | null
    ): RegistrarRemovedEventFilter;

    "ValidatorAdded(address)"(
      validator?: PromiseOrValue<string> | null
    ): ValidatorAddedEventFilter;
    ValidatorAdded(
      validator?: PromiseOrValue<string> | null
    ): ValidatorAddedEventFilter;

    "ValidatorRemoved(address)"(
      validator?: PromiseOrValue<string> | null
    ): ValidatorRemovedEventFilter;
    ValidatorRemoved(
      validator?: PromiseOrValue<string> | null
    ): ValidatorRemovedEventFilter;
  };

  estimateGas: {
    addAdmin(
      _admin: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addOracle(
      _oracle: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addRegistrar(
      _registrar: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addValidator(
      _validator: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    admins(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    adminsCount(overrides?: CallOverrides): Promise<BigNumber>;

    isAdmin(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOracle(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRegistrar(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oraclesCount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registrars(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registrarsCount(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addAdmin(
      _admin: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addOracle(
      _oracle: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addRegistrar(
      _registrar: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addValidator(
      _validator: PromiseOrValue<string>,
      add: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    admins(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    adminsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAdmin(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOracle(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRegistrar(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oraclesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registrars(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registrarsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
