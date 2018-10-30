<template>

<div>


















    

    <link type="text/css" rel="stylesheet"
          href='/css/desktop.css;jsessionid=5D2B890AF139DDB4510E633226460B8D?v=14.4.9'/>
    
    <link type="text/css" rel="stylesheet"
          href='https://www.usherbrooke.ca/webfonts/udes-icons/css/udes-icons.css?v=14.4.9'/>
    <link type="text/css" rel="stylesheet"
          href='https://www.usherbrooke.ca/webfonts/century-schoolbook.css?v=14.4.9'/>
    <link type="text/css" rel="stylesheet"
          href='https://www.usherbrooke.ca/webfonts/open-sans.css?v=14.4.9'/>
<div id="page_wrapper">
    <header id="header">
        <noscript id="jsMessage">
            <p>Pour une meilleur expérience de navigation, JavaScript doit être activé sur votre navigateur.</p>
        </noscript>

        <div id="header_top" class="cf">
            <h1 class="visuallyhidden">Université de Sherbrooke</h1>
            <a id="logo" class="cf" tabindex="-1" href="http://www.usherbrooke.ca"><img
                    class="logo"
                    src="https://www.usherbrooke.ca/res/fileadmin/logo/logo_udes_188x44.png?v=14.4.9"
                    alt="Université de Sherbrooke"/></a>
            <div id="header_title_udes" class="no-desktop"><img
                    src="https://www.usherbrooke.ca/res/fileadmin/logo/UdeS_blanc.png?v=14.4.9"/>
            </div>
        </div>
    </header>

    <section id="main">
        <header>
            <div class="siteTitleStd">
                <h1>Service central d'authentification</h1>
            </div>
        </header>

        

        <div class="errors hidden error-info message-box"
             cause="cookie disabled">
            <h2>Cookies navigateur désactivés</h2>
            <p>Votre navigateur ne supporte pas les cookies. L'authentification centralisée NE FONCTIONNERA PAS.</p>
        </div>

        <!--tag pour url MON ACCES  -->
        
        <!--tag pour url INFO AIDE  -->
        

        
    <div class="template-login">
        <section class="content-area">
            
                <i class="icon-lock"></i>
            

            <div class="multicolumn">
                

                
                    
                    
                

                

                <section class="col1">
                    <form id="authentification" action="/login;jsessionid=5D2B890AF139DDB4510E633226460B8D?service=http%3A%2F%2Flocalhost%3A8000%2Flogin%2Fcas&amp;renew=true" method="post" autocomplete="off">
                        <fieldset>
                            <h2>
                                
                                Connexion</h2>

                            

                            <div class="field">
                                
                                
                                
                                

                                <label for="username"><u>I</u>dentifiant</label>

                                



<div
    class="extra-box">
    <i class="icon-help-circled-1 btn-extra-info" data-info="1e21c904-3924-41b7-a828-8d0d5d9b4616"></i>
    <div id="info-1e21c904-3924-41b7-a828-8d0d5d9b4616" class="extra-info">
        <button class="close" data-dismiss="alert"><span>Fermer</span><i class="icon-cancel-circled"></i></button>
        <div class="info-content">
            <p>Identifiants acceptés</p>
            <ul><li>Code d'identification personnel (CIP)</li><li>Adresse de courriel @USherbrooke.ca</li><li>Adresse de courriel autre</li></ul>
        </div>
    </div>
