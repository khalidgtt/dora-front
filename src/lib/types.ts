export type DiffusionZoneType =
  | "country"
  | "region"
  | "department"
  | "epci"
  | "city";

export type LocationKind = "a-distance" | "en-presentiel";

export interface StructureService {
  address1: string;
  address2: string;
  categoriesDisplay: string[];
  category: string;
  categoryDisplay: string;
  city_code: string;
  city: string;
  contactEmail: string;
  contactName: string;
  contactPhone: string;
  department: string;
  diffusionZoneDetailsDisplay: string;
  diffusionZoneType: DiffusionZoneType;
  diffusionZoneTypeDisplay: string;
  isAvailable: boolean;
  isCumulative: boolean;
  locationKinds: LocationKind;
  locationKindsDisplay: string;
  model: string;
  modelChanged: boolean;
  modificationDate: string;
  name: string;
  postalCode: string;
  remoteUrl: string;
  shortDesc: string;
  slug: string;
  status: SERVICE_STATUSES;
  structure: string;
  useInclusionNumeriqueScheme: boolean;
}

export interface StructureModel {
  slug: string;
  name: string;
  department: string;
  modificationDate: string;
  categoriesDisplay: string[];
  shortDesc: string;
  structure: string;
  numServices: boolean;
}

export interface Branches {
  department: string;
  modificationDate: string;
  name: string;
  numServices: number | undefined;
  slug: string;
  typologyDisplay: string;
}

export interface ShortStructure {
  department: string;
  modificationDate: string;
  name: string;
  parent: string;
  siret: string;
  slug: string;
  typologyDisplay: string;
}

export interface Structure {
  accesslibreUrl: string;
  address1: string;
  address2: string;
  ape: string;
  archivedServices: StructureService[];
  branches: Branches[];
  canWrite: boolean;
  city: string;
  cityCode: string;
  codeSafirPe: string;
  creationDate: string;
  department: string;
  email: string;
  fullDesc: string;
  hasAdmin: boolean;
  hasBeenEdited: boolean;
  isAdmin: boolean;
  isMember: boolean;
  isPendingMember: boolean;
  latitude: number;
  longitude: number;
  models: StructureModel[];
  modificationDate: string;
  name: string;
  nationalLabels: string[];
  numModels: number;
  numServices: number;
  openingHours: string | null;
  openingHoursDetails: string | null;
  otherLabels: string;
  parent: string;
  phone: number;
  postalCode: string;
  services: StructureService[];
  shortDesc: string;
  siret: string | null;
  slug: string;
  source: StructureSource;
  typologyDisplay: string;
  typology: number;
  url: string;
}
export interface NationalLabel {
  value: string;
  label: string;
}

export interface Typology {
  value: string;
  label: string;
}

export interface StructuresOptions {
  nationalLabels: NationalLabel[];
  sources: StructureSource[];
  typologies: Typology[];
}

export interface StructureSource {
  value: string;
  label: string;
}

// OSM hours format
export type OsmPeriodDay = {
  isOpen: boolean;
  touched: boolean;
  openAt: string;
  closeAt: string;
};

export type OsmDay = {
  timeSlot1: OsmPeriodDay;
  timeSlot2: OsmPeriodDay;
};

export type OsmOpeningHours = {
  monday: OsmDay;
  tuesday: OsmDay;
  wednesday: OsmDay;
  thursday: OsmDay;
  friday: OsmDay;
  saturday: OsmDay;
  sunday: OsmDay;
};

