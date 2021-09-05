import {
    createThemeProvider,
    defaultPalette,
    defaultGetTypographyDesc,
    getIsPortraitOrientation,
    ViewPortOutOfRangeError,
    breakpointsValues,
} from "onyxia-ui";
import type { ThemeProviderProps } from "onyxia-ui";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import { createButtonBarButton } from "onyxia-ui/ButtonBarButton";
import { createButtonBar } from "onyxia-ui/ButtonBar";
import { createText } from "onyxia-ui/Text";
import { createPageHeader } from "onyxia-ui/PageHeader";
import { createMakeStyles } from "tss-react";
import { createLanguageSelect } from "onyxia-ui/LanguageSelect";
import { ReactComponent as TourSvg } from "./assets/svg/Tour.svg";
import { ReactComponent as ServicesSvg } from "./assets/svg/Services.svg";
import { ReactComponent as SecretsSvg } from "./assets/svg/Secrets.svg";
import { ReactComponent as AccountSvg } from "./assets/svg/Account2.svg";
import { ReactComponent as HomeSvg } from "./assets/svg/Home2.svg";
import { ReactComponent as FilesSvg } from "./assets/svg/Files.svg";
import { ReactComponent as CollaborationToolsSvg } from "./assets/svg/CollaborationTools.svg";
import { ReactComponent as BashSvg } from "./assets/svg/Bash.svg";
import { ReactComponent as CatalogSvg } from "./assets/svg/Catalog.svg";
import { ReactComponent as KeySvg } from "./assets/svg/Key.svg";
import { ReactComponent as OnyxiaLogoSvg } from "app/assets/svg/OnyxiaLogo.svg";
import { ReactComponent as TrainingsLogoSvg } from "app/assets/svg/Trainings2.svg";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import DeleteIcon from "@material-ui/icons/Delete";
import PublicIcon from "@material-ui/icons/Public";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CachedIcon from "@material-ui/icons/Cached";
import CloseSharp from "@material-ui/icons/CloseSharp";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LanguageIcon from "@material-ui/icons/Language";
import GetAppIcon from "@material-ui/icons/GetApp";
import ReplayIcon from "@material-ui/icons/Replay";
import HelpIcon from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
import type { Param0 } from "tsafe/Param0";
import { ComponentType } from "app/tools/types/ComponentType";
import type { SupportedLanguage } from "app/i18n/resources";

const { ThemeProvider, useTheme } = createThemeProvider({
    //We keep the default color palette but we add a custom color: a shiny pink.
    "getTypographyDesc": params => ({
        ...defaultGetTypographyDesc(params),
        "fontFamily": '"Work Sans", sans-serif',
    }),
    "palette": {
        ...defaultPalette,
        "limeGreen": {
            "main": "#BAFF29",
            "light": "#E2FFA6",
        },
        "agentConnectBlue": {
            "main": "#0579EE",
            "light": "#2E94FA",
            "lighter": "#E5EDF5",
        },
    },
});

export { ThemeProvider };

export const { makeStyles, useStyles } = createMakeStyles({ useTheme });

/** @see: <https://next.material-ui.com/components/material-icons/> */
export const { Icon } = createIcon({
    "delete": DeleteIcon,
    "edit": EditIcon,
    "add": AddIcon,
    "filterNone": FilterNoneIcon,
    "check": CheckIcon,
    "expandMore": ExpandMoreIcon,
    "attachMoney": AttachMoneyIcon,
    "chevronLeft": ChevronLeftIcon,
    "cached": CachedIcon,
    "close": CloseSharp,
    "infoOutlined": InfoOutlinedIcon,
    "brightness7": Brightness7Icon,
    "brightness4": Brightness4Icon,
    "translate": TranslateIcon,
    "visibility": VisibilityIcon,
    "visibilityOff": VisibilityOffIcon,
    "getApp": GetAppIcon,
    "replay": ReplayIcon,
    "help": HelpIcon,
    "search": SearchIcon,
    "cancel": CancelIcon,
    "bookmark": BookmarkIcon,
    "bookmarkBorder": BookmarkBorderIcon,
    "code": CodeIcon,
    "link": LinkIcon,
    "subdirectoryArrowRight": SubdirectoryArrowRightIcon,
    "accessTime": AccessTimeIcon,
    "equalizer": EqualizerIcon,
    "moreVert": MoreVertIcon,
    "public": PublicIcon,
    "sentimentSatisfied": SentimentSatisfiedIcon,
    "tour": TourSvg,
    "services": ServicesSvg,
    "secrets": SecretsSvg,
    "account": AccountSvg,
    "home": HomeSvg,
    "files": FilesSvg,
    "collaborationTools": CollaborationToolsSvg,
    "bash": BashSvg,
    "catalog": CatalogSvg,
    "key": KeySvg,
    "language": LanguageIcon,
    "training": TrainingsLogoSvg,
});

export type IconId = Param0<typeof Icon>["iconId"];

export const { IconButton } = createIconButton({ Icon });
export const { Button } = createButton({ Icon });
export const { Text } = createText({ useTheme });

export function getThemeProviderProps(params: {
    PortraitModeUnsupported: ComponentType;
}): Omit<ThemeProviderProps, "children"> {
    const { PortraitModeUnsupported } = params;

    return {
        "getViewPortConfig": ({ windowInnerWidth, windowInnerHeight }) => {
            if (
                getIsPortraitOrientation({
                    windowInnerWidth,
                    windowInnerHeight,
                })
            ) {
                throw new ViewPortOutOfRangeError(<PortraitModeUnsupported />);
            }

            let targetWindowInnerWidth = 1100;

            if (windowInnerWidth > breakpointsValues.md) {
                targetWindowInnerWidth = windowInnerWidth;
            }

            return {
                targetWindowInnerWidth,
                "targetBrowserFontSizeFactor": 1,
            };
        },
        "splashScreen": { "Logo": OnyxiaLogoSvg },
    };
}

export const { PageHeader } = createPageHeader({ Icon });

export const { ButtonBarButton } = createButtonBarButton({ Icon });
export const { ButtonBar } = createButtonBar({ Icon });
export const { LanguageSelect } = createLanguageSelect<SupportedLanguage>({
    "languagesPrettyPrint": {
        "en": "English",
        "fr": "Français",
    },
});