</div>


                                

                                
                                    <input id="username" name="username" class="required" tabindex="1" placeholder="Adresse courriel ou CIP" autofocus="autofocus" required="required" accesskey="I" type="text" value="" size="30" autocomplete="off"/>
                                

                                <div class="errors hidden" cause="required" ><i class="icon-attention"></i>Champ requis</div>
                            </div>

                            <div class="field">
                                
                                
                                

                                <label for="password"><u>M</u>ot de passe</label>
                                <a href="http://www.usherbrooke.ca/monacces/mot-de-passe-oubli?redirection=http%3A%2F%2Flocalhost%3A8000%2Flogin%2Fcas&app=localhost" tabindex="-1">(oublié?)</a>

                                <input id="password" name="password" class="required" tabindex="2" required="required" accesskey="M" type="password" value="" size="30" autocomplete="off"/>

                                <div class="errors hidden error-info" cause="required" ><i class="icon-attention"></i>Champ requis</div>
                                <div class="errors hidden warning-info" cause="capslock" ><i class="icon-attention"></i>Les majuscules sont verrouillés</div>
                            </div>

                            <input type="hidden" name="lt" value="LT-34110-XWZc5gjytf9HQb25oyoiBKdnN47COb-n1" />
                            <input type="hidden" name="execution" value="627c37a8-73ed-40c0-9c89-cc8e137d1a81_ZXlKbGJtTWlPaUpCTVRJNFIwTk5JaXdpWVd4bklqb2laR2x5SW4wLi52dnNaTElZbDhFdDRiWjhGLml4RWo5OFpYaTIwU0tPRDJaSnJCYUpLblR0WjJWLW9Lc21TTkRGQjRwNG1aTlVxWmdEcWtvN2c5YndUdzJvN2lnMUFBRmM3YnA2ODRqVnNkenQybU9YUjRzZGUtY2NoQTlyMVZHNldrODM3QUI2T204YkRNNktMejFSRDFhaXBRblNhVDJhU3g0Rnh4RGhpS1p4bnRrNXkzTmJ4WG9BdFIzSFA4RDI1dUR2U1JDMXV0Vnp2LTZzQjZzLUtxbTVsVXpPdWg1aURnYjFuZEdpR1ktMlR6T2VNNWN2YzhNT0V4Wl9sR05HNjBuRXVIeFlXYlJxeHFXb0RXUWIwQ2JIZ3Q0eWVxUjlfX21HVkQyX3IyX205R0tZcmZfbkNYUDN4OGNEc3ZJcHlLS290RjVUeG5qN0htRlcyMEJHRlRoMEpuNzFMZ3FSakJsYzFCeEt2Q1JYMk53YndmQWJ4THNGblplbV80UzVfeUQyWVBvVnJMN1JNSGVDZjhDWndxMGM4M1hrX1MxNTlsdktMbW5yNk1LcC1kaF9sY3hibmZYVGNQSVctV21yOGxXTkRLeTVwNjQxWHdIYzR0UkpNQ3A4OXBFZTR1SGJXNjFDVlI3bl94d3lSOUFneW9PNjJYY0FEYkU2Sk9BWmxERndSVVNTLU1kd0s3UFZveWxKWFBWdWhQV1RneTRXQmJkVmhCbjlVUnJjOUdpQ005SUhlR0Q5UXhKYjBYenhDOVh2c1YxUFV2SG44amFscWxVSDZieXF1Q21yVW9sQzFMSUcwQmpsbW9nZnAyc3kyMVhjRFU4QzNUckg4SnZLcV9UOGJXMDE3QVhzTjVtSnBBUlp2SUxteFJSWmxiMkc0YjBvWGIyZWk0NGVnalJrRVBhMm8zODV0RHdVc0hYSFlQRkZBNW1xQ1lPZGNqQnoyZFRvU0EtcDRXanp1WUNzWG1yZC1YRjcxVHN1enFxNWt0aEh3WldqallXOUNTWU10RWljQ05wZmN3Wjh3REJvMEJGamZjbWtrY2k1V2ZwOUc3bWM0d1pFTjRtVHF4eXhqMl9uclFIcWxyZ2REMV9OZlctYlduZWxMV3lrakM1OS1KYnE4WjEtLWRqTWNKbFRpSk50dlQ5cjF5dHpobGE3UW5scGllWEVxZG16WlRCcGJIVzNxenUyWEZlT0pGTDNBRl9NVWtPaE9uck96YTVXcWNnZTNOVEV4WlZaSWVFNmxsWmdHSm1MMUx5OExyUndfdWUzNllfdTRqUjQ1SHY1LWo3SExGWlhzMWNJbEg2TEZQcDRFVXduTnhrd3FBUnRPVERXdzVVZWMyVFZhUFRvaTc0cmxYQTB4bmZHVEJickVfWWxpVnRhbV9nSG41VlY0Snd3SGYwM3B4NTR0ZkJvUndNRXMzYl9aN1ZKd0JqejFDUWEyRFhBYVI1SUpCbjNlWC11ak0yZDU2VzRXd2dqMDMxRE5DbEpyeEFZanF5dmh1YmEwVVdtRFk0aGgxMy1scVRGVk9XWWMybXMwQ1JnTkx5b2dHMXNTV3FKcV9GM2FLVktWcFhzT3BNQ0dvQmNCLUxmenZORTRlNTItYVBRVURBT2pnYU83QnJ5NEhYOTI0bWhxVU1SYXMybndXZHZpVjZ0T19CNm52WXBITEZZTmdJbHNTT2VPVENKOGhnQ3lrdE9lcG03cVpseE9RNXYtVThxMFN4ejJiYzVoaFlnaTlVTV9nZ0JDVEtETXQ0di1NeG9yWjlyOVk2YTVVZ2NkRm50SFZGenhtYlJuc3F3YmhkVDMyT1llaGJuT1kyQ1ZaaHJhUmRFX3ZmS2tYVWEzOXB0enpNTDhwbEpkbkdZd182OEQwRDNicmJzTHRwakt2bnB6X0hhandoVVpVa0laN0l1aktZLU1LbURKSktBVGhybUVLdzlnRVNMRHlaZHRPYU1naTlsbmZIemdjZ2k1TlIybEhQcmF5bmFlVjFfdUZ3ajd2bDZKUm5HeWp6RHl6U0JOTXk5ZGRPbV9jSldXdndJSFVCTjJFSGVvbnJLTUF6MXpRNVJEdGJCWkJnZ2l4WjRFTFhmNjF5NWxjaWlHTVBtN2ctODZaTXdtR2ZrVV8yZ1QwSVFrR2tSZVFLV2hBRkZDVDZkdXBsYWZqR0FyUVphZi1OR3lMOWYyWFg2c3pMdzlETDJCWDRuRU5fNFFDVV9GYUdPaHd2LUw1SzVpT1poQnVYZUhDV2RhdWhieGxmdi0wQkIxR3loTDl4M0Zyd0YtbmpTVFpiZWFFdTRYa1lkZWVvTmpHUm1IeVF0eWM0anczb1ZVTnZjMlV6R0FldGlicnR5cW5TTkRyWWN5Tjh3VTVmd0pNaURWVjNzOWZQZmRiQ3dXYTNUTmFfbEhORGRUWnJYZWRBLTU2SzNiWUdjWEtVSEJCQ0VBUHQ5TzJkODQ5dnltdE9OcW1JMU10S29LbF9VQWU5VXdYNkUzSHZIRGJvY184OTkwZWxvQWxMTkx0bzhqTWpMc3pPZEladFl4SGI2b1pFLTlrbDBYTkFLdHVteUFwYV9fZENacXFpaDZELUhBdkhZeFU4VWx5SzdET3NBOUtWX25xSkJHcVNWQUFKZkVKWXVnR2tHMTZldkxGU0k3dHVlamZoQm5fUFktMDVMamlUblo2OFd0cmNYcWFWZ194N3U3c3FYV0dlNnl3VWwyX3ByWi1LUDhvREZ1MG1VOEQ4YWljRDUxeDVKdWRhS2hQSmsxbVJIa2Z6Mk1YSG14NjZEM2tCaW81ZTJWMkJkZlZWR1JVVlZicTlJSDZDTFNqQ3JIX0ZqUDdyS0JvbU9UeDhpY21VZUdFaE41UTYxdGViOGJFT250Y1lNVE1RakJSSk5PMXFKZFJVMi1aV2UyRThQRGp5RmtWV2tkSHE5R3BHS3ItcVdhTU1kbHAxN0R6VHRDLWNLam9GOTJyWjVzTG9PbkVZX3dLdW5IR3F6c3N6a014X01Nc0RUWUZNRVp4WVNyUi1ZVDFtRU9JRTB2NVpILW5oa0VGTnNfN3dUYmVZUktMdVlvanFWRTZXZ2JpcWUyY2NBRXZPUFpZWWQ4cTZoQTBnanQtYzBpMDZWcllpdVF3UlhMLVgwZ3dOanFoMzNNWWlqVDE1VkVZbTVtaFpsZzVrX2F6V2ctbUdvck1Ld0ZNNS1FVGg5M2g3MzRfaThSaXM0Y1RZVzdlM3lvVnNmOUpaNnNpUERoRFo2YUxQdE1hZHhOWlItQlNpRGg0RHV6SDUwRlpyMXV3VEEtbnFlUUd1a3hhclFsUGlFUFA5bWl6alRubUJfV2IyTk5NM041LWpKN2xGTk5fMGpmRXNVanlTbGpPSnFMZXdXMzQ5OXJpY0NFd285YXJPc293a2JOQ3B4V2FGc2t5S1BBSzFIRnRWeU5GZHNXSVI5WkQ0Y0FLTFgyRE9GR2E3TzNxVWVGUlRFejFMeDJUa2RadXVpT0Z1dXlreHVpcXdNajczdTdHbi1HY1JpWHJBWXFVWlhFQXRhRVNkOXdVRk56eU04V3p5RFYxSE5DTFp4ZDJoUEFtR3h1SVRHNFNZb0h3c0t6eTN6TW5uTmlLNXVweDJJWHByNW5yYTM5cWpFMkVBcnRjTUtRUGxBNktjTmgyTWRYVUFtbHJPTm5YSXBWTkpNTS44VVQ4WEZhbU1rQnJTTk9oRHd6VXVR" />
                            <input type="hidden" name="_eventId" value="submit" />

                            <div class="btn-list">
                                
                                
                                

                                <button class="btn-submit btn" name="submit" accesskey="C" tabindex="3" type="submit"><u>C</u>onnexion</button>
                            </div>

                            <div class="field check">
                                
                                
                                

                                <span class="checkContent">
                                <input id="warn" name="warn" tabindex="4" accesskey="P" type="checkbox" />
                            </span>
                                <label for="warn" class="warnLabel"><u>P</u>révenez-moi avant d'accéder à d'autres services.</label>
                            </div>
                        </fieldset>
                    <div>