// SERVICES
// TODO:convert to type
export enum SERVICE_STATUSES {
  DRAFT = "DRAFT",
  SUGGESTION = "SUGGESTION",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

export enum SERVICE_UPDATE_STATUS {
  NOT_NEEDED = "NOT_NEEDED",
  NEEDED = "NEEDED",
  REQUIRED = "REQUIRED",
}

export type ServiceCategory =
  | "acces-aux-droits"
  | "acc-global-indiv"
  | "apprendre-francais"
  | "creation-activite	"
  | "difficultes-financieres"
  | "emploi-choisir-metier"
  | "emploi-preparer-sa-candidature"
  | "emploi-trouver-emploi"
  | "equipement-alimentation"
  | "famille	"
  | "handicap"
  | "illettrisme"
  | "logement-hebergement"
  | "mobilite"
  | "numerique"
  | "remobilisation"
  | "sante";

export type ModerationStatus =
  | "NEED_INITIAL_MODERATION"
  | "NEED_NEW_MODERATION"
  | "IN_PROGRESS"
  | "VALIDATED";

export type ServiceKind =
  | "accompagnement"
  | "accueil"
  | "aide-financiere"
  | "aide-materielle"
  | "atelier"
  | "autonomie"
  | "delegation"
  | "financement"
  | "formation"
  | "information"
  | "numerique";

export type FeeCondition =
  | "gratuit"
  | "gratuit-sous-conditions"
  | "payant"
  | "adhesion"
  | "pass-numerique";

export type CoachOrientationModes = "EM" | "EP" | "FO" | "OT" | "PH";
export type BeneficiaryAccessModes = "EM" | "OS" | "OT" | "PH";

export interface SearchQuery {
  categoryIds: string[];
  subCategoryIds: string[];
  cityCode: string;
  cityLabel: string;
  kindIds: ServiceKind[];
  feeConditions: FeeCondition[];
}

export interface ServiceSearchResult {
  distance: number;
  location: string;
  diffusionZoneType: string;
  modificationDate: string;
  name: string;
  shortDesc: string;
  slug: string;
  structure: string;
  status: SERVICE_STATUSES;
  structureInfo: {
    address1: string;
    address2: string;
    city: string;
    name: string;
    postalCode: string;
    shortDesc: string;
    siret: string;
    slug: string;
    url: string;
  };
}

export interface FileInfo {
  url: string;
  name: string;
}

export type CustomizableFK = number | string;

export interface ServiceStructure {
  address1: string;
  address2: string;
  city: string;
  department: string;
  hasAdmin: boolean;
  name: string;
  numServices: number;
  postalCode: string;
  shortDesc: string;
  siret: string;
  slug: string;
  url: string;
}

export interface Point {
  type: "Point";
  coordinates: [longitude: number, latitude: number];
}

export interface Service {
  accessConditions: CustomizableFK[];
  accessConditionsDisplay: string[];
  address1: string;
  address2: string;
  beneficiariesAccessModes: BeneficiaryAccessModes[];
  beneficiariesAccessModesDisplay: string[];
  beneficiariesAccessModesOther: string;
  canWrite: boolean;
  categories: ServiceCategory[];
  categoriesDisplay: string[];
  category: ServiceCategory;
  categoryDisplay: string;
  city: string;
  cityCode: string;
  coachOrientationModes: CoachOrientationModes[];
  coachOrientationModesDisplay: string[];
  coachOrientationModesOther: string;
  concernedPublic: CustomizableFK[]; // TODO: should be public
  concernedPublicDisplay: string[];
  contactEmail: string;
  contactName: string;
  contactPhone: string;
  creationDate: string;
  credentials: CustomizableFK[];
  credentialsDisplay: string[];
  department: string;
  diffusionZoneDetails: string;
  diffusionZoneDetailsDisplay: string;
  diffusionZoneType: DiffusionZoneType;
  diffusionZoneTypeDisplay: string;
  feeCondition: FeeCondition;
  feeDetails: string;
  fillingDuration: number;
  forms: string[];
  formsInfo: FileInfo[];
  fullDesc: string;
  geom: Point;
  hasAlreadyBeenUnpublished: boolean;
  isAvailable: boolean;
  isContactInfoPublic: boolean;
  isCumulative: boolean;
  kinds: ServiceKind[];
  kindsDisplay: string[];
  locationKinds: LocationKind[];
  locationKindsDisplay: string[];
  model: string;
  modelChanged: boolean;
  modificationDate: string;
  name: string;
  onlineForm: string;
  postalCode: string;
  qpvOrZrr: boolean;
  recurrence: string;
  remoteUrl: string;
  requirements: CustomizableFK[];
  requirementsDisplay: string[];
  shortDesc: string;
  slug: string;
  status: SERVICE_STATUSES;
  structure: string;
  structureInfo: ServiceStructure;
  subcategories: string[];
  subcategoriesDisplay: string[];
  suspensionDate: string;
  useInclusionNumeriqueScheme: boolean;
}

export interface Bookmark {
  service: ShortService;
  creationDate: string;
}

export interface ShortService {
  categoriesDisplay: string[];
  category: string;
  categoryDisplay: string[];
  city: string;
  department: string;
  diffusionZoneDetailsDisplay: string;
  diffusionZoneType: DiffusionZoneType;
  diffusionZoneTypeDisplay: string;
  model: string;
  modelChanged: boolean;
  modificationDate: string;
  name: string;
  postalCode: string;
  shortDesc: string;
  slug: string;
  status: SERVICE_STATUSES;
  structure: string;
  structureInfo: ServiceStructure;
  useInclusionNumeriqueScheme: boolean;
}

export interface CustomChoice {
  value: number;
  label: string;
  structure: string | null;
}

export type ServicesOptions = {
  accessConditions: CustomChoice[];
  beneficiariesAccessModes: { value: BeneficiaryAccessModes; label: string }[];
  categories: { value: ServiceCategory; label: string }[];
  coachOrientationModes: { value: CoachOrientationModes; label: string }[];

  concernedPublic: CustomChoice[];
  credentials: CustomChoice[];
  deploymentDepartments: string[];
  diffusionZoneType: { value: DiffusionZoneType; label: string }; // TODO: should be plural
  feeConditions: { value: FeeCondition; label: string }[];
  kinds: { value: ServiceKind; label: string }[];
  locationKinds: { value: LocationKind; label: string }[];
  requirements: CustomChoice[];
  subcategories: { value: string; label: string }[];
};

export type Model = {
  accessConditions: CustomizableFK[];
  accessConditionsDisplay: string[];
  beneficiariesAccessModes: BeneficiaryAccessModes[];
  beneficiariesAccessModesDisplay: string[];
  beneficiariesAccessModesOther: string;
  canUpdateCategories: boolean;
  canWrite: boolean;
  categories: ServiceCategory[];
  categoriesDisplay: string[];
  coachOrientationModes: CoachOrientationModes[];
  coachOrientationModesDisplay: string[];
  coachOrientationModesOther: string;
  concernedPublic: CustomizableFK[];
  concernedPublicDisplay: string[];
  creationDate: string;
  credentials: CustomizableFK[];
  credentialsDisplay: string[];
  customizableChoicesSet: any; // TODO: a supprimer
  department: string;
  feeCondition: FeeCondition;
  feeDetails: string;
  forms: string[];
  formsInfo: FileInfo[];
  fullDesc: string;
  isCumulative: boolean;
  kinds: ServiceKind[];
  kindsDisplay: string[];
  modificationDate: string;
  name: string;
  numServices: number;
  onlineForm: string;
  qpvOrZrr: string;
  recurrence: string;
  requirements: CustomizableFK[];
  requirementsDisplay: string[];
  shortDesc: string;
  slug: string;
  structure: string;
  structureInfo: ServiceStructure;
  subcategories: string[];
  subcategoriesDisplay: string[];
  suspensionDate: string;
};

// FORM
export type Choice = {
  value: string;
  label: string;
  optGroupKey?: string;
  selectedLabel?: string;
  icon?: string;
  iconOnRight?: boolean;
};

export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
export type DayPrefix = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";
export type DayPeriod = "timeSlot1" | "timeSlot2";