</div></form>
                </section>

                <section class="col2">
                    <div class="row row1">
                        <h2>Nouvel utilisateur</h2>
                        
                        
                        
                        <div class="btn-list">
                            <a class="btn" accesskey="R" href="http://www.usherbrooke.ca/monacces/nouveau-auto?redirection=http%3A%2F%2Flocalhost%3A8000%2Flogin%2Fcas&app=localhost" tabindex="5">Me c<u>r</u>éer un compte</a>
                        </div>
                    </div>

                    <div class="row row2">
                        <h2>Dépannage</h2>
                        <ul>
                            <li><a tabindex="6" href="http://www.usherbrooke.ca/monacces/mot-de-passe-oubli?redirection=http%3A%2F%2Flocalhost%3A8000%2Flogin%2Fcas&app=localhost">J'ai oublié mon mot de passe</a></li>
                            <li><a tabindex="7" href="http://www.usherbrooke.ca/monacces/identifiant-oubli">Je ne me souviens pas de mon identifiant</a></li>
                            <li><a tabindex="8" href="http://www.usherbrooke.ca/info-aide/form/cas/ewoiYXBwIjogImxvY2FsaG9zdCIKLCIuc2VydmljZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbi9jYXMiCn0=" target="_blank">J'ai besoin d'aide</a></li>
                            <li><a tabindex="9" href="http://www.usherbrooke.ca/monacces">Portail monAccès</a></li>
                        </ul>
                    </div>
                </section>
            </div>

            


<p class="note">
    <strong>Protégez vos données personnelles</strong><br/>
    Si vous utilisez un ordinateur public ou partagé, assurez-vous de quitter le navigateur à la fin de votre session de travail.
</p>

        </section>
    </div>


    </section>
    <footer id="footer_inst">
        <p>Tous droits réservés © Université de Sherbrooke, 2500, boul. de l'Université, Sherbrooke (Québec) CANADA J1K 2R1
            <a class="block"
               href="http://www.usherbrooke.ca/accueil/fr/nous-joindre/"
               target="_blank">
                Contactez-nous
            </a><br/>
        </p>
    </footer>

    


    <div class="version_footer">Version 14.4.9</div>
</div>


</div>
</template>

<script src="/js/jquery-1.9.1.js;jsessionid=5D2B890AF139DDB4510E633226460B8D?v=14.4.9"></script>
    <script src="/js/jquery.capslockstate.js;jsessionid=5D2B890AF139DDB4510E633226460B8D?v=14.4.9"></script>
    <script src="/js/app.js;jsessionid=5D2B890AF139DDB4510E633226460B8D?v=14.4.9"></script>

<script>
export default {

}
</script>

<style>

</style>
